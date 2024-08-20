import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("enter your text here");
const handleUp=(event)=>{

setText(event.target.value);
}
const onUpClick=()=>{
  
   let newText=text.toUpperCase();
setText(newText);
props.showAlert("Text has converted into upper case","success");
}
const onLoClick=()=>{
  
  let newText=text.toLowerCase();
setText(newText);
props.showAlert("Text has converted into lower case","success");
}
const onCapitilizeClick=()=>{
  
  let newText=("");
setText(newText);
props.showAlert("Text has cleared","success");

}
 
 
 const handleCopy=()=>{
  var text=document.getElementById("exampleFormControlTextarea1");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text has copied","success");
 }
 const handleExtraSpaces=()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join[""])
 }

  return (
<>

<div className="container" style={{color:props.mode===`dark`?`white`:`black`|props.mode2===`dark`?`white`:`black`}}>
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleUp}  style={{backgroundColor: props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black`}} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <div className='container my-3'style={{color:props.mode===`dark`?`white`:`black`}} ></div>
  <button  className='btn btn-primary mx-2' onClick={onUpClick}>Change to UpperCase</button>
  <button  className='btn btn-primary mx-2' onClick={onLoClick}>Change to Lowerase</button>
  <button  className='btn btn-primary mx-2' onClick={onCapitilizeClick}>Clear Text</button>
  <button  className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
  <button  className='btn btn-success mx-2' onClick={handleExtraSpaces}>Remove Spaces</button>

<div className='container my-3'style={{color:props.mode===`dark`?`white`:`black`}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} character</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter your text in the above to see preview"}</p>

</div>

</>

  )
}
