import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <h1 className='text-3xl text-center py-4'><Link href={"/"}>Doc mgmt</Link></h1>
  )
}
