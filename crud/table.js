import React, { Component } from 'react';
import axios from 'axios';


class table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post:[],
            name:"",
            age:"",
            email:""
        }
    }

    componentDidMount(){
        this.getAll();
    }
      getAll(){
        axios.get("http://localhost:4000/details").then(res=>{
          this.setState({post:res.data})
        })
    }

    delete=data=>{
        var option=window.confirm(`Are you sure to delete ${data.name} ?`)
        if(option){
          axios.delete(`http://localhost:4000/details/${data._id}`).then(res=>{
          this.getAll();
          })
        }
      }
    
    render() {
        const { post, errorMsg } = this.state
        return (
            <div>
                <table className="table">
                    <thead className='thead'>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            post.length ?
                                post.map(post => <tr>
                                    <td>{post.name}</td>
                                    <td>{post.age}</td>
                                    <td>{post.email}</td>
                                    <div className="icons">
                                        <td><button onClick={event=>this.props.setData(post)}><ion-icon name="pencil-outline"></ion-icon></button></td>
                                        <td><button onClick={event=>this.delete(post)}><ion-icon name="trash-outline"></ion-icon></button></td>
                                    </div>
                                </tr>) : null
                        }
                        {
                            errorMsg ? <div>{errorMsg}</div> : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default table;