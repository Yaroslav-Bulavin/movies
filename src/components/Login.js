import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogContent from "@material-ui/core/DialogContent";
import { connect } from "react-redux";
import { actionLoggedIn } from "../redux/actions";

const useStyles = makeStyles({
  faceebokBtn: {
    display: "block",
    margin: "20px auto",
  },
  loginTitle: {
    textAlign: "center",
  },
  loginEmail: {
    textAlign: "center",
  },
  loginBtn: {
    justifyContent: "center",
  },
  loginModal: {
    width: "400px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0",
    backgroundColor: "#ffffff",
  },
  loginImg: {
    display: "block",
    margin: "0 auto",
  },
});

const Login = ({ open, changeStateOpen, login, actionLoggedIn }) => {
  const classes = useStyles();

  const responseFacebook = (response) => {
    console.log(response);
    actionLoggedIn({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  let fbContent;

  const loginFacebookClicked = () => {};
  if (login.isLoggedIn) {
    fbContent = (
      <div
        style={{
          width: "400px",
          backgroundColor: "#ffffff",
        }}
      >
        <img
          src={login.picture}
          alt={login.name}
          className={classes.loginImg}
        />
        <h2 className={classes.loginTitle}>Welcome {login.name}</h2>
        <p className={classes.loginEmail}>Email: {login.email}</p>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="1651115125276761"
        autoLoad={true}
        fields="name,email,picture"
        onClick={loginFacebookClicked}
        callback={responseFacebook}
      />
    );
  }

  console.log(fbContent);
  console.log(login);

  return (
    <Dialog
      open={open}
      onClose={changeStateOpen}
      aria-labelledby="form-dialog-title"
    >
      {console.log(open)}
      <DialogContent className={classes.loginModal}>{fbContent}</DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    login: state.movies.login,
  };
};
const mapDispatchToProps = {
  actionLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
