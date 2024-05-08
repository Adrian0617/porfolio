import React, { useState } from 'react'

export const Search = ({searching,setsearching}) => {
    function handleInputChange(e) {
        console.log(e.target.value);
        setsearching(e.target.value)
    }

  return (
    <div>
        <input type="text" onChange={(e)=>handleInputChange(e)} />
    </div>
  )
}
