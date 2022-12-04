
import './App.css';
import Button from './components/Button';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Investment from './components/Investment';
import ImageCardDetail from './components/ImageCardDetail';
import ButtonSignIn from './components/ButtonSignIn';



function App() {
  return (
    <Router>
    <div className="App">
       <Nav>
        <NavItem href="/companies">Empresas</NavItem>
        <NavItem href="/capital">Captar</NavItem>
        <NavItem><Link to={"/investment"}>Investimento</Link></NavItem>
        <Button>Login</Button>
        <ButtonSignIn>Sign-in</ButtonSignIn>
      </Nav>

      <Routes>
      <Route path="/home" element={<Home/>} /> 
      <Route path="/investment" element={<Investment/>} />
      <Route path="/cardDetail" element={<ImageCardDetail/>} />
      </Routes> 

    </div>
    </Router>
  );
}

export default App;
