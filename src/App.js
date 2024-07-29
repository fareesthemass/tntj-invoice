import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Donation from "./components/Donation";
import Printdonation from "./components/Printdonation";
import Masjid from "./components/Masjid";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Print from './components/Print';
function App() {
  return (<>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/content" element={<Content />} />
        <Route path="/print" element={<Print />} />
        <Route path="/donation" element={<Donation/>}></Route>
        <Route path="/printdonation" element={<Printdonation/>}/>
        <Route path="/masjid" element={<Masjid/>}/>
      </Routes>
    </Router>
  </>)
}

export default App