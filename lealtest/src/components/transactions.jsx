import React, { Component } from "react";
import Transaction from "./transaction";

class Transactions extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({ showInfo: true });
  };

  render() {
    return (
      <React.Fragment>
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
            {this.props.transactions.map((transaction) => (
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
