import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const [txt , setTxt] = useState('')
  const handleTxt = (e) => { setTxt(e.target.value) }
  return (
    <>
      <div>Home</div>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>  
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <input type="text" placeholder="Enter User Name"  onChange={handleTxt}/>
        <button onClick={() => dispatch({ type: 'SETUSER', payload: txt })}>Set User</button>
    </>
  )
}

export default Home