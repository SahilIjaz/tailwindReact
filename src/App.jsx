import { useState } from 'react'
import Card from './componenets/card'
import './App.css'

function App(){


  const [counter,setCounter]=useState(0)
  function addValue()  {
setCounter(prevCounter=>prevCounter+1);
console.log('number is: ',counter)
  }
  function removeValue(){setCounter(prevCounter=>prevCounter-1)}

  return (
    <>
<h1 className='bg-green-400 text-white font-bold'>
Value: <span className='italic'>{counter}</span></h1>
<button onClick={addValue}>Add value</button>
  <br/>
  <br/>
  <button onClick={removeValue}>Remove value</button>
    <h1 className='bg-green-400'>Hello Tailwind</h1>
    <Card/>
   
    </>
  )
}

export default App
