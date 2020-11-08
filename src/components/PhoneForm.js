import React, { Component } from "react";

const PhoneForm = (props) => {
  return (
    <div className="field">
      <h1 className="label is-large">상세 핸드폰 정보</h1>

      <label className="label">사용자 이름</label>
      <div className="control">
        <input
          className={`input ${props.errorUsername && "is-danger"}`}
          type="text"
          name="username"
          onChange={props.onChange}
          value={props.username || ""}
          required
        />
      </div>
      {props.errorUsername && (
        <p className="help is-danger">{props.errorUsername}</p>
      )}

      <label className="label">핸드폰 번호</label>
      <div className="control">
        <select>
          <option>+82(대한민국)</option>
        </select>
        <input
          className={`input ${props.errorPhone && "is-danger"}`}
          type="text"
          name="phone"
          onChange={props.onChange}
          value={props.phone || ""}
          required
        />
      </div>
      {props.errorPhone && <p className="help is-danger">{props.errorPhone}</p>}
    </div>
  );
};

export default PhoneForm;
