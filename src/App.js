import "./App.css";
import HomePage from "./components/Home";
// import Housing from "./components/Housing";
// import Discover from "./components/Nfts";
// import Footer from "./components/footer";
// import ConnectWallet from "./components/connect-wallet";
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
