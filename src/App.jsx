import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Phone from "./pages/Phone";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Phone />} />
      </Routes>
    </Router>
  );
}

export default App;
