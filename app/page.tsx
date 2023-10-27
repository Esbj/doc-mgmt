"use client"
import Preview from "@/components/Preview"
import { Doc } from "@/lib/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [docs, setDocs] = useState<Array<Doc>>()
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const result = await fetch("/api/dagbok");
  //     const postsFromApi = await result.json();
  //   };
  //   getPosts();
  // }, [data]);
  useEffect(() => {
    setDocs(data)
  }, [])
  const data: Doc[] = [
    {
      title: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
    {
      title: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
    {
      title: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
    {
      title: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
  ]
  return (
    <main>
      {docs &&
        <div className="flex flex-wrap items-center justify-center mx-auto w-2/3 gap-6 flex-1">
          <Link className="" href="/new"><span className="flex-grow text-center m-auto bg-white rounded-3xl material-icons icon-large self-center">add</span></Link>
          {docs.map((doc, i) => (
            <Preview key={i} document={doc} id={i} />
          ))}
        </div>
      }
    </main >
  )
}
