
import  { useState, useEffect } from "react";
import Landing from './Components/Landing/Landing';
import MudWare from './Components/MudWare/MudWare';

const App =()=> {

  const [gold,setGold]=useState(true)

   useEffect (() => {
   setTimeout(()=>{setGold(false)}, 3000)
  }, [])
  


  return (
    <div>
      { gold ?  
        <Landing /> 
        :
        <MudWare />   
      } 
    </div>

  );
}

export default App;

