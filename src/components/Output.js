import React from 'react'
import Markdown from "marked-react";
import "../styles/Output.css"

export default function Output({data}) {
  return (
    <div className='output bg-sky-100'>
      <h1 className='font-bold text-slate-900 text-2xl'>Output: </h1>
      <div className='preview bg-slate-100' id='preview'>
        <Markdown>{data}</Markdown>
      </div>
    </div>
  )
}
