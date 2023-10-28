"use client"
import EditorComponent from '@/components/EditorComponent';
import { json } from 'stream/consumers';
export default function NewDoc() {
  const handleSave = (title: String, content: any) => {
    console.log("save button pinged")
    const data = {
      title: title,
      content: content
    }
    const saveDoc = async () => {
      await fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
    }
    saveDoc()
  }
  return (
    <EditorComponent onSave={handleSave} />
  )
}


