import React, { Component } from 'react';
// import Navbar from './Navbar';

export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <h2>nav</h2>
        {this.props.children}
      </div>
    );
  }
}
