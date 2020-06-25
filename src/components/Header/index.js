import React from 'react'
import Button from '../Button/index'

export default function Header() {
  return (
    <div className="header" >
      <h1 className='title'>Développeur web</h1>
      <h2 className='subtitle transition'>HTML & CSS - ReactJS - NodeJS </h2>
      <Button value='Télécharger le CV'></Button>
    </div>
  )
}
