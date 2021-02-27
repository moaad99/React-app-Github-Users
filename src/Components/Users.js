import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'
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
    searchfromGit=(data) =>{
        if(data !== ''){
            
          axios.get(`https://api.github.com/search/users?q=${data}`)
          .then(response=>{
            console.log(response)
            this.setState({
                users: response.data.items
                
            })
           
          })
        }
      }

    render() {
        return (
            
            <div>
                
                <Search searchfr={this.searchfromGit}/>
                <br/>
            
                <div className="row">
                {this.state.users.map((user,index) => (

                    <div className="col-md-3" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={user.avatar_url} alt=""/>
                            <div className="card_body">
                                <h4 className="card-title" style={{color:"black",marginInline:"27px"}} >{user.login}</h4>
                                <p className="card-text"  >
                               <a href={user.html_url} className="btn btn-secondary" style={{marginInline:"57px",color:"white"}} >Show more </a>
                                   
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
