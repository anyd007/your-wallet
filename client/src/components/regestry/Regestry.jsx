import React from "react";
import uniqid from "uniqid";
import Zoom from "react-reveal/Zoom";
import "./regestry.css";

const Regestry = (props) => {
  //sprawdzanie czy hasło ma min 8 znaków, znak specjalny i dużą literę
let regexpCheck = new RegExp("^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})"); 
  //przypisywanie danych z inputów
  const [regUser, setRegUser] = React.useState({
    username: "",
    password: "",
    repassword: "",
    id: uniqid()
  });
  const loginValues = (e) => {
    const {name, value} = e.target;
    return setRegUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // sprwadzanie poprawności wprowadzanych danych w inputów
  const regestryBtn = () =>{
    let usernameInput = document.querySelector(".usernameInput")
    let passwordInput = document.querySelector('.passwordInput')
    let repasswordInput = document.querySelector('.repasswordInput')
    let regInputs = document.querySelectorAll(".regInputs")
    let regestrySucess = document.querySelector(".regestrySucess")
    let blur = document.querySelector(".blur")

    if(regUser.password === regUser.repassword && regexpCheck.test(regUser.password) ==true 
    && regUser.username.length >=3){
      sendRegestryToExpress(regUser.username, regUser.password,regUser.id)
      regestrySucess.style.display = "flex"
      blur.style.display = "flex"
      regInputs.forEach(el=>{
        el.value =''
      })
    }if(regUser.username.length < 3){
      usernameInput.classList.add('errorInput')
      usernameInput.value = 'nazwa użytkownika musi zawierać przynajmniej 3 znaki'
      usernameInput.onclick = ()=>{
        regInputs.forEach(el=>{
          el.value =''
          el.classList.remove("errorInput")
        })
      }
    }if(regexpCheck.test(regUser.password)==false){
      passwordInput.classList.add('errorInput')
      passwordInput.value = 'hasło nie zawiera wymaganaych wartości'
      passwordInput.onclick = ()=>{
        passwordInput.classList.remove("errorInput")
        passwordInput.value = ''
        repasswordInput.value = ''
      }
    }
    if(regUser.password !== regUser.repassword){
      passwordInput.classList.add('errorInput')
      repasswordInput.classList.add('errorInput')
      passwordInput.value = 'powtórzone hasło nie jest identyczne'
      repasswordInput.value = 'powtórzone hasło nie jest identyczne'
      passwordInput.onclick = ()=>{
        passwordInput.classList.remove("errorInput")
        passwordInput.value = ''
      }
      repasswordInput.onclick = ()=>{
        repasswordInput.classList.remove("errorInput")
        repasswordInput.value = ''
      }
  }
}
//wysyłąnie danych na express.js
  const sendRegestryToExpress = (username, password, id) =>{
    fetch("/api/regestry", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password:password,
        id:id
      }),
      headers:{ "Content-type": "application/json" },
    })
  }

  return (
    <div className="mainContener">
      <div className="backackground"></div>
      <div className="blur"></div>
      <div className="regestrySucess">
        <h3 className="regestrySucessInfo">GRATULACJE, {(regUser.username).toUpperCase()}<br />UDAŁO SIĘ ZAREJESTROWAĆ<br />TERAZ MOŻESZ SIĘ ZALOGOWAĆ</h3>
        <button onClick={()=>props.colseRegestry()} className="btn regestrySuccesBtn" type="button">LOGOWANIE</button>
      </div>
      <div className="title regInfoGroup">
        <h2 className="regTitle">
          <Zoom left cascade>
            REJESTRACJA
          </Zoom>
        </h2>
        <Zoom>
          <p className="regInfo">
            Podaj nazwę użytkownika, oraz hasło. Nazwa użytkownika musi zawierać
            przynajmniej 3 znaki, natomiast hasło minimum 8 znaków w tym
            przynajmniej jedna wielką literę i jednen znak specjalny
          </p>
        </Zoom>
      </div>
      <Zoom>
        <div className="inputGroup">
          <label htmlFor="username">NAZWA UŻYTKOWNIKA</label>
          <br />
          <input
            className="regInputs usernameInput"
            value={regUser.username}
            onChange={loginValues}
            name="username"
            type="text"
          />
          <br />
          <label htmlFor="password">PODAJ HASŁO</label>
          <br />
          <input
            className="regInputs passwordInput"
            value={regUser.password}
            onChange={loginValues}
            name="password"
            type="text"
          />
          <br />
          <label htmlFor="repassword">POWTÓRZ HASŁO</label>
          <br />
          <input
            className="regInputs repasswordInput"
            value={regUser.repassword}
            onChange={loginValues}
            name="repassword"
            type="text"
          />
        </div>
      </Zoom>
      <Zoom>
        <div className="buttonGroup">
          <button onClick={()=>regestryBtn()} className="btn regBtn" type="button">
            REJESTRUJ
          </button>
          <button
            onClick={() => props.colseRegestry()}
            className="btn regBtn"
            type="button">
            WRÓĆ
          </button>
        </div>
      </Zoom>
    </div>
  );
};

export default Regestry;
