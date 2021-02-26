
import React, { Component } from 'react'

export default class Search extends Component {
    state={
        search:''
    }

    handl=(e) => {
        this.setState({
            search: e.target.value
        })

    }
    Submitresearch= (e) => {
        e.preventDefault();
        alert(3)
    }


    render() {
        return (
            <div>
            <form onSubmit={this.Submitresearch}> 

                <input className="form-control me-2" onChange={this.handl}   type="search" placeholder="search" />
                <button className="btn btn-success" style={{marginTop:"6px"}} type="submit">Search</button>
            
            </form>
            {this.state.search}
        </div>
        )
    }
}
