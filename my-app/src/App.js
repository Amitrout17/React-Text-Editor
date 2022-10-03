import Navbar from "./components/Navbar"; 
import Textform from "./components/TextForm";
import React,{useState} from 'react';

function Ap() {
  const [mode,changeMode]=useState('light')
  const toogleMode=()=>{
    if(mode==='light'){
      changeMode('dark');
      document.body.style.backgroundColor='#303842';
    }
    else{
      changeMode('light')
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <Navbar title="TEXT-EDITOR" toogleMode={toogleMode} mode={mode} />
    <Textform mode={mode} />
    </>
  );
}

export default Ap;
