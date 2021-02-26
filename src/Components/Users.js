import React, { Component } from 'react'
import axios from 'axios'
export default class Users extends Component {

    constructor() {
        super()
    
        this.state = {
             users:[]
    }
    
    }
    getUsers =()=>{
        axios.get('https://api.github.com/users')
        .then(response =>{
            this.setState({
                users: response.data
            })
        })
    }
    componentDidMount(){
        this.getUsers();
    }


    render() {
        return (
            <div>
                <div className="row">
                {this.state.users.map(user => (

                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={user.avatar_url} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">{user.login}</h4>
                                <p className="card-text">
                               <a href={user.html_url} className="btn btn-secondary" style={{color:"white"}} >Show more</a>
                                   
                                </p>
                            </div>
                        </div>
                        </div>
                        

                ))}
            </div>
         </div>
        )
    }
}
