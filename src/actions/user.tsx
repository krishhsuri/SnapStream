'use server'

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticateUser = async() =>
{
  try {
    const user = await currentUser()
    if(!user)
    {
      return { status: 403 }
    }
    const UserExist = await client.user.findUnique(
      {
        where :
        {
          clerkid : user.id,
        },
        include :
        {
          workspace :
          {
            where : {
              User:
              {
                clerkid : user.id,
              },
            },
          },
        },
      }
    )
    if(UserExist)
    {
      return { status : 200, user : UserExist}
    }
    const newUser = await client.user.create(
      {
        data : {
          clerkid : user.id,
          email : user.emailAddresses[0].emailAddress,
          firstname : user.firstName,
          lastname : user.lastName,
          image : user.imageUrl,
          studio:
          {
            create : {},
          },
          subscription:
          {
            create: {},
          },
          workspace:
          {
            create :
            {
              name : `${user.firstName}'s Workspace`,
              type : 'PERSONAL',
            },
          },
        },
        include: 
        {
          workspace : true,
        },
      }
    )
    return { status : 200 , user : newUser}
  } catch(error) {}
}