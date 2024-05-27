import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Phone from "./pages/Phone";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Phone />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </Router>
  );
}

export default App;
