import React from "react";
import "./database.css"


const Database = props =>{
    const [incomeOption, setIncomeOption] = React.useState('')
    React.useEffect(()=>{
        setIncomeOption({
            option: "wypłata",
            option: "darowizna"
        })
    },[])
    console.log(incomeOption.option);
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
                    <option>{}</option>
                </select>
                </div>
            </div>
        </div>
    )
}

export default Database