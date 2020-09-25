import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row m-2">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control-plaintext col-sm-2"
            id="staticEmail"
            value="email@example.com"
          ></input>

          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control col-sm-2 m-2"
            id="inputPassword"
          ></input>

          <button type="submit" className="btn btn-primary col-sm-2">
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
