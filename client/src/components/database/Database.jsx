import React from "react";
import axios from "axios"
import "./database.css"
import reactReveal from "react-reveal";
import {RiDeleteBin2Fill} from "react-icons/ri"
import {CgCloseR} from "react-icons/cg"
import Zoom from "react-reveal/Zoom";


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
     const sendIncomeDataToBackEnd = (income, income_choose, income_date ,income_comment, income_summary) =>{
            fetch("api/users_income",{
                method: "POST",
                body: JSON.stringify({
                    id: individualIdFromReg,
                    income: income,
                    income_choose: income_choose,
                    income_date: income_date,
                    income_comment: income_comment,
                    income_summary: income_summary //wysłanie informacji o zsumowancyh wpływach
                }),
                headers: { "Content-type": "application/json" }
            })
    }
    //button który wysła dane na backend oraz czyci pola inputów
    const getIncomeDataBtn = () =>{
        userDataIncome.income_date = date
        // userDataIncome.income_summary = summary //sumowanie daych z kwot wporwadzonych przez usera
        sendIncomeDataToBackEnd(userDataIncome.income, userDataIncome.income_choose, userDataIncome.income_date, userDataIncome.income_comment, userDataIncome.income_summary)
        setUserDataIncome(prev=>({
            ...prev,
            income: '',
            income_choose: '',
            income_date: '',  
            income_comment: ''
        }))
        userData()
   
       
    }
    //pobieranie danych z przychodów usera z express, oraz wstawianie ich w pola tabeli
    const[getIncomeData, setIncomeData] = React.useState([])
    const userData = () =>{
        axios
        .get("api/users_income")
        .then(res => res.data)
        .then(data => data.filter(item => {return item.id === individualIdFromReg}))
        .then(data => setIncomeData(data))
         .catch ((err)=> {
            console.log(err)
            })
        }
    React.useEffect(()=>{
        userData()
    },[sendIncomeDataToBackEnd])

    //sumowanie wpływów usera
    const [summary, setSummary] = React.useState([])
    const getSum = () =>{
        let setSum = getIncomeData.map(el=>{return el.income}).reduce((prev, curr)=> prev + curr, 0)
        setSummary(setSum)
        }
    React.useEffect(()=>{
        getSum()
    },[getIncomeDataBtn])

    //kasowanie danych
   const deletePosition = (_id) => {
        axios.delete(`api/users_income/${_id}`)
        setIncomeData(getIncomeData.filter(item =>item._id !== `${_id}`))
      }
   
    
    return(
        <div className="databaseMainContener">
            <CgCloseR onClick={() => props.colseDatabase()} className="closeIcon"/>
            <div className="databaseBackground"></div>
            <div className="titleGroup">
                <h2 className="databaseTitle"><Zoom left cascade>TWOJE FINANSOWE DANE</Zoom></h2>
                <Zoom><p className="databaseInfo">wprowadzaj przychody oraz wydatki, planuj, oszczędzaj...</p></Zoom>
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
                    onChange={getInputData}
                    />
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
               <button disabled={!userDataIncome.income || !userDataIncome.income_choose || userDataIncome.income <=0} 
               onClick={() => getIncomeDataBtn()} className="btn addIncomeBtn" type="button">DODAJ</button>
               <button onClick={() => props.colseDatabase()} className="btn closeIncomeBtn">WYJDŹ</button>
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
                            <td className="summaryTD">{summary} PLN</td>
                            <td className="summaryTD">test</td>
                            <button onClick={() => props.openOutcomeDataBase()} className="btn outcomeBtn" type="button">WYDATKI</button>
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
                            <td className="incomeTD comment">{el.income_comment}
                            <RiDeleteBin2Fill type="button" className="deleteBtn" onClick={() => deletePosition(el._id)}/></td>
                        </tr>))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Database