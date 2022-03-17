import React from "react";
import uniqid from "uniqid";
import Zoom from "react-reveal/Zoom";
import "./regestry.css";

const Regestry = (props) => {
  return (
    <div className="mainContener">
      <div className="backackground"></div>
      <div className="title regInfoGroup">
        <h2 className="regTitle">
          <Zoom left cascade>
            REJESTRACJA
          </Zoom>
        </h2>
        <Zoom>
          <p className="regInfo">
            Podaj nazwę użytkownika, oraz hasło. Nazwa użytkownika musi zawierać
            przynajmniej 4 znaki, natomiast hasło minimum 8 znaków w tym
            przynajmniej jedna wielką literę i jednen znak specjalny
          </p>
        </Zoom>
      </div>
      <div className="inputGroup">
        <label htmlFor="usernameInput">NAZWA UŻYTKOWNIKA</label><br />
        <input className="regInputs"
        name="usernameInput"
        type="text"/><br />
        <label htmlFor="passwordInput">PODAJ HASŁO</label><br />
        <input className="regInputs" 
        name="passwordInput"
        type="text"/><br />
        <label htmlFor="repasswordInput">POWTÓRZ HASŁO</label><br />
        <input className="regInputs" 
        name="repasswordInput"
        type="text"/>
      </div>
    </div>
  );
};

export default Regestry;
