import React from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>Home</div>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>  
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  )
}

export default Home