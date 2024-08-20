
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';

import Text from './components/Text.js';
import Alert from './components/Alert.js';

 
  
function App() {
  const [mode2,setMode2]=useState("light");
  const toggleMode2=()=>{
   if(mode2==="light"){
    setMode2({
      backgroundColor:"red",
      color:'white',
    }
      );
      document.body.style.backgroundColor="red";
      showAlert("Dark mode is enable","success");
      setTimeout(() => {
        setAlert(null)
  }, 1500);}

    else{setMode2("light");
      document.body.style.backgroundColor="white";
    showAlert("Light mode is enable","success");
    setTimeout(() => {
        setAlert(null)
    }, 1500);
    }}

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
    type:type,
    })}
    

  
  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
   if(mode==="light"){
    setMode(
      "dark");
      document.body.style.backgroundColor="#291056";
      showAlert("Dark mode is enable","success");
      setTimeout(() => {
        setAlert(null)
      }, 1500);
   }
    else{
      setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light mode is enable","success");
    setTimeout(() => {
        setAlert(null)
    }, 1500);
  
  }}
  
  return (
    <>
   
<Navbar title='iCoder' aboutText='click here' toggleMode2={toggleMode2} toggleMode={toggleMode} mode={mode} mode2={mode2}/>
<Alert alert={alert}/>
<div  className='container'>
  
        
          
          <Text heading='Enter Your Text'  showAlert={showAlert} mode2={mode2} mode={mode}/>
          

          </div>



</>
  )
  
}

export default App;
