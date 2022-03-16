import React from "react";
import "./mainView.css";
import Fade from 'react-reveal/Fade';
import { Flip } from "react-reveal";
import Zoom from 'react-reveal/Zoom';

const mainView = (props) => {
  return (
    <div className="mainContener">
      <div className="background"></div>
      <div className="title">
          
        <h1 className="font-mainView"><Fade top cascade>WITAJ!<br/>to jest TWÓJ PORTFEL</Fade></h1>
        
      </div>
      <div className="groupBtn">
         <Zoom><button type="button" className="btn">LOGOWANIE</button></Zoom>
          <Zoom><button type="button" className="btn">REJESTRACJA</button></Zoom>
      </div>
    </div>
  );
};

export default mainView;
