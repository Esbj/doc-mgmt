"use client"
import EditorComponent from '@/components/EditorComponent';
import { useRouter } from 'next/navigation';
export default function NewDoc() {
  const router = useRouter();


  const handleSave = (title: String, content: any) => {
    const data = {
      title: title,
      content: content
    }
    const saveDoc = () => {
      fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
        .then(() => router.push("/"))
    }
    saveDoc()
  }
  return (
    <EditorComponent onSave={handleSave} />
  )
}


