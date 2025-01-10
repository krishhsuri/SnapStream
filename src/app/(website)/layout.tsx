import React from 'react'
import LandingPageNavBar from './_components/navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="felx felx-col py-0 px-0">
      <LandingPageNavBar />
      {children}
    </div>
  )
}

export default Layout