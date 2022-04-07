import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Sidemenu from './Sidemenu';
import Inbox from './Inbox';

function Dashboard() {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Sidemenu/>
      <Inbox/>     
    </div>
  )
}

export default Dashboard