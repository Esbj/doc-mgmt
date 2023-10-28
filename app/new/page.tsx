"use client"
import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useRef } from 'react'
export default function NewDoc() {




  return (
    <div className='container mx-auto w-3/4'>
      <input className='rounded-md w-fit mx-auto text-2xl p-2' type="text" name="Heading" id="heading" placeholder='Document title' />
      <Editor
        apiKey='vk5q0d6twde7ii4ehncmcrkz6c0mls0s0kpn7re6kqa8grr8'
        init={{
          plugins: ' emoticons  link lists searchreplace visualblocks wordcount checklist casechange export formatpainter pageembed permanentpen footnotes advtemplate tableofcontents mergetags powerpaste tinymcespellchecker autocorrect typography inlinecss',
          toolbar: 'undo redo | blocks fontsize | bold italic underline strikethrough | link mergetags | align | checklist numlist bullist| emoticons ',
        }}
      />

    </div>
  )
}


