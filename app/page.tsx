"use client"
import Preview from "@/components/Preview"
import { Doc } from "@/lib/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [docs, setDocs] = useState<Array<Doc>>()
  useEffect(() => {
    const getDocs = async () => {
      const result = await fetch("/api/");
      const docsFromApi = await result.json();
      setDocs(docsFromApi)
    };
    getDocs();
  }, []);

  const handleRemove = (id: number) => {
    fetch(`api/remove/${id}`,
      {
        method: "POST"
      }
    )
  }

  return (
    <main>
      {docs &&
        <div className="flex flex-wrap items-center justify-center mx-auto w-2/3 gap-6 flex-1">
          <Link className="" href="/new"><span className="flex-grow text-center m-auto bg-white rounded-3xl material-icons icon-large self-center">add</span></Link>
          {docs.map((doc) => (
            <Preview key={doc.id} document={doc} id={doc.id} handleRemove={handleRemove} />
          ))}
        </div>
      }
    </main >
  )
}
