import React from "react";
import "./mainView.css";
import Fade from 'react-reveal/Fade'; //biblioteka efektów react
import Zoom from 'react-reveal/Zoom';

const mainView = (props) => {
  return (
    <div className="mainContener">
      <div className="background"></div>
      <div className="title">
          
        <h2 className="font-mainView"><Fade top cascade>WITAJ!</Fade></h2>
        <h1 className="font-mainView"><Fade top cascade>OTO TWÓJ PORTFEL</Fade></h1>
        
      </div>
      <div className="groupBtn">
         <Zoom><button onClick={()=>props.openLogin()} type="button" className="btn">LOGOWANIE</button></Zoom>
          <Zoom><button onClick={()=>props.openRegestry()} type="button" className="btn">REJESTRACJA</button></Zoom>
          <button onClick={() => props.openDataBase()} className="btn">test</button>
      </div>
    </div>
  );
};

export default mainView;
