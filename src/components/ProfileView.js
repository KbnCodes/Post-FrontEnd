import React, { Component } from 'react'
import { connect } from "react-redux";
import {startGetUser, startShowUser} from '../actions/userAction'
import GooglePlaces from '../components/GooglePlaces'
class ProfileView extends Component {
  
    componentDidMount(props){
        // const id=this.props.match.params.id
        this.props.dispatch(startGetUser(this.props.user.id))
    }
    render() {
        return (
            <div>
                <div className="card">
                    <h2 className="card-header">
                        Profile View
                    </h2>
                    <div className="card-body">
                    <p>
                        Name : {this.props.user?.username} <br/>
                        Contact : {this.props.user?.contact} <br/>
                        Email :{this.props.user?.email}
                        
                    </p>
                    {/* <GooglePlaces/> */}

                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };

export default connect(mapStateToProps) (ProfileView)

