import React from 'react'

export default function Button(props) {

  return (
    <div >
      <input className='button' type='button' value={props.value}></input>
    </div>
  )
}
