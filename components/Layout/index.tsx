import Header from "./Header"
import React from "react"
import SideNav from "./SideNav"

type ILayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="grid w-full grid-flow-col  grid-cols-[max-content_auto]">
      <SideNav />
      <div className="flex min-h-screen flex-col items-center justify-between w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}