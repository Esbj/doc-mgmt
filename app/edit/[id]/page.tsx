"use client"

import EditorComponent from '@/components/EditorComponent';
import React, { useEffect, useState } from 'react'

export default function Edit({ params }: { params: { id: number } }) {
  const [doc, setDoc] = useState();

  const handleSave = (title: string, content: string) => {
    console.log(title, content)
    //fetch insert endpoint
  }
  useEffect(() => {
    const getDoc = async () => {
      const result = await fetch(`/api/${params.id}/`);
      const parsedDoc = await result.json();
      const response = parsedDoc[0]
      console.log(response)
      setDoc(response)
    };
    getDoc();
  }, [])


  return (
    <EditorComponent onSave={handleSave} initialContent={doc} />
  )
}
