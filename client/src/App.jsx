import React, { Component } from "react";
import MainView from "./components/mainView/MainView";
import Regestry from "./components/regestry/Regestry";
import Login from "./components/login/Login";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWindow: true,
      regestry: false,
      login: false
    };
  }
  handleOpenRegestry = () => {
    const mainWindow = this.state;
    if (mainWindow) {
      this.setState({ mainWindow: false });
      this.setState({login:false})
      this.setState({ regestry: true });
    }
  };
  handleCloseRegestry = () => {
    const regestry = this.state;
    if (regestry) {
      this.setState({ mainWindow: true });
      this.setState({login:false})
      this.setState({ regestry: false });
    }
  };
  handleOpenLogin = () => {
      const mainWindow = this.state
      const regestry = this.state
      if(mainWindow){
          this.setState({mainWindow: false});
          this.setState({regestry: false})
          this.setState({login: true})
      }
  }
  render() {
    const { mainWindow } = this.state;
    const { regestry } = this.state;
    const {login} = this.state
    return (
      <div className="app">
        {mainWindow && (
          <MainView openRegestry={() => this.handleOpenRegestry()} 
                    openLogin={() => this.handleOpenLogin()}/>
        )}
        {regestry && (
          <Regestry colseRegestry={() => this.handleCloseRegestry()} />
        )}
        {login && 
         <Login />}
      </div>
    )
  }
}
export default App;
