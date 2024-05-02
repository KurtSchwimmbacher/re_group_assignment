import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddProp from "./pages/AddProp";
import Listings from "./pages/Listings";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/addProp" element={<AddProp />} />
      <Route path="/listings" element={<Listings />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
