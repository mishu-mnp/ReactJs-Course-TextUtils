import './App.css';


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



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
