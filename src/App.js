import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import NavBar from "./component/NavBar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("authenticate::", authenticate);
    if (authenticate) navigate("/");
  }, [authenticate]);

  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
