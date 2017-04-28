import React, { Component, Children } from "react";
import "./index.css";
import Td from "../Td/Td";
import wallKeeper from "../../../index.js";

export default class WallKeeper extends Component {
  
  constructor(){
    super();
    this.state = { 
    };
  }

  clickFn(i,j,num){
    this.props.updata(i,j,num)
  }

  render (){
    let table = this.props.grid.map((ele,i) => {
      return <tr key={i} >
        {
          ele.map((item,j) =>{
            return <Td key={j} i={i} j={j} item={item} clickFn={this.clickFn.bind(this)} />
          })
        }
      </tr>
    });
    let { show } = this.props;
    if ( !show ) return null;
    return (
      <div className='container'>
        {  `INPUT: ${JSON.stringify(this.props.input)}` }
        <table>
          <tbody>
            {table}
          </tbody>
        </table>
        { `ANSWER: ${JSON.stringify(this.props.answer)}` }
      </div>
    );
  } 
}