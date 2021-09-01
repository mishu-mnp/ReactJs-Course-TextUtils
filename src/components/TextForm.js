import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        // console.log("handle Up click clicked");
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const remExtraSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
    }

    // const handleCapClick = () => {
    //     console.log("italic")
    //     // console.log(typeof (text))

    //     let i;
    //     let capText = "";
    //     let textSplit = text.split(' ');
    //     console.log(textSplit);
    //     for (i = 0; i < textSplit.length; i++) {
    //         capText += (textSplit[i][0].toUpperCase() + textSplit[i].slice(1, textSplit[i].length) + " ");
    //     }

    //     setText(capText);

    // }

    const handleOnChange = (event) => {
        // console.log("On change");
        // setText(" ");
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
    }

    const handleCopy = () => {
        let text = document.getElementById('myText')
        // text.select();
        navigator.clipboard.writeText(text.value)
        console.log("Text Copied")
        alert('Text Copied to ClipBoard')
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >LowerCase</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleCapClick} >CapText</button> */}
            <button className="btn btn-primary mx-2" onClick={clearText} >ClearText</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >CopyText</button>
            <button className="btn btn-primary mx-2" onClick={remExtraSpaces} >Remove Extra Spaces</button>

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
