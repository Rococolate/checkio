import React, { Component, Children } from "react";
import "./index.css";
import Td from "../Td/Td";

// const input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// const input = [5, 7, 13, 14, 18];
// const input = [2,3,4];
// const input = [19];
// const level = 2;
// const level = 5;

export default class SelectNumber extends Component {
  
  constructor(){
    super();
    this.state = { 
      grid:[
        [ {bgc:'#fff',num: 1} ]
      ],
      level:5
    };
  }

  componentWillMount(){
    this.deal();
  }

  deal(){
    const { level } = this.state;

    const matrix = [];

    for(let i = 0 ; i < level ; i ++) {
      matrix[i] = [];
      for(let j = 0 ; j < level ; j ++) {
        matrix[i][j] = {bgc:'#fff',num: i * level + j + 1 }
      }
    }
    this.state.grid = matrix;

    this.setState({
      grid:this.state.grid,
    });
  }

  findData(){
    const input = [];
    this.state.grid.forEach(item => {
      item.forEach(ele => {
        if (ele.bgc === 'yellowgreen') input.push(ele.num);
      });
    });
    return {
      level:this.state.level,
      input
    }
  }

  clickFn(i,j,num){
    [ [i,j] ].forEach(item=>this.switchLight(item));
    
    this.setState({
      grid:this.state.grid
    });
  }

  switchLight(arr){
    if ( this.state.grid[arr[0]] && this.state.grid[arr[0]][arr[1]] ){
      let bgc = this.state.grid[arr[0]][arr[1]].bgc;
      if ( bgc === '#fff' ) {
        bgc = 'yellowgreen';
      } else {
        bgc = '#fff';
      }
      this.state.grid[arr[0]][arr[1]].bgc = bgc;
    }
  }

  changeLevel(e){
    const level = e.target.value;
    this.state.level = level;
    this.setState({
      level,
    });
    this.deal();
  }

  render (){
    let table = this.state.grid.map((ele,i) => {
      return <tr key={i} >
        {
          ele.map((item,j) =>{
            return <Td key={j} i={i} j={j} item={item} clickFn={this.clickFn.bind(this)} />
          })
        }
      </tr>
    });
    let { show } = this.props;
    if ( !show ) return false;
    return (
      <div className='container'>
        {`choose the number in light`}
        <select defaultValue='5' onChange={this.changeLevel.bind(this)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" >5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <table>
          <tbody>
            {table}
          </tbody>
        </table>
        <button onClick={()=>{this.props.pushData(this.findData())}} >sure</button>
      </div>
    );
  } 
}

