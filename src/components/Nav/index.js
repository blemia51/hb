import React from 'react'

export default function Nav() {
  return (
    <div id='accueil'> 
      <ul className='navigation'>
        <li>
          <a href='#accueil'>Accueil</a>
          <hr/>
        </li>
        <li>
          <a href='#a-propos'>A propos</a>
          <hr/>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
          <hr/>
        </li>
        <li>
          Contact
          <hr/>
        </li>

      </ul>
    </div>
  )
}
