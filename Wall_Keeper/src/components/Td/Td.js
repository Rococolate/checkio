import React, { Component, Children } from "react";

export default class Td extends Component {
  
  constructor(){
    super();
    this.state = { 
    };
  }

  render (){
    let { num , bgc } = this.props.item;
    let { clickFn , i , j } = this.props;
    return <td onClick={()=>{clickFn(i,j,num)}} style={{backgroundColor:bgc}}>{num}</td>
  } 
}