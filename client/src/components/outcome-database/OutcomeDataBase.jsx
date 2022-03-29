import React from "react";
import axios from "axios";
import {CgCloseR} from "react-icons/cg"
import "./outcomeDataBase.css";
import { Zoom } from "react-reveal";

const outcomeDataBase = (props) => {

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
          <input
          id="outcome-choose"
          className="inputsFeelds"
          name="outcome-choose"
          type="text"/>
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
  </div>
  );
};

export default outcomeDataBase;
