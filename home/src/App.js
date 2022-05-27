
import React from "react";
import Container from "./components/Container";
import "./style/index.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import GetInTouch from "./pages/GetInTouch"
import SomeThoughts from "./pages/SomeThoughts"
import Home from "./pages/Home";

function App() {
  return (
   
      
           <Router>
               <Container>
                <Routes>
                    <Route path="/get-in-touch" element={ <GetInTouch />}>
                    </Route>
                    <Route path="/some-thoughts" element={ <SomeThoughts />}>
                    </Route>
                    <Route path="/" element={ <Home />}>
                    </Route>
                </Routes>
                </Container>
           </Router>



  );
}

export default App;
