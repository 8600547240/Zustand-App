import React, { useState } from 'react'
import { useStore } from './store'

export const B = () => {
    const [loc,setLoc] = useState('')
    const set = useStore((state) => {
      return state.set
    })
    const fnClick = () => {
        set({loc})
    }
  return (
    <div>
       <h1>B</h1>
       <p>
          <input onChange={(eve) => setLoc(eve.target.value)}/> 
          <input type="button" value="submit" onClick={fnClick}/> 
       </p>
    </div>
  )
}

  
