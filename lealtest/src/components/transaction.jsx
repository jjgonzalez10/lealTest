import React, { Component } from "react";

class Transaction extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Informacion </h2>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{this.props.id}</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.createdDate}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.value}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.points}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.type}</h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Transaction;
