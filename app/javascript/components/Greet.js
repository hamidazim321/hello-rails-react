import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreeting } from '../redux/greetSlice/greetSlice'

export default function Greet() {
  const {value: greet, loading, error} = useSelector(state => state.greet)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGreeting())
  }, [])
  return (
    <div>
      {error &&<div>{error}</div>}
      {loading ? (
        <h1>....</h1>
      ) : (
        <h1>
          {greet}
        </h1>
      )}
      <button onClick={()=>dispatch(fetchGreeting())}>Get another greeting</button>
    </div>
  )
}
