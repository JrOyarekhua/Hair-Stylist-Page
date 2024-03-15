import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
function Header() {
  
  const [clicked,setClicked] = useState(false)
  function handleIconClick(){
    // set clicked to be true
    setClicked(!clicked)
  }
  return(
    <header className='header'>
      <h1>logo</h1>
      <nav className='header-nav'>
      {!clicked && <FontAwesomeIcon icon={faBars} onClick={handleIconClick} className='nav-icon' />}
      {clicked && 
      <ul className='header-list'>
          <FontAwesomeIcon icon={faX} className='nav-icon-X'/>
          <li>About</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Testimonials</li>
        </ul>}
       
      </nav>
      <section>
        <h1>LauriiKayStylez</h1>
        <p>Unleash your inner beauty one Strand at a time</p>
      </section>
    </header>
  )
  
}

export default Header;
