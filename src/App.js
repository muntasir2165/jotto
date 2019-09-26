import React from "react";
import { connect } from "react-reduxx";
import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
import { getSecretWord } from "./actions";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={this.props.success} />
      <GuessedWords guessedWords={this.props.guessedWords} />
    </div>
  );
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);
