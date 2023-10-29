import { Doc } from '@/lib/interface'
import Link from 'next/link'
import React from 'react'
type props = {
  document: Doc
  id: number
  handleRemove: (id: number) => void
}

export default function Preview({ document, id, handleRemove }: props) {
  // remove HTML tags and &nbsp gets replaced with actuall spaces
  const justText = document.content.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/gi, " ");

  return (
    <div className="bg-white p-6 w-1/2 rounded-3xl ">
      <div className='flex justify-between'>
        <Link href={`/${id}`}>
          <h2 className="text-2xl">{document.title}</h2>
        </Link>
        <div className=''>
          <Link href={`/edit/${id}`}><span className=' px-2 material-icons'>edit</span></Link>
          <span onClick={() => handleRemove(id)} className='cursor-pointer material-icons'>delete</span>
        </div>
      </div>

      <Link href={`/${id}`}>
        <p>{justText.substring(0, 120) + "..."}</p>
      </Link>
    </div>
  )
}
