import React from "react";
import Zoom from "react-reveal/Zoom";
import axios from "axios"
import "./login.css"


const Login = (props) =>{
const [loginCheck, setLoginCheck] = React.useState({
    username: '',
    password: '',
    id:''
})
const validLogin = e =>{    //pobieranie danych z inputów
    const {name, value} = e.target;
    return setLoginCheck(prev=>({
        ...prev,
        [name]: value
    }))
}
//pobieranie danych z rejestacji z server.js
const [getRegData, setGetRegData] = React.useState({
    username: '',
    password: '',
    id:''
})
React.useEffect(()=>{
    axios.get("/api/regestry")
    .then(res=>setGetRegData(res.data))
},[])
//sprawdzanie poprawności logowanie
const checkValidLogin = () =>{
    setLoginCheck((prev) => ({
        ...prev,
        username: '',
        password: '',
        id:''
    }))
    let logInput = document.querySelectorAll(".logInput")
    if(getRegData.map(el=>el.username).includes(loginCheck.username)===true && 
    getRegData.map(el=>el.password).includes(loginCheck.password)===true){
        loginCheck.id = getRegData.filter(el=>el.username === loginCheck.username).map(el=>el.id) //przypisanie id usera i przesłanie do bazy danych
        props.openDataBase()
        props.sendId(loginCheck.id)
       
    }else{
        logInput.forEach(el=>{
            el.classList.add("errorInput")
            el.value = 'podane dane są nieprawidłowe, spróbuj ponownie...'
            el.onclick = () =>{
                el.classList.remove("errorInput")
                el.value = ''
            }
        })
    }
}


    return(
        <div className="mainConteinerLog">
            <div className="backgroundLog"></div>
            <div className="title titleLoginGroup">
                <h2 className="loginTitle"><Zoom left cascade>LOGOWANIE</Zoom></h2>
                <Zoom><p className="loginInfo">Jeżeli jesteś po procesie rejestracji, użyj swojej nazwy użytkownika oraz 
                hasła w celu zalogowania</p></Zoom>
            </div>
            <Zoom>
            <div className="loginInputGroup">
                <label htmlFor="username">NAZWA UŻYTKOWNIKA</label><br />
                <input 
                className="logInput" 
                type="text" 
                name="username" 
                value={loginCheck.username}
                onChange={validLogin}/><br />
                <label htmlFor="password">HASŁO</label><br />
                <input 
                className="logInput" 
                type="text" 
                name="password" 
                value={loginCheck.password}
                onChange={validLogin}/>
            </div>
            </Zoom>
            <Zoom>
            <div className="loginBtnGroup">
                <button onClick={() => checkValidLogin()} className="btn loginBtn" type="button">ZALOGUJ</button>
                <button onClick={() => props.closeLoginWindow()} className="btn loginBtn" type="button">WRÓĆ</button>
            </div>
            </Zoom>
        </div>
    )
}
export default Login