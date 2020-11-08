import React from "react";

const ArrivaltimeForm = (props) => {
  return (
    <div className="field">
      <h1 className="label is-large">숙소 도착 예정 시간</h1>
      <div className="control">
        <input
          className={`input ${props.errorHour && "is-danger"}`}
          type="number"
          name="arrivalHour"
          onChange={props.onChange}
          value={props.arrivalHour || ""}
          min="0"
          max="23"
          step="1"
          placeholder="시"
          required
        />
      </div>
      {props.errorHour && <p className="help is-danger">{props.errorHour}</p>}
      <div className="control">
        <input
          className={`input ${props.errorMin && "is-danger"}`}
          type="number"
          name="arrivalMinute"
          onChange={props.onChange}
          value={props.arrivalMin || ""}
          min="0"
          max="59"
          step="1"
          placeholder="분"
          required
        />
      </div>
      {props.errorMin && <p className="help is-danger">{props.errorMin}</p>}
    </div>
  );
};

export default ArrivaltimeForm;
