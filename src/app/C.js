import React from 'react'
import { useStore } from './store'

export const C = () => {
  const state = useStore((state) => state) 
  return (
    <div>
      <h1>C</h1>
      <h3>Name: {state.name}</h3>
      <h3>Location: {state.loc}</h3>
    </div>
  )
}
 

  
