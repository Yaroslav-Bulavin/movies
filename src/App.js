import React from "react";
import { Header } from "./components/Header";
import "./index.css"
import {Intro} from "./components/Intro";
import {Cards} from "./components/Cards";
import {Footer} from "./components/Footer";
import {Login} from "./components/Login";
import {Search} from "./components/Search";


function App() {

  const [open, setOpen] = React.useState(false);

  return (
      <>
        <Header changeStateOpen={() => setOpen(true)}/>

        <Intro/>

        <Search/>

        <Cards/>

        <Login open={open} changeStateOpen={() => setOpen(false)}/>

        <Footer/>
      </>
  );
}

export default App;

