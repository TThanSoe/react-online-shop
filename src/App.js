import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import "./App.css";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop">Online Shop</Route>
      </Route>
    </Routes>
  );
}

export default App;
