"use client"
import { Editor } from '@tinymce/tinymce-react'
import React, { useState } from 'react'
export default function NewDoc() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("")


  const handleSave = () => {
    //sql new doc
  }
  return (
    <div className='mx-auto flex flex-col gap-6 mt-6 w-3/4'>
      <input className='p-2 text-2xl w-1/2 mx-auto rounded-md ' type="text" name="heading" id="heading" placeholder='Title' onChange={e => setTitle(e.target.value)} value={title} />
      <Editor
        apiKey='vk5q0d6twde7ii4ehncmcrkz6c0mls0s0kpn7re6kqa8grr8'
        value={content}
        init={{
          menubar: false,
          plugins: ' textcolor  link lists checklist casechange export formatpainter pageembed permanentpen footnotes advtemplate tableofcontents mergetags powerpaste tinymcespellchecker autocorrect typography inlinecss',
          toolbar: ' undo redo | forecolor backcolor | blocks fontsize | bold italic underline strikethrough | link mergetags | align | checklist numlist bullist ',
        }}
        onEditorChange={newContent => setContent(newContent)}
      />
      <button onClick={handleSave} className='bg-green-500 max-w-fit px-4 py-2 hover:border-2 border-cyan-950  mx-auto rounded-md'>Save</button>
    </div>
  )
}


