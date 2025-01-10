import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center py-4 px-6 bg-background dark:bg-background-dark shadow-md z-50">
      <div className="text-3xl font-semibold flex items-center gap-x-3 text-primary-foreground brightness-200">
        
        <Image
          alt="SnapStream logo"
          src="/opal-logo.svg"
          width={40}
          height={40}
        />
        <span className="text-3xl font-extrabold text-primary-foreground">SnapStream</span>
      </div>
      <div className="hidden lg:flex gap-x-10 items-center text-lg">
        <Link
          href="/"
          className="text-primary-foreground hover:text-primary transition-colors duration-300 font-bold brightness-200"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-primary-foreground hover:text-primary transition-colors duration-300 font-bold brightness-200"
        >
          Pricing
        </Link>
        <Link
          href="/"
          className="text-primary-foreground hover:text-primary transition-colors duration-300 font-bold brightness-200"
        >
          Contact
        </Link>
      </div>
      <Link href="/auth/sign-in">
        <Button className="text-base flex gap-x-2 bg-primary text-primary-foreground rounded-full py-2 px-5 hover:bg-primary/90 transition-colors duration-300">
          <User fill="#fff" />
          Login
        </Button>
      </Link>
    </div>
  )
}

export default LandingPageNavBar
