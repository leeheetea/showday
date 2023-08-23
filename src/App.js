import "./App.css";
import Main from "./pages/Main";
import Musical from "./pages/Musical";
import Concert from "./pages/Concert";
import Theatre from "./pages/Theatre";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/musical" element={<Musical />}></Route>
        <Route path="/concert" element={<Concert />}></Route>
        <Route path="/theatre" element={<Theatre />}></Route>
      </Routes>
    </div>
  );
}

export default App;
