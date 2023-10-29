import React from 'react'

export default function View({ params }: { params: { id: number } }) {

  return (
    <>
      <h1>{params.id}</h1>
    </>
  )
}
