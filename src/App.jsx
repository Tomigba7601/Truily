import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer"
import Signup from './components/Signup/Signup';
import Verification from './components/Verification/Verification';
import Otp from './components/Otp/Otp';
import Emailverification from './components/Emailverification/Emailverification';
import Name from './components/Name/Name';
import Age from './components/Age/Age';
import Picture from './components/Pictureverify/Picture';
import Identification from './components/Identification/Identification';
import Location from './components/Location/Location';
import Welcome from './components/Welcome/Welcome';
import Bio from './components/Bio/Bio';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/emailverify" element={<Emailverification/>} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/name" element={<Name />} />
        <Route path="/age" element={<Age />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/Identify" element={<Identification/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/bio" element={<Bio/>} />

        
      </Routes>
    </Router>
  );
}

export default App;


