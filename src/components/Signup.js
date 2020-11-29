import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../actions/userAction'

class Signup extends React.Component{
    constructor(props){
        super()
        this.state = {
            username : '',
            contact:'',
            email : '' ,
            password : '',
        }
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const formData ={
            username : this.state.username,
            contact : this.state.contact,
            password : this.state.password,
            email : this.state.email
        }
        const redirect = ()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="card">
                <h5 className="card-header">Signup</h5>
                <div className="card-body">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                        name
                    </label>
                    <input 
                        id = "username"
                        type="text"
                        className="form-control"
                        value = {this.state.username}
                        name = "username"
                        onChange ={this.handleChange}
                    /><br/>
                    
                    <label htmlFor ="email">email</label>
                    <input
                        id="email"
                        type="text"
                        className="form-control"
                        value = {this.state.email}
                        name = "email"
                        onChange = {this.handleChange}
                    /><br/>
                    <label htmlFor ="contact">contact</label>
                    <input
                        id="contact"
                        type="text"
                        className="form-control"
                        value = {this.state.contact}
                        name = "contact"
                        onChange = {this.handleChange}
                    /><br/>

                    <label htmlFor ="password">password</label>
                    <input
                        type="password"
                        name = "password"
                        id ="password"
                        className="form-control"
                        value = {this.state.password}
                        onChange ={this.handleChange}
                    /><br/>

                    <button type="submit" className="btn btn-primary">Signup</button>

                </form>
                </div>
            </div>
        )
    }
}

export default connect()(Signup)