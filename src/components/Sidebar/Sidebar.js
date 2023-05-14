import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'

import logos from '../../assets/images/logo-s.png'
import logosub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faHome,faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faSteam
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
          <img src={logos} alt='logo' />
          <img className='sub-logo' src={logosub} alt='logo' />
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>
          
          <NavLink exact="true" activeclassname="about-link" to="/about">
              <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>

          <NavLink exact="true" activeclassname="contact-link" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>

        </nav>


        <ul>
          <li>
            <a target='_blank' href=''><FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/></a>
          </li>
          <li>
            <a target='_blank' href=''><FontAwesomeIcon icon={faGithub} color='#4d4d4e'/></a>
          </li>
          <li>
            <a target='_blank' href=''><FontAwesomeIcon icon={faSteam} color='#4d4d4e'/></a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar