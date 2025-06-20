import Navbar from "@/components/Navbar";
import React from 'react'

export default function CrudLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>  
      {children}
     </div>
  )
}
