import React ,{useEffect, useState} from 'react'
import Mail from './Mail'
import mailData from '../Mail.json'

function Inbox() {
  
    const [data, setData] = useState([])
    
    useEffect(()=>{
      setData(mailData)
    },[])
    
    return (
      <div className='inbox'>
          <div className='inbox-nav'>
            <h2>Inbox (16)</h2>
            <div>       
              <input placeholder='Search mail'></input> 
              <button onClick={()=>{console.log("Clicked search button")}}>Search</button>
            </div>
          </div>
          <div className='inbox-nav2'>
            <div>
              <button><i class="fa fa-refresh"></i>Refresh</button>
              <button><i class="fa fa-eye"></i></button>
              <button><i class="fa fa-exclamation"></i></button> 
              <button><i class="fa fa-trash-o"></i> </button> 
            </div>
            <div>
              <button><i class="fa fa-eye"></i></button>
              <button><i class="fa fa-exclamation"></i></button>   
            </div>
          </div>

          {
            data.map((dataItem)=>{
              return <Mail name = {dataItem.name} subject = {dataItem.subject} time = {dataItem.time}/>
            })
          }
      </div>
    )
}

export default Inbox