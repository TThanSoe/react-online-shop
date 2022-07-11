import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import Women from "./components/women/women-component";
import Men from "./components/men/men-component";
import Kids from "./components/kids/kids-component";
import Authentication from "./routes/authentication/authentication";
import SignUp from "./components/sign-up/sign-up";

import "./App.css";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
