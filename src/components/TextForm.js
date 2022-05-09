import React, { useState } from 'react'

export default function TextForm(props){
    
    const handleUpClick = ()=>{
        //console.log("Uppercase clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleDownClick = ()=>{
        //console.log("Uppercase clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success");
    }

    // const convertToTitlecase = () => {
    //     setText(text[0].toUpperCase() + text.substring(1).toLowerCase());
    // }

    const handleCopy = () => {
        // console.log("I am copy");
        // var text = document.getElementById('mybox');
        // console.log(text);
        // text.select();
       navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
       props.showAlert("copied to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[  ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase clicked" + text);
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared","success");
    }

    const handleOnChnage = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="mybox" className="form-label"></label>
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChnage} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-info m-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-info m-1" onClick={handleDownClick}>Convert To Lowercase</button>
            {/* <button className="btn btn-info m-1" onClick={convertToTitlecase}>Convert To Camelcase</button> */}
            <button disabled={text.length===0} className="btn btn-info m-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-info m-1" onClick={handleExtraSpaces}>Remove EXTRAspace</button>
            <button disabled={text.length===0} className="btn btn-info m-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>Your Text Summery</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
