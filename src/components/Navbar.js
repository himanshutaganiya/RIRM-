import React, { useState } from 'react'

function Navbar() {

    const [search, setSearch] = useState('') 

    return (
        <div>
            <nav className='navbar'>
                <i className="fa fa-navicon"></i>
                <input type="text" placeholder="Sarch for something..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <ul>
                    <li><a href='#'><i className="fa fa-envelope"></i></a></li>
                    <li><a href='#'><i className="fa fa-bell" ></i></a></li>
                    <li><a href="#"></a><i className="fa fa-sign-out"></i>Log Out</li>
                </ul>
            </nav>
        
        </div>
    )
}

export default Navbar