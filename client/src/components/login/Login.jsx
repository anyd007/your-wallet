import React from "react";
import "./login.css"


const Login = (props) =>{



    return(
        <div className="mainConteinerLog">
            <div className="backgroundLog"></div>
            <div className="title titleLoginGroup">
                <h2 className="loginTitle">LOGOWANIE</h2>
                <p className="loginInfo">Jeżeli jesteś po procesie rejestracji, użyj swojej nazwy użytkownika oraz 
                hasła w celu zalogowania</p>
            </div>
            <div className="loginInputGroup">
                <label htmlFor="username">NAZWA UŻYTKOWNIKA</label><br />
                <input className="logInput" type="text" name="username" /><br />
                <label htmlFor="password">HASŁO</label><br />
                <input className="loginput" type="text" name="password" />
            </div>
            <div className="loginBtnGroup">
                <button className="btn" type="button">ZALOGUJ</button>
                <button className="btn" type="button">WRÓĆ</button>
            </div>
        </div>
    )
}
export default Login