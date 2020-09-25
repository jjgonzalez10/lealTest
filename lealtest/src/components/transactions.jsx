import React, { Component } from "react";
import Transaction from "./transaction";

class Transactions extends Component {
  state = {
    showInfo: false,
    fechaBuscada: "",
  };

  handleInfo = () => {
    this.setState({ showInfo: true });
  };

  // esto se encarga de mostrar una tabla con la informacion que recibio de los props
  render() {
    let transacciones = this.props.transactions;
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="buscar transaccion por fecha de inicio(año-mes-dia)"
          className="form-control-plaintext col-sm-4 m-6"
          onChange={(e) => {
            this.setState({ fechaBuscada: e.target.value });
          }}
        ></input>
        <button
          onClick={(e) => {
            this.props.transactions.map((transaction) => {
              console.log("Date", transaction.createdDate);
              if (
                transaction.createdDate.split("T1")[0] ===
                this.state.fechaBuscada
              ) {
                transacciones = [transaction];
                alert(`Se encontro el elemento buscado ${transaction._id}`);
              } else {
                alert("No se encuentra el elemento buscado");
              }
            });
          }}
        >
          Buscar
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">createdDate</th>
              <th scope="col">value</th>
              <th scope="col">points</th>
              <th scope="col">type</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {transacciones.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.createdDate}</td>
                <td>{transaction.value}</td>
                <td>{transaction.points}</td>
                <td>{transaction.type}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleInfo}
                  >
                    More Info
                  </button>
                  {this.state.showInfo ? (
                    <Transaction
                      id={transaction._id}
                      createdDate={transaction.createdDate}
                      value={transaction.value}
                      points={transaction.points}
                      type={transaction.type}
                    />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Transactions;
