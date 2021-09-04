import React from 'react'

function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [btnText, setbtnText] = useState("Dark Mode")

    // const toggleDarkMode = () => {
    //     if (myStyle.color === "white") {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         setbtnText("Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white",
    //         })
    //         setbtnText("Light Mode")
    //     }
    // }

    let myStyle = {
        color: props.darkMode === 'dark' ? 'white' : 'black',
        backgroundColor: props.darkMode === 'dark' ? '#062e65' : 'white',
        border: '1px solid',
        borderColor: props.darkMode === 'dark' ? 'white' : 'black'
    }
    console.log(props.mode)
    return (
        <>
            <div className="container my-3" >
                <h1 className='mb-4 my-2' style={{ color: props.darkMode === 'dark' ? 'white' : 'black' }}>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p>This is the utility which can help you to manipulate your texts in the way you want by just clicking on button and it has some more features that you can check</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p>We don't take any single penny from our user its free to use enjoy TextUtils!</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>You can collaborate with us</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p>If you want to give us some more suggestions then feel free to reach out us via given any of social media platform</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-2 mx-2">
                <button onClick={toggleDarkMode} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
        </>
    )
}

export default About
