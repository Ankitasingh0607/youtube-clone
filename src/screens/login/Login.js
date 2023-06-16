import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './_login.scss'
import Logo from './img/logo.png'
import login from '../../redux/actions/auth.action'


const Login = () => {
  const dispatch = useDispatch()

  const accessToken = useSelector(state=>state.auth.accessToken)

    const handleLogin = ()=>{
      dispatch(login())
    }
    const navigate = useNavigate()

    useEffect(()=>{
      if(accessToken){
        navigate('/');
      }
    },[accessToken],navigate)
  
  return (
    <div className='login'>
        <div className='login__container'>
            <img src={Logo} alt=""/>
            <button onClick={handleLogin}>Login with Google</button>
            <p>This Page is made by Youtube API</p>
        </div>
    </div>
  )
}

export default Login