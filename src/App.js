import Login from "./Login";
import Navbar from "./Navbar";
import Content from "./Content";
import Donation from "./Donation";
import Printdonation from "./Printdonation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Print from './Print';
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
      </Routes>
    </Router>
  </>)
}

export default App