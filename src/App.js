import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import {Container} from "react-bootstrap";
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import HomeScreen from './screens/homescreen/HomeScreen';
import './_app.scss';
import Login from "./screens/login/Login";
import {BrowserRouter as Router,Routes,Route,Switch, BrowserRouter} from 'react-router-dom'
import { WatchScreen } from "./screens/watchscreen/WatchScreen";
import Searchscreen from "./screens/Searchscreen";
const Layout =({children})=>{
  const [sidebar,toggleSidebar] =useState(false);
  const handleToggleSidebar =()=> toggleSidebar(value=>!value)
  return(
    <>
       <Header handleToggleSidebar={handleToggleSidebar}/>
     <div className="app_container">
      <SideBar
       sidebar={sidebar}
       handleToggleSidebar={handleToggleSidebar}
       />
      <Container fluid className="app_main">
        {children}
      
      </Container>
     </div>
     </>
  )
}



function App() {

const {accessToken,loading} = useSelector(state=>state.auth)

useEffect(()=>{

if(!loading && !accessToken){

}

},[accessToken,loading])

  return (
    
      <Routes>
        <Route path='/'element={<Layout> <HomeScreen/></Layout>}>
         
      </Route>
      <Route path="auth" element={<Login/>}>
       
      </Route>
      <Route path='/search/:query' element={<Layout>
        <Searchscreen/>
      </Layout>}>
        
      </Route>
      <Route path='/watch/:id' element={<Layout>
        <WatchScreen/>
      </Layout>}>
        
      </Route>
      </Routes>
  
  );
}

export default App;
