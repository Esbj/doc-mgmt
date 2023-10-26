import Link from 'next/link'
import React from 'react'
type props = {
  document: {
    content: string,
    heading: string
  }
  id: number
}
export default function Preview({ document, id }: props) {
  return (
    <div className="bg-white m-4 rounded-3xl p-6">
      <div className='flex justify-between'>

        <Link href={`/${id}`}>
          <h2 className="text-2xl">{document.heading}</h2>
        </Link>
        <div className=''>
          <Link href={`/edit/${id}`}><span className=' px-2 material-icons'>edit</span></Link>
          <span className='px-2 material-icons'>delete</span>
        </div>
      </div>
      <Link href={`/${id}`}>
        <p>{document.content.substring(0, 250) + "..."}</p>
      </Link>
    </div>
  )
}
