import { Header } from "./Header";
import { Intro } from "./Intro";
import { Search } from "./Search";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import React, { useState } from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { actionIsOpen } from "../redux/actions";

const Main = ({ open, actionIsOpen }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Header changeStateOpen={() => actionIsOpen(true)} />

      <Intro />

      <Search />

      <Cards />

      <Login open={open} changeStateOpen={() => actionIsOpen(false)} />

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    open: state.movies.open,
  };
};
const mapDispatchToProps = {
  actionIsOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
