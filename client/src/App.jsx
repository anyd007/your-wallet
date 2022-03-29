import React, { Component } from "react";
import MainView from "./components/mainView/MainView";
import Regestry from "./components/regestry/Regestry";
import Login from "./components/login/Login";
import Database from "./components/database/Database";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWindow: true,
      regestry: false,
      login: false,
      database: false,
      regId: ''
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
  handleCloseLogin = () =>{
    const login = this.state
    if(login) {
      this.setState({mainWindow: true})
      this.setState({login: false})
      this.setState({regestry: false})
    }
  }
  handleOpenDataBase = () =>{
    const login = this.state
    if(login) {
      this.setState({login:false})
      this.setState({database: true})
    }
  }
  handleCloseDatabase = () =>{
    const database = this.state
    if(database){
      this.setState({database:false})
      this.setState({mainWindow: true})
    }
  }
  handleSendId = (val) =>{ //przekazywanie id z panelu rejestracji do regID
    this.setState({
      regId: val
    })
  }
  render() {
    const { mainWindow } = this.state;
    const { regestry } = this.state;
    const {login} = this.state;
    const {database} = this.state;
    const {regId} = this.state
    return (
      <div className="app">
        {mainWindow && (
          <MainView openRegestry={() => this.handleOpenRegestry()} 
                    openLogin={() => this.handleOpenLogin()}
                    openDataBase={() => this.handleOpenDataBase()}/>
        )}
        {regestry && (
          <Regestry colseRegestry={() => this.handleCloseRegestry()} />
        )}
        {login && (
         <Login closeLoginWindow={() => this.handleCloseLogin()}
         openDataBase={() => this.handleOpenDataBase()}
         //odbieranie id z panelu logowanie w celu przypisania w panelu bazy danych
         sendId={this.handleSendId}/>)}   
        {database && <Database 
        getIdFromLogin={regId} //wysłanie pozyskanego ID do panelu bazy danych
        colseDatabase={() => this.handleCloseDatabase()}/>} 
      </div>
    )
  }
}
export default App;
