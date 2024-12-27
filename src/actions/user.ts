'use server'

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticateUser = async () => {
  try {
    // Get the current authenticated user
    const user = await currentUser()

    // If no user is authenticated, return a 403 Forbidden status
    if (!user) {
      return { status: 403 }
    }

    // Check if the user already exists in the database by their clerkid
    const userExist = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    })

    // If the user exists, return a 200 status with the existing user
    if (userExist) {
      return { status: 200, user: userExist }
    }

    // If the user does not exist, create a new user
    const newUser = await client.user.create({
      data: {
        clerkid: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstname: user.firstName,
        lastname: user.lastName,
        image: user.imageUrl,
        studio: {
          create: {},
        },
        subscription: {
          create: {},
        },
        workspace: {
          create: {
            name: `${user.firstName}'s Workspace`,
            type: 'PERSONAL',
          },
        },
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    })

    // If the new user is created successfully, return a 201 status
    if (newUser) {
      return { status: 201, user: newUser }
    }

    // If creation fails, return a 400 Bad Request status
    return { status: 400 }

  } catch (error) {
    // Log any errors and return a 500 status
    console.log('🔴 ERROR', error)
    return { status: 500 }
  }
}
