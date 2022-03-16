import React, { Component } from "react";
import MainView from "./components/mainView/MainView";
import Regestry from "./components/regestry/Regestry";
import "./App.css"

class App extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
            <div className="app">
                <MainView />
            </div>
        )
    }
}
export default App;