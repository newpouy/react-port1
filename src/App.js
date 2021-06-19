import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Image = (props) => {
  console.log(props, 'in Image')
  return (
    <img src={props.logo} className="App-logo" alt="logo" />
  )
}

const AppLink = () => {
  const [name, setName] = useState('')
  const [test, eeeeNaeMaeum] = useState('initTest')
  const handleChangeName = (event) => {
    console.log(event.target.value, 'in handleChangeName')
    setName(event.target.value)
  }
  const handleChangeTest = (event) => {
    console.log(event.target.value, 'in handleChangeTest')
    eeeeNaeMaeum(event.target.value)
  }
  useEffect(() => {
    console.log(name, 'in useEffect')
    if(name == 'ffff') {
      alert('you entered ffff')
    }
    return () => {
    }
  }, [name])

  return (
    <div>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <input type="text" id="name" value={name} onChange={handleChangeName}/>
    <input type="text" id="test" value={test} onChange={handleChangeTest}/>
    </div>
  )
}

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Image logo={logo}/>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <AppLink/>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
