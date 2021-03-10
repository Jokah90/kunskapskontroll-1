import React, { Component } from 'react';
import Style from './styles/confirm.module.css';

class Confirmation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
     
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button className={Style.button} onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Done' : 'Confirm'}
        </button>
      );
    }
  }

  export default Confirmation;