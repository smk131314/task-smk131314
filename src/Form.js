import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
    alert("예약이 완료 되었습니다.");
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">영문 이름</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.engName && "is-danger"}`}
                    type="text"
                    name="engName"
                    onChange={handleChange}
                    value={values.engName || ""}
                    required
                  />
                  {errors.engName && (
                    <p className="help is-danger">{errors.engName}</p>
                  )}
                </div>
                <label className="label">영문 성</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.engName && "is-danger"}`}
                    type="text"
                    name="engName"
                    onChange={handleChange}
                    value={values.engName || ""}
                    required
                  />
                  {errors.engName && (
                    <p className="help is-danger">{errors.engName}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">한글 이름</label>
                <div className="control">
                  <input
                    className={`input ${errors.korName && "is-danger"}`}
                    type="text"
                    name="korName"
                    onChange={handleChange}
                    value={values.korName || ""}
                    required
                  />
                </div>
                {errors.korName && (
                  <p className="help is-danger">{errors.korName}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                결제하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
