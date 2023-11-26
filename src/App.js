import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;
