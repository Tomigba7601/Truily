import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Footer />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;


