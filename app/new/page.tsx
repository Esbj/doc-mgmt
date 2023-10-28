"use client"
import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useRef } from 'react'
export default function NewDoc() {




  return (
    <div className='mx-auto flex flex-col gap-6 mt-6 w-3/4'>
      <input className='p-2 text-2xl w-1/2 mx-auto rounded-md ' type="text" name="heading" id="heading" placeholder='Title' />
      <Editor
        apiKey='vk5q0d6twde7ii4ehncmcrkz6c0mls0s0kpn7re6kqa8grr8'
        init={{
          menubar: false,
          plugins: ' textcolor  link lists checklist casechange export formatpainter pageembed permanentpen footnotes advtemplate tableofcontents mergetags powerpaste tinymcespellchecker autocorrect typography inlinecss',
          toolbar: ' undo redo | forecolor backcolor | blocks fontsize | bold italic underline strikethrough | link mergetags | align | checklist numlist bullist ',
        }}
      />

    </div>
  )
}


