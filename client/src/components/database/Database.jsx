import React from "react";
import axios from "axios"
import "./database.css"


const Database = props =>{
  //pobieranie daty
  const currentDate = new Date();
  const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

  //pobieranie id usera przy logowaniu w celu porównania przy wyświtlaniu bazy danych
  let individualIdFromReg = props.getIdFromLogin.toString()

    const [incomeOption, setIncomeOption] = React.useState([]) //wybór form wpływu
    React.useEffect(()=>{
        setIncomeOption([
            {option: ""},
           { option: "wypłata"},
           { option: "darowizna"},
           {option: "wpłata własna"},
           {option: "renta"},
           {option: "emerytura"},
           {option: "zasiłek"},
           {option: "inne"}
        ])
    },[])
    //pobieranie danych z inputów wprwadzonych przez usera
    const [userDataIncome, setUserDataIncome] = React.useState({
    income: '',
    income_choose: '',
    income_date: '',  
    income_comment: '',
    income_summary:''
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
    console.log(userDataIncome.income_summary);

    //button który wysła dane na backend oraz czyci pola inputów
    const getIncomeDataBtn = () =>{
        userDataIncome.income_date = date
        userDataIncome.income_summary = Number(userDataIncome.income) //sumowanie daych z kwot wporwadzonych przez usera
        sendIncomeDataToBackEnd(userDataIncome.income, userDataIncome.income_choose, userDataIncome.income_summary, userDataIncome.income_date, userDataIncome.income_comment)
        setUserDataIncome(prev=>({
            ...prev,
            income: '',
            income_choose: '',
            income_date: '',  
            income_comment: ''
        }))
        getUserData()
    }
    //pobieranie danych z przychodów usera
    const [getIncomeData, setIncomeData] = React. useState([])
    console.log(getIncomeData);
    const getUserData = async () =>{
        try {
             await axios
             .get("api/users_income")
             .then(res => res.data)
             .then(data => data.filter(item => {return item.id === individualIdFromReg}))
             .then(data => setIncomeData(data))

        } catch (error) {
            console.log("error", error);
        }
     }
    
        
    return(
        <div className="databaseMainContener">
            <div className="databaseBackground"></div>
            <div className="titleGroup">
                <h2 className="databaseTitle">TWOJE FINANSOWE DANE</h2>
                <p className="databaseInfo">wprowadzaj przychody oraz wydatki, planuj, oszczędzaj...</p>
            </div>
            <section className="incomeGroup">
                <div className="inputIncomeGroup">
                    <label htmlFor="income">WPROWADŹ KWOTĘ PRZYCHODU</label><br />
                    <input 
                    className="incomeInput" 
                    type="number" 
                    min="1"
                    step=".01"
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
                    <label htmlFor="income_comment">KOMENTARZ (max 100 znaków)</label>
                    <textarea 
                    className="commentIncome" 
                    name="income_comment" 
                    type="text"
                    maxLength="100"
                    value={userDataIncome.income_comment}
                    onChange={getInputData}/>
                </div>
            </section>
            <div className="addButton">
               <button disabled={!userDataIncome.income || !userDataIncome.income_choose || userDataIncome.income <=0} onClick={() => getIncomeDataBtn()} className="btn addIncomeBtn" type="button">DODAJ</button>
            </div>
            <section className="summaryGroup">
                <table>
                    <thead>
                        <tr>
                            <td>ŁĄCZNA KWOTA PRZYCHODU</td>
                            <td>POZOSTAŁA KWOTA PO WYDATKACH</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="summaryTD">{` PLN`}</td>
                            <td className="summaryTD">test</td>
                            <button className="btn outcomeBtn" type="button">WYDATKI</button>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="viewGroup">
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
                        {getIncomeData.map(el =>(<tr key={el._id} className="incomeTR">
                            <td className="incomeTD">{el.income} PLN</td>
                            <td className="incomeTD">{el.income_choose}</td>
                            <td className="incomeTD">{el.income_date}</td>
                            <td className="incomeTD">{el.income_comment}</td>
                        </tr>))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Database