import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import Hogs from "../porkers_data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer originalHogs={Hogs} />
      </div>
    );
  }
}

export default App;
