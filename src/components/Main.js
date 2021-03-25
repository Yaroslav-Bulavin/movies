import {Header} from "./Header";
import {Intro} from "./Intro";
import {Search} from "./Search";
import {Cards} from "./Cards";
import {Login} from "./Login";
import {Footer} from "./Footer";
import React, {useState} from "react";

export const Main = () => {

  const [open, setOpen] = useState(false);

  return (
      <>
          <Header changeStateOpen={() => setOpen(true)}/>

          <Intro/>

          <Search/>

          <Cards/>

          <Login open={open} changeStateOpen={() => setOpen(false)}/>

          <Footer/>
      </>
  )
};