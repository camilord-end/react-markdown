import React, {useState} from 'react'
import Output from './Output'

export default function Input() {
  const [text, setText] = useState(' ')
  console.log(text)
  return (
    <div>
      <h1>Input: </h1>
      <textarea className='' rows="5" placeholder='Input text here' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <Output data={text}/>
    </div>  
  )
}
