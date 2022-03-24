import React from "react";
import axios from "axios"
import "./database.css"


const Database = props =>{
    const individualIdFromReg = props.getIdFromLogin.toString() //pobieranie id z rejestracji
    console.log(individualIdFromReg);
    const [incomeOption, setIncomeOption] = React.useState([]) //wybór form wpływu
    React.useEffect(()=>{
        setIncomeOption([
            {option: ""},
           { option: "wypłata"},
           { option: "darowizna"},
           {option: "wpłata własna"},
           {option: "zasiłek"},
           {option: "inne"}
        ])
    },[])
    //pobieranie danych z inputów wprwadzonych przez usera
    const [userDataIncome, setUserDataIncome] = React.useState({
    income: '',
    income_choose: '',
    income_summary: '',
    income_date: '',
    income_comment: ''
    })
    const getInputData = e =>{
        const {name,value} = e.target;
        setUserDataIncome(prev=>({
                ...prev,
                [name]: value
        }))
    }
    //wysyłanie daych wproadzonych przez usera na server
    const sendIncomeDataToBackEnd = (income, income_choose, income_summary, income_date ,income_comment) =>{
            fetch("api/users_income",{
                method: "POST",
                body: JSON.stringify({
                    id: individualIdFromReg,
                    income: income,
                    income_choose: income_choose,
                    income_summary: income_summary,
                    income_date: income_date,
                    income_comment: income_comment
                }),
                headers: { "Content-type": "application/json" }
            })
    }
  
    const getIncomeDataBtn = () =>{
        sendIncomeDataToBackEnd(userDataIncome.income, userDataIncome.income_choose, userDataIncome.income_summary, userDataIncome.income_date, userDataIncome.income_comment)
            console.log('brak blokady');
    }
    //pobieranie danych z rejestracji
    const [userId, setUserId] = React.useState('')
    React.useEffect(()=>{
        axios.get("/api/regestry")
        .then(res => setUserId(res.data.map(el=>el.id)))
    },[])

    //pobieranie daty
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
    return(
        <div className="databaseMainContener">
            <div className="databaseBackground"></div>
            <div className="titleGroup">
                <h2 className="databaseTitle">TWOJE FINANSOWE DANE</h2>
                <p className="databaseInfo">wprowadzaj przychody oraz wydatki, planuj, oszczędzaj...</p>
            </div>
            <div className="incomeGroup">
                <div className="inputIncomeGroup">
                    <label htmlFor="income">WPROWADŹ KWOTĘ PRZYCHODU</label><br />
                    <input 
                    className="incomeInput" 
                    type="number" 
                    name="income"
                    value={userDataIncome.income}
                    onChange={getInputData}/>
                </div>
                <div className="optionIncomeGroup">
                    <label htmlFor="income_choose">WYBIERZ RODZAJ PRZYCHODU</label><br />
                     <select 
                     className="selectIncome" 
                     name="income_choose"
                     value={userDataIncome.income_choose}
                     onChange={getInputData}>
                   {incomeOption.map(el=>(<option>{el.option}</option>))}
                </select>
               </div>
                <div className="commentIncomeGroup">
                    <label htmlFor="income_comment">DODAJ KOMENTARZ (max 100 znaków)</label>
                    <textarea 
                    className="commentIncome" 
                    name="income_comment" 
                    type="text"
                    maxLength="100"
                    value={userDataIncome.income_comment}
                    onChange={getInputData}/>
                </div>
            </div>
            <div className="addButton">
               <button disabled={!userDataIncome.income || !userDataIncome.income_choose} onClick={() => getIncomeDataBtn()} className="btn addIncomeBtn" type="button">DODAJ</button>
               </div>
            <div className="viewGroup">
                <table>
                    <thead>
                        <tr>
                            <td>KWOTA WPŁATY</td>
                            <td>RODZAJ PRZYCHODU</td>
                            <td>DATA PRZYCHODU</td>
                            <td>KOMENTARZ</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Database