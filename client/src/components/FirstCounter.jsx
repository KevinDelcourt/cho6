import React, { Component } from 'react';
import FirstComp from './FirstComp';
import FirstButton from './FirstButton';

export default class FirstCounter extends Component {
    state = { count: 0 }
  
    increment = () => this.setState({ count: this.state.count + 1 })
    decrement = () => this.setState({ count: this.state.count - 1 })
  
    render() {
      return (
        <FirstComp>
          <FirstComp>{this.state.count} {this.props.children}</FirstComp>
          <FirstButton onClick={this.increment}>+</FirstButton>
          <FirstButton onClick={this.decrement}>-</FirstButton>
        </FirstComp>
      )
    }
  }