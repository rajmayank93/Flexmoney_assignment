import "./App.css";
import YogaForm from "./YogaForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchComponent from "./search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<YogaForm />} />
        <Route path="/find" element={<SearchComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
