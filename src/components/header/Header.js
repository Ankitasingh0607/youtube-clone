import React, { useState } from 'react'
import './_header.scss'
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications , MdApps} from 'react-icons/md'
import Logo from './img/logo.png'
import { useNavigate } from 'react-router-dom'
import Profile from './img/profile.jpg'

const Header = ({handleToggleSidebar}) => {

const [input,setInput] = useState('')
const navigate = useNavigate()

const handleSubmit  = (e)=>{
  e.preventDefault()

  navigate(`/search/${input}`);
}


  return (
    <div className=' header'>
     <FaBars className='header_menu' 
     size={26}
     onClick={()=>handleToggleSidebar()}
     />
     <img src={Logo} className='header_logo'/>
     <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Search' value={input} onChange={e=>setInput(e.target.value)}/>
      <button type='submit'>
        <AiOutlineSearch size={22} />
      </button>
     </form>
     <div className='header_icons'>
      <MdNotifications size={28}/>
      <MdApps size={28}/>
    <img src={Profile} alt="Avtar"/>
     </div>
    </div>
  )
}

export default Header