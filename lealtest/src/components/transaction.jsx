import React, { Component } from "react";

class Transaction extends Component {
  state = {};

  // esto se encarga de mostrar la informacion completa de las transacciones
  render() {
    return (
      <React.Fragment>
        <h2>Informacion </h2>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">ID :{this.props.id}</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Created Date : {this.props.createdDate}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Value : {this.props.value}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Points : {this.props.points}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              Type: {this.props.type}
            </h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Transaction;
