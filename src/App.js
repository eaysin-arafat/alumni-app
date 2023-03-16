import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
