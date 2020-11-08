import React from "react";

const TravelerForm = (props) => {
  return (
    <div className="fields">
      <h1 className="label is-large">여행자 {props.number}</h1>
      <div className="field">
        <label className="label">영문 이름</label>
        <div className="control">
          <input
            autoComplete="off"
            className={`input ${props.errorFirstname && "is-danger"}`}
            type="text"
            name="engFirstname"
            onChange={props.onChange}
            value={props.engFirstname || ""}
            required
          />
          {props.errorFirstname && (
            <p className="help is-danger">{props.errorFirstname}</p>
          )}
        </div>

        <label className="label">영문 성</label>
        <div className="control">
          <input
            autoComplete="off"
            className={`input ${props.errorLastname && "is-danger"}`}
            type="text"
            name="engLastname"
            onChange={props.onChange}
            value={props.engLastname || ""}
            required
          />
          {props.errorLastname && (
            <p className="help is-danger">{props.errorLastname}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">한글 이름</label>
        <div className="control">
          <input
            className={`input ${props.errorKorname && "is-danger"}`}
            type="text"
            name="korName"
            onChange={props.onChange}
            value={props.korName || ""}
            required
          />
        </div>
        {props.errorKorname && (
          <p className="help is-danger">{props.errorKorname}</p>
        )}
      </div>

      <div className="field">
        <label className="label">성별</label>
        <div>
          <input
            value="Male"
            checked={props.gender === "Male"}
            onChange={props.onChange}
            type="radio"
            name="gender"
          />
          남
        </div>
        <div>
          <input
            value="Female"
            checked={props.gender === "Female"}
            onChange={props.onChange}
            type="radio"
            name="gender"
          />
          여
        </div>
        {props.errorGender && (
          <p className="help is-danger">{props.errorGender}</p>
        )}
      </div>

      <div className="field">
        <label className="label">생년월일</label>
        <div className="control">
          <input
            className={`input ${props.errorBirth && "is-danger"}`}
            type="number"
            name="birth"
            onChange={props.onChange}
            value={props.birth || ""}
            required
          />
        </div>
        {props.errorBirth && (
          <p className="help is-danger">{props.errorBirth}</p>
        )}
      </div>
    </div>
  );
};

export default TravelerForm;
