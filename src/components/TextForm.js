import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        // console.log("handle Up click clicked");
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        // setText(" ");
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={clearText} >ClearText</button>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length - text.split(' ').length + 1} letters</p>
                <p>{0.008 * text.split(' ').length} Minutes required</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
