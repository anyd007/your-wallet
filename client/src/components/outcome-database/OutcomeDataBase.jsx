import React from "react";
import axios from "axios";
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
          type="number"
          min="1"/>
        </div></Zoom>
       <Zoom><div className="outcomeInputs">  
          <label htmlFor="outcome-choose">WYBIERZ RODZAJ WYDATKU</label><br />
          <select
          id="outcome-choose"
          className="inputsFeelds"
          name="outcome-choose">
          {outComeChoose.map(el=>(<option>{el.option}</option>))}
          </select>
        </div></Zoom>
       <Zoom><div className="outcomeInputs" >
          <label htmlFor="outcome-date">WPROWADŹ DATĘ WYDATKU</label><br />
          <input 
          id="outcome-date"
          className="inputsFeelds"
          name="outcome-date"
          type="date"/>
        </div></Zoom>
        <Zoom><div className="outcomeInputs" >
          <label htmlFor="outcome-comment">KOMENTARZ (max 100 znaków)</label><br />
          <textarea 
          id="outcome-comment"
          className="inputsFeelds"
          name="outcome-comment"
          maxLength="100"/>
        </div></Zoom>
    </section>
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
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  );
};

export default OutcomeDataBase;
