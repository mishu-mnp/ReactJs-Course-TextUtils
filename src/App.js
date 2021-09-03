import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


// let name = "Mishu"
function App() {


  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#062e65'
      showAlert('Dark Mode is enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Analyze your Text';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'TextUtils - Install Now';
      // }, 3000);
    }

    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  const colorBgMode = (e) => {
    setMode('yellow');
    document.body.style.backgroundColor = 'yellow';
    document.getElementById('y').style.backgroundColor = 'yellow'
    console.log(e.target.id)
    if (e.target.id === 'y') {
      setMode('yellow');
      document.body.style.backgroundColor = 'yellow';
      document.getElementById('y').style.backgroundColor = 'yellow'
    }
    else if (e.target.id === 'g') {
      setMode('grey');
      document.body.style.backgroundColor = 'grey';
      document.getElementById('g').style.backgroundColor = 'grey'
    }
    else {
      setMode('purple');
      document.body.style.backgroundColor = 'purple';
      document.getElementById('p').style.backgroundColor = 'purple'
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div classNameName="container">
        <h1>Hello! {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio laudantium doloribus. Veniam, adipisci asperiores maiores modi perferendis libero minus! Quae reiciendis doloribus eos, odit excepturi ducimus earum nobis nesciunt itaque ad dolorum magni eveniet voluptas voluptates? Doloremque, velit deleniti.</p>
        <h2>This is ReactJs Tutorial</h2>
        <h4>This is some Heading</h4>
      </div> */}

      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar /> */}

      <Navbar title="TextUtils" darkMode={mode} colorBtn={colorBgMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Analyze your Text here" darkMode={mode} />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
