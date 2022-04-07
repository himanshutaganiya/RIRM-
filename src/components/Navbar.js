import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";


function Navbar() {

    const [search, setSearch] = useState('') 
    let navigate = useNavigate ();

    function logoutHandler(){
        navigate("/");
    }

    return (
        <div>
            <nav className='navbar'>
                <i className="fa fa-navicon"></i>
                <input type="text" placeholder="Sarch for something..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <ul>
                    <li><a href='#'><i className="fa fa-envelope"></i></a></li>
                    <li><a href='#'><i className="fa fa-bell" ></i></a></li>
                    <li><button onClick={logoutHandler}><i className="fa fa-sign-out"></i>Log Out</button></li>
                </ul>
            </nav>
        
        </div>
    )
}

export default Navbar