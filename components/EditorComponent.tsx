"use client"
import { Doc } from '@/lib/interface'
import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useState } from 'react'

type Props = {
  onSave: (title: string, content: string) => void
  initialContent?: Doc,
}

export default function EditorComponent({ onSave, initialContent }: Props) {
  const [title, setTitle] = useState(initialContent?.title || "");
  const [content, setContent] = useState(initialContent?.content || "")

  useEffect(() => {
    setContent(initialContent?.content || "");
    setTitle(initialContent?.title || "")
  }, [initialContent])

  return (
    <div className='mx-auto flex flex-col gap-6 mt-6 w-3/4'>
      <input className='p-2 text-2xl w-1/2 mx-auto rounded-md ' type="text" name="heading" id="heading" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Editor
        apiKey='vk5q0d6twde7ii4ehncmcrkz6c0mls0s0kpn7re6kqa8grr8'
        value={content}
        init={{
          entity_encoding: "raw",
          menubar: false,
          plugins: 'textcolor link lists checklist',
          toolbar: ' undo redo | forecolor backcolors | bold italic underline strikethrough | link mergetags | align | checklist numlist bullist ',
        }}
        onEditorChange={newContent => setContent(newContent)}
      />
      <button onClick={() => onSave(title, content)} className='bg-green-500 max-w-fit px-4 py-2 hover:border-2 border-cyan-950  mx-auto rounded-md'>Save</button>
    </div>
  )
}


