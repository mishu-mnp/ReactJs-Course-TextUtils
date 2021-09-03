import React, { useState } from 'react'

function TextForm(props) {

    const handleUpClick = () => {
        // console.log("handle Up click clicked");
        setText(text.toUpperCase());
        props.showAlert('Converted to UPPERCASE!', 'success');
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase!', 'success');
    }

    const remExtraSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra Spaces Removed!', 'success')
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
        props.showAlert('Text Cleared!', 'success');
    }

    const handleCopy = () => {
        let text = document.getElementById('myText')
        // text.select();
        navigator.clipboard.writeText(text.value)
        console.log("Text Copied")
        // alert('Text Copied to ClipBoard')
        props.showAlert('Text Copied to Clipboard!', 'success');
    }

    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div className="container" style={{ color: props.darkMode === 'dark' ? 'white' : 'black' }}>

                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.darkMode === 'dark' ? 'grey' : 'white', color: props.darkMode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myText" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >LowerCase</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleCapClick} >CapText</button> */}
                <button className="btn btn-primary mx-2" onClick={clearText} >ClearText</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >CopyText</button>
                <button className="btn btn-primary mx-2" onClick={remExtraSpaces} >Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.darkMode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length - text.split(' ').length + 1} letters</p>
                <p>{0.008 * text.split(' ').length} Minutes required</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Text above to preview here"}</p>
            </div>
        </>
    )
}

export default TextForm
