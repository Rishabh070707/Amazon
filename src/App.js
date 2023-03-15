import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { StateContext } from "./StateContex";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__componants">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
