import Home from "./Home";
import Five from "./pages/Five"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/5" element={<Five />} />
      </Routes>
    </>
  );
}

export default App;
