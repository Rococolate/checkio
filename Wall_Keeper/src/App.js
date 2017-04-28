import React, { Component, Children } from "react";
import "./index.css";
import WallKeeper from "./components/WallKeeper/WallKeeper.js";
import SelectNumber from "./components/SelectNumber/SelectNumber.js";
import wallKeeper from "../index.js";

// const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// const input = [5, 7, 13, 14, 18];
// const input = [2,3,4];
// const input = [19];
// const level = 2;
// const level = 5;

export default class App extends Component {
  
  constructor(){
    super();
    this.state = { 
      show:true,
      level:5,
      input:[1],
      grid:[
        [ {bgc:'#fff',num: 1} ]
      ],
      answer:[]
    };
  }
  componentWillMount(){
    this.dealData();
  }

  dealData(){
    const { input , level } = this.state;
    const answer = wallKeeper(input,level)
    const matrix = [];

    for(let i = 0 ; i < level ; i ++) {
      matrix[i] = [];
      for(let j = 0 ; j < level ; j ++) {
        matrix[i][j] = {bgc:'#fff',num: i * level + j + 1 }
      }
    }
    this.state.grid = matrix;
    console.log(matrix);
    input.forEach(item => {
      let i = ~~ ((item - 1) / level);
      let j = (item - 1) % level;
      this.state.grid[i][j].bgc = 'pink';
    });
    this.setState({
      grid:this.state.grid,
      answer
    });
  }

  pushData(data){
    let { level , input } = data;
    console.log(level,input);
    this.state.input = input;
    this.state.level = level;
    this.setState({
      level,
      input,
      show:false
    });
    this.dealData();
  }

  updata(i,j,num){
    [ [i,j], [i,j-1], [i,j+1], [i-1,j], [i+1,j] ].forEach(item=>this.switchLight(item));
    this.setState({
      grid:this.state.grid
    });
  }

  switchLight(arr){
    if ( this.state.grid[arr[0]] && this.state.grid[arr[0]][arr[1]] ){
      let bgc = this.state.grid[arr[0]][arr[1]].bgc;
      if ( bgc === '#fff' ) {
        bgc = 'pink';
      } else {
        bgc = '#fff';
      }
      this.state.grid[arr[0]][arr[1]].bgc = bgc;
    }
  }

  render (){
    return (
      <div>
        <SelectNumber  pushData={this.pushData.bind(this)} show={this.state.show} />
        <WallKeeper updata={this.updata.bind(this)} answer={this.state.answer} grid={this.state.grid} show={!this.state.show} input={this.state.input}  />
      </div>
    );
  } 
}

