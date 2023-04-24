import Home from "./Home";
import Five from "./pages/Five"
import Six from "./pages/Six"
import Videos from "./pages/Videos"
import Mawsou3a from "./pages/Mawsou3a"
import Atlas from "./pages/Atlas"
import Lesson6 from "./pages/six/Lesson6"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/5" element={<Five />} />
        <Route path="/6" element={<Six />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/mawsou3a" element={<Mawsou3a />} />
        <Route path="/videos" element={<Videos />} />

        <Route path="/6/lesson-6" element={<Lesson6 />} />
      </Routes>
    </>
  );
}

export default App;
