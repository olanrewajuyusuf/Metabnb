import "./App.css";
import HomePage from "./components/Home";
import Place from "./components/Place";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={`/`} element={<HomePage />} />
        <Route path={`/Place`} element={<Place />} exact />
      </Routes>
    </Router>
  );
}

export default App;
