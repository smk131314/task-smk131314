import React from "react";
import useForm from "../useForm";
import ArrivaltimeForm from "./ArrivaltimeForm";
import TermForm from "./TermForm";
import DetailsForm from "./DetailsForm";
import validate from "./FormValidationRules";
import PhoneForm from "./PhoneForm";
import TravelerForm from "./TravelerForm";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log(values);
    console.log("No errors, submit callback called!");
    alert("예약이 완료 되었습니다.");
  }

  // const travelersCount = 2;
  // const numbers = [1, 2];

  // const TravelerList = (props) => {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number) => (
  //     <TravelerForm
  //       key={number.toString()}
  //       engFirstname={values["engFirstname_".concat(number)]}
  //       errorFirstname={errors["engFirstname_".concat(number)]}
  //       engLastname={values["engLastname_".concat(number)]}
  //       errorLastname={errors["engLastname_".concat(number)]}
  //       korName={values["korName_".concat(number)]}
  //       errorKorname={errors["korName_".concat(number)]}
  //       birth={values["birth_".concat(number)]}
  //       errorBirth={errors["birth_".concat(number)]}
  //       gender={values["gender_".concat(number)]}
  //       errorGender={errors["gender_".concat(number)]}
  //       onChange={handleChange}
  //       number={number.toString()} //key는 props가 아님
  //     />
  //   ));
  //   return <ul>{listItems}</ul>;
  // };

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              {/* <TravelerList numbers={numbers} /> */}
              <TravelerForm
                engFirstname={values.engFirstname}
                errorFirstname={errors.engFirstname}
                engLastname={values.engLastname}
                errorLastname={errors.engLastname}
                korName={values.korName}
                errorKorname={errors.korName}
                birth={values.birth}
                errorBirth={errors.birth}
                gender={values.gender}
                errorGender={errors.gender}
                onChange={handleChange}
                number={1}
              />

              <ArrivaltimeForm
                arrivalHour={values.arrivalHour}
                errorHour={errors.arrivalHour}
                arrivalMin={values.arrivalMin}
                errorMin={errors.arrivalMin}
                onChange={handleChange}
              />
              <PhoneForm
                username={values.username}
                errorUsername={errors.username}
                phone={values.phone}
                errorPhone={errors.phone}
                onChange={handleChange}
              />
              <DetailsForm
                details={values.details}
                error={errors.details}
                onChange={handleChange}
              />
              <TermForm
                terms={values.terms}
                error={errors.terms}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
                // TODO:
                // disabled={`${errors.terms && "disabled"}`} //terms 필수가 체크안되면 disabled
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

/* <TravelerForm
                engFirstname={values.engFirstname}
                errorFirstname={errors.engFirstname}
                engLastname={values.engLastname}
                errorLastname={errors.engLastname}
                korName={values.korName}
                errorKorname={errors.korName}
                birth={values.birth}
                errorBirth={errors.birth}
                gender={values.gender}
                errorGender={errors.gender}
                onChange={handleChange}
                number={1}
              /> */
