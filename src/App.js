// import logo from './logo.svg';
import "./App.css";
import Header from "../src/Components/Headers/Header";
import Main from "./Components/Main";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ModalComp from "./Pages/Modal";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/modal" element={<ModalComp />} />
        </Route>
      </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Main/> } />
            <Route path="*" element={ <NotFound/> } />
            <Route path="/modal" element={ <ModalComp/> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
