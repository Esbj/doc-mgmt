"use client";
import EditorComponent from '@/components/EditorComponent';
import { Doc } from '@/lib/interface';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
export default function Edit({ params }: { params: { id: number } }) {

  const [doc, setDoc] = useState<Doc>();
  const ID = params.id
  const router = useRouter()
  const handleSave = (title: string, content: string) => {
    console.log(title, content, doc?.id)
    const data: Doc = {
      content: content,
      title: title,
      id: ID
    }
    fetch(`/api/edit/${ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(() => router.push("/"))
  }

  useEffect(() => {
    const getDoc = async () => {
      const result = await fetch(`/api/${ID}/`);
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
