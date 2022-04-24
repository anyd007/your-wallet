import React from "react";
import axios from "axios";
import { SummrayContext } from "../../sum-context";
import {CgCloseR} from "react-icons/cg"
import "./outcomeDataBase.css";
import { Zoom } from "react-reveal";


const OutcomeDataBase = (props) => {
  
  const [outComeChoose, setOutComeChoose] = React.useState([])
  React.useEffect(()=>{
    setOutComeChoose([
      {option: ''},
      {option: "ZAKUPY"},
      {option: "CZYNSZ"},
      {option: "PRĄD"},
      {option: "GAZ"},
      {option: "WODA"},
      {option: "INNE OPŁATY"},
      {option: "LEKI"},
      {option: "INNE"}
    ])
  }, [])
  //przekazanie kontekstu zsumowanego przychodu z database
  const incomeSumFromDatabase = React.useContext(SummrayContext)
  
  //przechwytywanie daych wpisywanych przez usera
const [getOutcomeData, setGetOutcomeData] = React.useState({
  outcome:'',
  outcome_choose:'',
  outcome_date:'',
  outcome_comment:''
})
const outcomeData = e =>{
  const {name, value} = e.target
  setGetOutcomeData(prev=>({
    ...prev,
    [name]:value
  }))
}
console.log(getOutcomeData);
  const getOutcomeDataBtn = () =>{
    console.log('hi');
  }
  return (
  <div className="outcomeMainContener">
      <CgCloseR onClick={() => props.closeOutcomeDatabase()} className="closeIcon" />
      <div className="databaseBackground"></div>
    <section className="titleGroup">
        <h2 className="databaseTitle"><Zoom left cascade>TWOJE FINANSOWE DANE</Zoom></h2>
        <Zoom><p className="databaseInfo">
          wprowadzaj przychody oraz wydatki, planuj, oszczędzaj...</p></Zoom>
    </section>
    <section className="outComeGroup">
     <Zoom><div className="outcomeInputs" >
          <label htmlFor="outcome">WPROWADŹ KWOTĘ WYDATKU</label><br />
          <input 
          id="outcome"
          className="inputsFeelds"
          name="outcome"
          value={getOutcomeData.outcome}
          type="number"
          onChange={outcomeData}
          min="1"/>
        </div></Zoom>
       <Zoom><div className="outcomeInputs">  
          <label htmlFor="outcome_choose">WYBIERZ RODZAJ WYDATKU</label><br />
          <select
          id="outcome_choose"
          className="inputsFeelds"
          name="outcome_choose"
          value={getOutcomeData.outcome_choose}
          onChange={outcomeData}>
          {outComeChoose.map(el=>(<option>{el.option}</option>))}
          </select>
        </div></Zoom>
       <Zoom><div className="outcomeInputs" >
          <label htmlFor="outcome_date">WPROWADŹ DATĘ WYDATKU</label><br />
          <input 
          id="outcome_date"
          className="inputsFeelds"
          name="outcome_date"
          value={getOutcomeData.outcome_date}
          onChange={outcomeData}
          type="date"/>
        </div></Zoom>
        <Zoom><div className="outcomeInputs" >
          <label htmlFor="outcome_comment">KOMENTARZ (max 100 znaków)</label><br />
          <textarea 
          id="outcome_comment"
          className="inputsFeelds"
          name="outcome_comment"
          value={getOutcomeData.outcome_comment}
          onChange={outcomeData}
          maxLength="100"/>
        </div></Zoom>
        </section>
        <div className="outcomeButtons">
          <button disabled={!getOutcomeData.outcome || !getOutcomeData.outcome_choose || !getOutcomeData.outcome_date || getOutcomeData.outcome <=0}
                onClick={()=> getOutcomeDataBtn()} type="button" className="btn addOutcomeBtn">DODAJ</button>
          <button onClick={() => props.closeOutcomeDatabase()} type="button" className="btn closeOutcomeBtn">WYJDŹ</button>
        </div>
    <section className="summaryFromIncome">
      <table>
        <thead>
          <tr>
            <td>ŁĄCZNA KWOTA PRZYCHODÓW</td>
            <td>KWOTA POZOSTAŁA PO WYDATKACH</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{incomeSumFromDatabase} PLN</td>
            <td>test</td>
            <button onClick={()=>props.openIncomeDatabase()} type="button" className="btn incomeBtn">PRZYCHODY</button>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  );
};

export default OutcomeDataBase;
