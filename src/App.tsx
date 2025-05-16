import { Route, Routes } from "react-router-dom";
import { Inner } from "./pages/Inner/Inner";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inner" element={<Inner />} />
    </Routes>
  );
}

export default App;
