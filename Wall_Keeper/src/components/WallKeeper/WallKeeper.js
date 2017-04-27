import React, { Component, Children } from "react";
import "./index.css";
import Td from "../Td/Td";


export default class WallKeeper extends Component {
  
  constructor(){
    super();
    this.state = { 
      grid:[
        [ {bgc:'#fff',num: 1} ]
      ]
    };
  }

  componentWillMount(){
    const { input , level } = this.props;
    console.log(input);

    const matrix = [];

    for(let i = 0 ; i < level ; i ++) {
      matrix[i] = [];
      for(let j = 0 ; j < level ; j ++) {
        matrix[i][j] = {bgc:'#fff',num: i * level + j + 1 }
      }
    }
    this.state.grid = matrix;

    input.forEach(item => {
      let i = ~~ ((item - 1) / level);
      let j = (item - 1) % level;
      this.state.grid[i][j].bgc = 'pink';
    });
    this.setState({
      grid:this.state.grid
    });
  }

  clickFn(i,j,num){
    console.log(num);
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
    let table = this.state.grid.map((ele,i) => {
      return <tr key={i} >
        {
          ele.map((item,j) =>{
            return <Td key={j} i={i} j={j} item={item} clickFn={this.clickFn.bind(this)} />
          })
        }
      </tr>
    });
    return (
      <div className='container'>
        hello
        <table>
          <tbody>
            {table}
          </tbody>
        </table>
      </div>
    );
  } 
}