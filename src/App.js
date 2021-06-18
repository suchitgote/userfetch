

import React, {useState} from 'react'
import './App.css';
import Loader from './component/Loader'


function App() {

  const [pageno, setPageno] = useState('');
  const loadpage = (i)=>{
    setPageno(i)
    document.querySelectorAll("button")[i-1].style.background = "white"
    if(i === 1){
       i = 2
    }else{
       i = 1
    }
    document.querySelectorAll("button")[i-1].style.background = "skyblue"
  }
  return (
    <>
        <Loader pageno={pageno} ></Loader>
        <div className="button">
          <button onClick={ ()=>{ loadpage(1) } }  > 1 </button>
          <button onClick={ ()=>{ loadpage(2) } }  > 2 </button>
        </div>
    </>
  )
  
}

export default App;