import { useState } from 'react'
import './App.css'

function App() {
  
  //let counter=0
  //    [Variable,Function]
  const [counter,setCounter]= useState(1)
  //    method
  const addValue=()=>{
    
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)

   // setCounter(counter+1)
    
  }

  const subValue=()=>{
    setCounter(counter-1)
    console.log(setCounter)

  }
  return (
    <>
 <h1>Heloo REACT</h1>
 <h1>Counter Name {counter} </h1>
 <button 
 onClick={addValue}
 >Add Value</button> {" "}
 <button
 onClick={subValue}
 >Remove Value</button>
 <p>footer: {counter}</p>
    </>
  )
}

export default App
