import React, { Component } from "react";
import "./App.css";
import Transactions from "./components/transactions";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    email: "",
    password: "",
    isAuthenticated: false,
    store: null,
    data: [],
    token: null,
  };

  // Este metodo es el responsable de hacer la autenticacion y de obtener el token del usuario y guardar cierta informacion
  // en el local storage
  handleLogin = () => {
    fetch("https://pruebatecnica.puntosleal.com/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          this.handleLoginVerification();
          throw Error(result.statusText);
        }
      })
      .then((json) => {
        console.warn("response", json);
        localStorage.setItem(
          "Login",
          JSON.stringify({
            isAuthenticated: true,
            token: json.token,
          })
        );
        this.storeCollector();
        this.handleLoginVerification();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // este metodo es el que verifica si el usuario se pudo autenticar o no, envia el respectivo mensaje en cualquiera de los dos casos
  handleLoginVerification = () => {
    if (this.state.token != null) {
      return alert("Autenticacion exitosa");
    } else {
      return alert("No estas autenticado");
    }
  };

  // este metodo se llama cuando se crea el componente
  componentDidMount() {
    this.storeCollector();
  }

  // este metodo se llama cuando ocurre alguna actualizacion
  componentDidUpdate() {
    this.handleData();
  }

  // este metodod es que verifica que se haya autenticado correctamente el usuario y que la informacion que esta en el local storage
  // sea la correcta , una vez que verifica el estado de autenticado hace el update a los respectivos elementos del state

  storeCollector() {
    let store = JSON.parse(localStorage.getItem("Login"));
    console.log("store", store);
    if (store && store.isAuthenticated) {
      this.setState({
        isAuthenticated: true,
        store: store,
        token: store.token,
      });
    }
    console.log("autenticated", this.state.isAuthenticated);
  }

  // este metodo es el que solicita la informacion de las transaccion y guarda esta informacion en el elemento data del state

  handleData() {
    const token = this.state.token;
    console.log("token", token);
    fetch(
      "https://pruebatecnica.puntosleal.com/api/user/my/transactions?startDate,endDate",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((result) => {
        if (result.ok) {
          console.log("result data", result);
          return result.json();
        } else {
          throw Error(result.statusText);
        }
      })
      .then((json) => {
        console.warn("response GET DATA", json);
        this.setState({ data: json["data"] });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //el metodo render verifica el elemento isVerified , si este esta con valor verdadero hace el render de la informacion obtenida
  // sino hace el render del login nuevamente
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>Leal Test</h1>
          {!this.state.isAuthenticated ? (
            <div className="row m-2">
              <label className="col-sm-2 col-form-label">Email</label>
              <input
                type="text"
                className="form-control-plaintext col-sm-2"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></input>

              <label className="col-sm-2 col-form-label">Password</label>
              <input
                type="password"
                className="form-control col-sm-2 m-2"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              ></input>

              <button
                type="submit"
                className="btn btn-primary col-sm-2"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Enviar
              </button>
            </div>
          ) : (
            <Transactions transactions={this.state.data} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
