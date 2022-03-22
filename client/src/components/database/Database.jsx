import React from "react";
import "./database.css"


const Database = props =>{
    const [incomeOption, setIncomeOption] = React.useState([]) //wybór form wpływu
    React.useEffect(()=>{
        setIncomeOption([
           { option: "wypłata"},
           { option: "darowizna"},
           {option: "wpłata własna"},
           {option: "zasiłek"},
           {option: "inne"}
        ])
    },[])
    //pobieranie daty
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
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
               <div className="sumIncomeGroup">
                   <p style={{display:"none"}} className="sumIncome">{`DATA WPŁATY:  ${date}`}</p>
               </div>
            </div>
            <div className="addButton">
               <button className="btn addIncomeBtn" type="button">DODAJ</button>
               </div>
            <div className="viewGroup">
                <table>
                    <thead>
                        <tr>
                            <td>KWOTA WPŁATY</td>
                            <td>RODZAJ PRZYCHODU</td>
                            <td>DATA PRZYCHODU</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1000</td>
                            <td>test</td>
                            <td>22.2.22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Database