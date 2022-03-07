import React from 'react'
import Markdown from "marked-react";

export default function Output({data}) {
  return (
    <div>
      <h1>Output: </h1>
      <Markdown>{data}</Markdown>
    </div>
  )
}
