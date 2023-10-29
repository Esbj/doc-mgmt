"use client"

import EditorComponent from '@/components/EditorComponent';
import React, { useEffect, useState } from 'react'

export default function Edit({ params }: { params: { id: number } }) {
  const handleSave = (title: string, content: string) => {
    //fetch insert endpoint
  }
  const [doc, setDoc] = useState()
  useEffect(() => {
    const getDoc = async () => {
      const result = await fetch(`/api/${params.id}/`);
      const docFromApi = await result.json();
      console.log(docFromApi)
      setDoc(docFromApi)
    };
    getDoc();

  }, [params.id])

  return (
    <EditorComponent onSave={handleSave} initialContent={doc} />
  )
}
