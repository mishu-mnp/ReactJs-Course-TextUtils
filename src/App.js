import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Mishu"
function App() {
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
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Analyze your Text here" />

      </div>
    </>
  );
}

export default App;
