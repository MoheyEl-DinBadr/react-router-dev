import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./componenets/About.tsx";
import Home from "./componenets/Home.tsx";
import NavBar from "./componenets/NavBar.tsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path={""} element={<Home/>}/>
                  <Route path={"about"} element={<About/>}/>
              </Routes>
          </BrowserRouter>
      </>

  )
}

export default App
