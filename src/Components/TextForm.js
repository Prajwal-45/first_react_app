import React, {useState} from 'react'


export default function TextForm(props) {
    const[Text,setText]=useState('Enter Text Here'); 
    const HandleUpCase= () => {
        setText(Text.toUpperCase());

    }
    const HandleLowerCase= () => {
       
        setText(Text.toLowerCase());

    }
    const HandleOnChange= (event) =>{
        
        setText(event.target.value)

    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
     
   <div className="mb-3">
   <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={HandleOnChange} rows="8"></textarea>
   </div>
   <button type="submit" className="btn btn-primary mb-3 mx-3" onClick={HandleUpCase}>ConvertToUpperCase</button>

   <button type="submit" className="btn btn-primary mb-3 mx-3" onClick={HandleLowerCase}>ConvertToLowerCase</button>

      
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} words, {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} minutes to read the above text</p>
    </div>
    </>
  )
}
