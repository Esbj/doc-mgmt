"use client"
import EditorComponent from '@/components/EditorComponent';
import { Editor } from '@tinymce/tinymce-react'
import React, { useState } from 'react'
export default function NewDoc() {



  const handleSave = (title: String, content: any) => {
    //sql new doc
  }
  return (
    <EditorComponent onSave={handleSave} />
  )
}


