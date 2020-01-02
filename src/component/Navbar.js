import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css' 

export default function Navbar(){

    function logout(){
        localStorage.removeItem('token');
        window.location.replace('/');
    }
    
    let [token,setToken]=useState(false);
    useEffect(()=>{
        setToken(localStorage.getItem('token'));
    },[localStorage.getItem('token')]);
    
    return (
        <div style={{display: 'flex' }}>
        <ul style={{ flex: 1 }}>
            <li style={{}}><Link to='/'>Aplikasi Yanka</Link></li>
        </ul>
       
        <ul style={{ justifyContent: 'flex-end' }}>
        {token?<li style={{}} onClick={()=>{logout()}}><Link>Logout</Link></li>
:
        <div>
        <li style={{}}><Link to="/register">Register</Link></li>
        <li style={{}}><Link to="/login">Login</Link></li>
        </div>}
        
        </ul>
    </div>
    )
}