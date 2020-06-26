import React from 'react'



export default function Nav(props) {

  return (
    <div > 
      <ul className='navigation'>
        <li>
          <a onClick={ window.scrollTo({
            top: 0,
            behavior: "smooth"
          })}>Accueil</a>
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
