import React, { Component } from 'react'
import axios from 'axios';
import posts from '../../models/posts';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    };
  }
  retri
  render() {
    return (
      <div>App</div>
    )
  }
}
