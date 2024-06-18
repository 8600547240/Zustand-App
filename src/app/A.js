import React, { useState } from 'react'
import { useStore } from './store'

export const A = () => {
    const [name,setName] = useState('')
    const set = useStore((state) => {
      return state.set
    })
    const fnClick = () => {
        set({name})
    }
  return (
    <div>
       <h1>A</h1>
       <p>
          <input onChange={(eve) => {
            setName(eve.target.value)
          }}/> 
          <input type="button" value="submit" onClick={fnClick}/> 
       </p>
    </div>
  )
}

  
