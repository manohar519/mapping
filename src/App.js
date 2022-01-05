
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Faq from './Components/Faq';
import Trading from './Components/Trading';
import Main from './Components/Main';
import ResponsiveAppBar from './Components/Appbar';
import Main1 from './Components/Main1';

function App() {
  return (
    <div className="App">


     
      <ResponsiveAppBar/>
      <br />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/trade" element={<Trading/>} />
        <Route path="/tab" element={<Main1/>} />
      </Routes>




    </div>
  );
}

export default App;
