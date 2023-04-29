import React, { Component } from 'react';
import Form from "./crud/form";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

  render() {
    return (
      <div>
      <Form />
      </div>
    )
  }
}

export default App;