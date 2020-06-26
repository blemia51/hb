import React from 'react'
import Button from '../Button/index'
import logoLinkedin from '../../asset/img/linkedin.png'
import logoGitHub from '../../asset/img/github.png'

export default function Header() {
  return (
    <div className="header" id='accueil' >
      <h1 className='title'>Développeur web</h1>
      <h2 className='subtitle transition'>HTML & CSS - ReactJS - NodeJS </h2>
      <div className='social'>
        <Button value='Télécharger le CV'></Button>
        <img src={logoLinkedin}/>
        <img src={logoGitHub}/>
      </div>
    </div>
  )
}
