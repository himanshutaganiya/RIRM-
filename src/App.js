import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Vnavbar from './components/Sidebar';
import Sidebar from './components/Sidebar';
import Sidemenu from './components/Sidemenu';
import Inbox from './components/Inbox';

function App() {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Sidemenu/>
      <Inbox/>
      
    </div>
  );
}

export default App;
