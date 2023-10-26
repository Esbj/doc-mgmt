import Preview from "@/components/Preview"
export default function Home() {
  const docs = [
    {
      heading: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
    {
      heading: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
    {
      heading: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
    {
      heading: "Heading",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquid reprehenderit, laboriosam dicta eaque veniam odio eum doloribus eos, sapiente eligendi recusandae officia accusamus id atque ex quo quis cumAnimi esse omnis nulla nihil dolor quod sunt suscipit quisquam ut, optio sapiente, recusandae aperiam voluptatum rerum deleniti non, repellendus praesentium aspernatur! Dolores, nemo voluptas voluptates quam mollitia voluptatibus quod? Laborum at necessitatibus similique a dolorum autem amet, molestiae in deleniti inventore, maiores blanditiis accusamus numquam nemo.Odit, inventore ea quaerat, esse quis officiis eaque vero vel, impedit ratione et! Esse quidem repellat et ducimus nisi cupiditate dicta dignissimos minus doloremque facere consequatur voluptas architecto accusantium nihil veniam, necessitatibus ad fugit eum nesciunt modi facilis ab.Doloribus cupiditate iusto ut!"
    },
  ]
  return (
    <main className="bg-gray-200 h-screen">
      <h1 className='text-3xl text-center py-4'>Doc mgmt</h1>
      <div className="mx-auto container flex">
        {docs.map((doc, i) => (
          <Preview key={i} document={doc} id={i} />
        ))}
      </div>
    </main >
  )
}
