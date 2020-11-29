import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {startUserLogout} from '../../actions/userAction'

function Navbar(props) {
  const handleLogout = () => {
    props.dispatch(startUserLogout());
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav list-inline">
          {Object.keys(props.user).length === 0 ? (
            <>
              <li className="list-inline-item">
                <Link to="/users/signup">SignUp</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/users/login">Login</Link>
              </li>
            </>
          ) : (
            <>
              
              <li className="list-inline-item">
                <Link to="/posts/show">Post</Link>
              </li>
              <li className="list-inline-item">
                <Link to={`/users/show/`}>Profile</Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Navbar);
