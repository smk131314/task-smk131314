import React from "react";

const DetailsForm = (props) => {
  return (
    <div className="field">
      <h1 className="label is-large">기타 예약 정보</h1>
      <label className="label">오시는 교통 수단을 적어주세요.</label>
      <div className="control">
        <textarea
          className={`input ${props.error && "is-danger"}`}
          name="details"
          onChange={props.onChange}
          value={props.details || ""}
          placeholder="답변을 입력해 주세요."
          required
        />
      </div>
      {props.error && <p className="help is-danger">{props.error}</p>}
    </div>
  );
};

export default DetailsForm;
