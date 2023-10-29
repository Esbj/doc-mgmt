"use client"
import { Doc } from '@/lib/interface'
import React, { useEffect, useState } from 'react'

export default function View({ params }: { params: { id: number } }) {
  const ID = params.id
  const [doc, setDoc] = useState<Doc>()
  useEffect(() => {
    fetch(`api/${ID}`)
      .then(res => res.json())
      .then(data => setDoc(data[0]))
  }, [])
  return (
    <div className='flex p-6 bg-white w-3/4 mx-auto rounded-md justify-center flex-col text-left'>
      <h1 className='text-2xl text-center'>
        {doc?.title}
      </h1>
      <div className='m-10' dangerouslySetInnerHTML={{ __html: doc?.content || "Loading content..." }} />
    </div>
  )
}
