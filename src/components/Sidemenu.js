import React, { useState } from 'react'

function Sidemenu() {

    return (
        <div className="sidemenu">
            <button>Compose Mail</button> 
            <h4>FOLDERS</h4>
            <a href="#"><i className="fa fa-inbox"></i>Inbox</a>
            <a href="#"><i className="fa fa-envelope"></i>Sent Mail</a>
            <a href="#"><i className="fa fa-info-circle"></i>Important</a>
            <a href="#"><i className="fa fa-id-badge"></i>Drafts</a>
            <a href="#"><i className="fa fa-trash-o"></i>Trash</a>
            <h4>CATEGORIES</h4>
            <a href="#"><i className="fa fa-circle" style={{fontSize:'16px',color:'green'}}></i>Work</a>
            <a href="#"><i className="fa fa-circle" style={{fontSize:'16px',color:'red'}}></i>Documents</a>
            <a href="#"><i className="fa fa-circle" style={{fontSize:'16px',color:'blue'}}></i>Social</a>
            <a href="#"><i className="fa fa-circle" style={{fontSize:'16px',color:'yellow'}}></i>Advertising</a>
            <a href="#"><i className="fa fa-circle" style={{fontSize:'16px',color:'orange'}}></i>Clients</a>
            <h4>LABELS</h4>
            <div className='labels'>
                <button><i className="fa fa-tag"></i>Family</button>
                <button><i className="fa fa-tag"></i>Work</button>
                <button><i className="fa fa-tag"></i>Home</button>
                <button><i className="fa fa-tag"></i>Children</button>
                <button><i className="fa fa-tag"></i>Holidays</button>
                <button><i className="fa fa-tag"></i>Music</button>
                <button><i className="fa fa-tag"></i>Photography</button>
                <button><i className="fa fa-tag"></i>Film</button>
            </div>
        </div>
    )
}

export default Sidemenu