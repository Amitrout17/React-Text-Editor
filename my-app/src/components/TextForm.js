import React,{useState} from 'react';
export default function Textform(props){
   
    const [text,setText]=useState('');
   
    const clickeventUpper=()=>{
         const result=text.toUpperCase();
         setText(result);
    }
    const clickeventLower=()=>{
        const result=text.toLowerCase();
        setText(result);
   }

    const clickeventRemoveExtraSpace=()=>{
    const result=text.replace(/\s+/g,' ').trim();
    setText(result);
    }

    const changeEvent=(event)=>{
        setText(event.target.value);
    }

    const clickeventClear=()=>{
        setText('');
    }

    return(
        <>
        <div >
        <div className="container my-3" >
            <label style={{color:props.mode==='dark'?'white':'black'}}>Enter Your Text Here</label>
            <br />
            <br />
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changeEvent}></textarea>
            <br />
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={clickeventUpper} >To Uppercase</button>
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={clickeventLower} >To Lowercase</button>
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={clickeventClear} >Clear Text</button>
            <button type="button" className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={clickeventRemoveExtraSpace} >Remove Extra Space</button>
        </div>
        <div className="container my-10" style={{backgroundColor:props.mode==='dark'?'#303842':'white'}}>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary : </h1>
            <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length} characters and {text.split(" ").length-1} words</p>
        </div>
        </div>
        </>
    )
}
