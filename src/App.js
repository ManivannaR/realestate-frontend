import Property from "./components/Property/Property";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProperty from "./components/AddProperty/AddProperty";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/homepage" element={<Property />}></Route>
          <Route path="/add" element={<AddProperty />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
