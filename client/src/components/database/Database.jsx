import React from "react";
import "./database.css"


const Database = props =>{
    const [incomeOption, setIncomeOption] = React.useState([])
    React.useEffect(()=>{
        setIncomeOption([
           { option: "wypłata"},
           { option: "darowizna"},
           {option: "wpłata własna"},
           {option: "zasiłek"},
           {option: "inne"}
        ])
    },[])
    console.log(incomeOption.map(el=>el.option));
    return(
        <div className="databaseMainContener">
            <div className="databaseBackground"></div>
            <div className="titleGroup">
                <h2 className="databaseTitle">TWOJE FINANSOWE DANE</h2>
                <p className="databaseInfo">wprowadzaj przychody oraz wydatki</p>
            </div>
            <div className="incomeGroup">
                <div className="inputIncomeGroup">
                    <label htmlFor="incomeInput">WPROWADŹ KWOTĘ PRZYCHODU</label><br />
                    <input className="incomeInput" type="number" name="incomeInput"/>
                </div>
                <div className="optionIncomeGroup">
                    <label htmlFor="select">WYBIERZ RODZAJ PRZYCHODU</label><br />
                     <select className="selectIncome" name="select">
                   {incomeOption.map(el=>(<option>{el.option}</option>))}
                </select>
               </div>
            </div>
        </div>
    )
}

export default Database