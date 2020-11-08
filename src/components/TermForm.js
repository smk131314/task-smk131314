import React, { Component } from "react";

const TermForm = (props) => {
  return (
    <div className="field">
      <h1 className="label is-large">약관 동의</h1>
      <div className="checkbox_group">
        <input
          type="checkbox"
          // onClick={this.handleAllChecked}
          onChange={props.onChange}
          value="checkedall"
          id="check_all"
        />
        <label>전체 약관 동의</label>
        <ul>
          <li>
            <input
              // key={props[0].value || 0}
              // onClick={this.handleChildCheck}
              onChange={props.onChange}
              type="checkbox"
              value="termRequired"
            />
            <label>여행자 약관 동의 (필수)</label>
          </li>
          <li>
            <input
              // key={props[1].value || 1}
              // onClick={this.handleChildCheck}
              onChange={props.onChange}
              type="checkbox"
              value="termNormal"
            />
            <label>특가 항공권 및 할인 혜택 안내 동의 (선택)</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermForm;

// <input type="checkbox" id="check_1" class="normal" />
//         <label for="check_1">여행자 약관 동의 (필수)</label>

//         <input type="checkbox" id="check_2" class="normal" />
//         <label for="check_2">특가 항공권 및 할인 혜택 안내 동의 (선택)</label>

/* <li>
            <input
              // key={props.terms[1].value || 1}
              // onClick={handleChildCheck()}
              onChange={props.onChange}
              type="checkbox"
              checked={props.terms[1].isChecked || "false"}
              value={props.terms[1].value || "termNormal"}
              id="termNormal"
            />
            <label for="termNormal">
              특가 항공권 및 할인 혜택 안내 동의 (선택)
            </label>
          </li> */


          
// const TermForm = (props) => {
//   // hook 적용 > onChange함수??
//   const handleAllChecked = (event) => {
//     let terms = props.terms;
//     // check box group의 ischecked로 각각의 term들의 ischecked 바꿔준다.
//     terms.forEach((term) => (term.isChecked = event.target.checked));
//     // this.setState({ terms: terms });
//   };

//   const handleChildCheck = (event) => {
//     let terms = props.terms;
//     terms.forEach((term) => {
//       if (term.value === event.target.value)
//         term.isChecked = event.target.checked;
//     });
//     // this.setState({ terms: terms });
//   };

/*
const TermForm = (props) => {

  const handleAllChecked = (event) => {
    let terms = props.terms;
    // check box group의 ischecked로 각각의 term들의 ischecked 바꿔준다.
    terms.forEach((term) => (term.isChecked = event.target.checked));
    // this.setState({ terms: terms });
  };

  const handleChildCheck = (event) => {
    let terms = props.terms;
    terms.forEach((term) => {
      if (term.value === event.target.value)
        term.isChecked = event.target.checked;
    });
    // this.setState({ terms: terms });
  };

  return (
    <div className="field">
      <h1 className="label is-large">약관 동의</h1>
      <div className="checkbox_group">
        <input
          type="checkbox"
          // onClick={handleAllChecked()}
          onChange={props.onChange}
          // checked={props[0].isChecked}
          value="checkedall"
          id="check_all"
        />
        <label>전체 약관 동의</label>
        <ul>
          <li>
            <input
              // key={props[0].value || 0}
              onClick={handleChildCheck()}
              onChange={props.onChange}
              type="checkbox"
              value={props.terms["r"] || ""}
              id="termRequired"
            />
            <label>여행자 약관 동의 (필수)</label>
          </li>
          <li>
            <input
              // key={props[1].value || 1}
              onClick={handleChildCheck()}
              onChange={props.onChange}
              type="checkbox"
              value={props.terms["h"] || "termNormal"}
              id="termNormal"
            />
            <label>특가 항공권 및 할인 혜택 안내 동의 (선택)</label>
          </li>
        </ul>
      </div>
    </div>
  );
};*/

/////////////////////////////

// let termsCheckState = [
//   { value: "termRequired", isChecked: false },
//   { value: "termNormal", isChecked: false },
// ];

// const handleAllChecked = (event) => {
//   let terms = this.termsCheckState;
//   // check box group의 ischecked로 각각의 term들의 ischecked 바꿔준다.
//   terms.forEach((term) => (term.isChecked = event.target.checked));
//   this.termsCheckState = terms;
//   // this.setState({ terms: terms });
// };

// const handleChildCheck = (event) => {
//   let terms = this.termsCheckState;
//   terms.forEach((term) => {
//     if (term.value === event.target.value)
//       term.isChecked = event.target.checked;
//   });
//   this.termsCheckState = terms;
//   // this.setState({ terms: terms });
// };

// return (
//   <div className="field">
//     <h1 className="label is-large">약관 동의</h1>
//     <div className="checkbox_group">
//       <input
//         type="checkbox"
//         onClick={this.handleAllChecked}
//         onChange={props.onChange}
//         value="checkedall"
//         id="check_all"
//       />
//       <label>전체 약관 동의</label>
//       <ul>
//         <li>
//           <input
//             // key={props[0].value || 0}
//             onClick={this.handleChildCheck}
//             onChange={props.onChange}
//             type="checkbox"
//             value="termRequired"
//           />
//           <label>여행자 약관 동의 (필수)</label>
//         </li>
//         <li>
//           <input
//             // key={props[1].value || 1}
//             onClick={this.handleChildCheck}
//             onChange={props.onChange}
//             type="checkbox"
//             value="termNormal"
//           />
//           <label>특가 항공권 및 할인 혜택 안내 동의 (선택)</label>
//         </li>
//       </ul>
//     </div>
//   </div>
// );
// };
