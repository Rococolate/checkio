import React, { Component, Children } from "react";
import "./index.css";
import WallKeeper from "./components/WallKeeper/WallKeeper.js";

// const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const input = [5, 7, 13, 14, 18];
// const input = [2,3,4];
// const level = 2;
const level = 5;

export default class App extends Component {
  
  constructor(){
    super();
    this.state = { 
    };
  }

  render (){
    return (
      <WallKeeper level={level} input={input} />
    );
  } 
}

