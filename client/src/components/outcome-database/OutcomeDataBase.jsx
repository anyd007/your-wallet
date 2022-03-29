import React from "react";
import axios from "axios";
import {CgCloseR} from "react-icons/cg"
import "./outcomeDataBase.css";

const outcomeDataBase = (props) => {

  return (
    <div className="outcomeMainContener">
      <CgCloseR onClick={() => props.closeOutcomeDatabase()} className="closeIcon" />
      <div className="databaseBackground"></div>
      <div className="titleGroup">
        <h2 className="databaseTitle">TWOJE FINANSOWE DANE</h2>
        <p className="databaseInfo">
          wprowadzaj przychody oraz wydatki, planuj, oszczędzaj...
        </p>
      </div>
    </div>
  );
};

export default outcomeDataBase;
