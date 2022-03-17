import React, { Component } from "react";
import MainView from "./components/mainView/MainView";
import Regestry from "./components/regestry/Regestry";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainWindow: true,
      regestry: false,
    };
  }
  handleOpenRegestry = () => {
    const mainWindow = this.state;
    if (mainWindow) {
      this.setState({ mainWindow: false });
      this.setState({ regestry: true });
    }
    console.log("ni");
  };
  render() {
    const { mainWindow } = this.state;
    const { regestry } = this.state;
    return (
      <div className="app">
        {mainWindow && (
          <MainView openRegestry={() => this.handleOpenRegestry()} />
        )}
        {regestry && <Regestry />}
      </div>
    );
  }
}
export default App;
