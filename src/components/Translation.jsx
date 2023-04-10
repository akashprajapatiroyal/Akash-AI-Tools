import React from 'react'

export default function Translation({dostuff, setInput, result}) {
  return (
  <div> 
    <h2>Write your Query Here.</h2>
    <textarea 
    id="textarea1" placeholder="Type here..."
    cols={60} 
    rows={10} 
    onChange={(e) => setInput(e.target.value)}>
    </textarea>
    <button type='button' onClick={dostuff}>Get Results!</button>
    <textarea id="textarea2" placeholder="Results will appear here..." defaultValue={result.length > 0 ? result : ""}></textarea> 
    </div>
  )
}