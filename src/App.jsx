// I am practice fo two way binding
import React, { useState } from 'react'

const App = () => {
  const [title,settitle]=useState('');

  const submithandler=(e)=>{
    e.preventDefault()
  console.log("Submitted", title);
  settitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text"  placeholder="Username"
        value={(title)} 
        onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
