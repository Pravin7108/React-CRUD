import React, { Component } from 'react';
import Table from './table';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _id: "",
      name: "",
      age: "",
      email: "",
      isEdit: false,
    }
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = () => {
    if(!this.state.isEdit){
      axios.post("http://localhost:4000/details", this.state)
      .then((result) => {
        this.setState(result)
      }).catch((err) => {
        console.log(err)
      });
    }else{
      axios.put(`http://localhost:4000/details/${this.state._id}`,this.state).then(result=>{
        this.setState({result})
      })
    }
  }

  update = editData => {
    // console.log(editData._id);
    this.setState({
      _id: editData._id,
      name: editData.name,
      age: editData.age,
      email: editData.email,
      isEdit: true
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="form-details">
            <h1>Fill the details</h1>
            <form onSubmit={ this.submit}>
              <div>
                <label>Name: </label><br/>
                <input type="text" name="name" value={this.state.name} placeholder="Enter your name" onChange={this.changeHandler} />
              </div>
              <div>
                <label>Age: </label><br/>
                <input type="text" name="age" value={this.state.age} placeholder="Enter your age" onChange={this.changeHandler} />
              </div>
              <div>
                <label>Email: </label><br/>
                <input type="text" name="email" value={this.state.email} placeholder="Email id" onChange={this.changeHandler} />
              </div>
              <button className='btn'>{this.state.isEdit ? "Update" : "Submit"}</button>
            </form>
          </div>
        </div>
        <Table setData={this.update} />
      </>
    )
  }
}

export default Form;