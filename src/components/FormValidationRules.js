export default function validate(values) {
  // useForm custom Hook의 에러를 열거
  let errors = {};

  // 여행자
  const travelerValidation = (
    engFirstname,
    engLastname,
    korName,
    gender,
    birth,
    number
  ) => {
    console.log("traveler validation이 작동했습니다.");
    // 필수 입력 값이 존재하는지 확인, 없으면 에러 object에 추가
    if (!engFirstname || engFirstname.length < 2) {
      errors.engFirstname = "영어로 2자 이상 입력해주세요.";
    }
    // 존재한다면 포맷 확인
    else if (engFirstname.length > 20) {
      errors.engFirstname = "최대 20자까지 입력 가능합니다.";
    } else if (!/^[a-zA-Z\s]+$/.test(engFirstname)) {
      errors.engFirstname = "영어와 띄워쓰기만 입력 가능합니다.";
    }

    if (!engLastname || engLastname.length < 2) {
      errors.engLastname = "영어로 2자 이상 입력해주세요.";
    }
    // 존재한다면 포맷 확인
    else if (engLastname.length > 20) {
      errors.engLastname = "최대 20자까지 입력 가능합니다.";
    } else if (!/^[a-zA-Z\s]+$/.test(engLastname)) {
      errors.engLastname = "영어와 띄워쓰기만 입력 가능합니다.";
    }

    if (!korName || korName.length < 2) {
      errors.korName = "최소 2자 이상 입력해주세요.";
    } else if (korName.length > 8) {
      errors.korName = "최대 20자까지 입력 가능합니다. ";
    } else if (!/^[가-힣]*$/.test(korName)) {
      errors.korName = "한글만 입력 가능합니다.";
    }

    //성별
    if (!gender) {
      errors.gender = "성별을 선택해 주세요.";
    }
    // 생년월일
    if (!birth || birth.length < 6 || birth.length > 6) {
      errors.birth = "6자리의 생년월일을 입력해 주세요. ";
    } else if (!/^[0-9]+$/.test(birth)) {
      errors.birth = "숫자만 입력 가능합니다.";
    }
  };

  // 여행자1
  travelerValidation(
    values.engFirstname,
    values.engLastname,
    values.korName,
    values.gender,
    values.birth,
    1
  );

  // 여행자2
  // travelerValidation(
  //   values.engFirstname_2,
  //   values.engLastname_2,
  //   values.korName_2,
  //   values.gender_2,
  //   values.birth_2,
  //   2
  // );

  // 도착 예정 시간
  if (!values.arrivalHour) {
    errors.arrivalHour = "시간을 선택해주세요.";
  }
  if (!values.arrivalMin) {
    errors.arrivalMin = "분을 선택해주세요.";
  }

  // 상세 핸드폰 정보
  if (!values.username || values.username.length < 2) {
    errors.username = "최소 2자 이상 입력해주세요.";
  } else if (values.username.length > 20) {
    errors.username = "최대 20자까지 입력 가능합니다.";
  } else if (!/^[a-zA-Z\s]+$/.test(values.username)) {
    errors.username = "영어와 띄워쓰기만 입력 가능합니다.";
  }

  if (!values.phone || values.phone.length < 2) {
    errors.phone = "최소 2자 이상 입력해주세요.";
  } else if (values.phone.length > 20) {
    errors.phone = "최대 20자까지 입력 가능합니다.";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = "숫자만 입력가능합니다.";
  }

  // 기타 예약 정보
  if (!values.details) {
    errors.details = "기타 예약 정보를 입력해주세요.";
  } else if (values.details > 200) {
    errors.details = "최대 200자까지 입력 가능합니다.";
  }

  // 약관 동의

  return errors;
}

///////////////////
//여행자
// // 필수 입력 값이 존재하는지 확인, 없으면 에러 object에 추가
// if (!values.engFirstname || values.engFirstname.length < 2) {
//   errors.engFirstname = "영어로 2자 이상 입력해주세요.";
// }
// // 존재한다면 포맷 확인
// else if (values.engFirstname.length > 20) {
//   errors.engFirstname = "최대 20자까지 입력 가능합니다.";
// } else if (!/^[a-zA-Z\s]+$/.test(values.engFirstname)) {
//   errors.engFirstname = "영어와 띄워쓰기만 입력 가능합니다.";
// }

// if (!values.engLastname || values.engLastname.length < 2) {
//   errors.engLastname = "영어로 2자 이상 입력해주세요.";
// }
// // 존재한다면 포맷 확인
// else if (values.engLastname.length > 20) {
//   errors.engLastname = "최대 20자까지 입력 가능합니다.";
// } else if (!/^[a-zA-Z\s]+$/.test(values.engLastname)) {
//   errors.engLastname = "영어와 띄워쓰기만 입력 가능합니다.";
// }

// if (!values.korName || values.korName.length < 2) {
//   errors.korName = "최소 2자 이상 입력해주세요.";
// } else if (values.korName.length > 8) {
//   errors.korName = "최대 20자까지 입력 가능합니다. ";
// } else if (!/^[가-힣]*$/.test(values.korName)) {
//   errors.korName = "한글만 입력 가능합니다.";
// }

// //성별
// if (!values.gender) {
//   errors.gender = "성별을 선택해 주세요.";
// }
// // 생년월일
// if (!values.birth || values.birth.length < 6 || values.birth.length > 6) {
//   errors.birth = "6자리의 생년월일을 입력해 주세요. ";
// } else if (!/^[0-9]+$/.test(values.birth)) {
//   errors.birth = "숫자만 입력 가능합니다.";
// }

// const travelerValidation = (
//   engFirstname,
//   engLastname,
//   korName,
//   gender,
//   birth,
//   number
// ) => {
//   console.log("traveler validation이 작동했습니다.");
//   // 필수 입력 값이 존재하는지 확인, 없으면 에러 object에 추가
//   if (!engFirstname || engFirstname.length < 2) {
//     errors["engFirstname_".concat(number)] = "영어로 2자 이상 입력해주세요.";
//   }
//   // 존재한다면 포맷 확인
//   else if (engFirstname.length > 20) {
//     errors["engFirstname_".concat(number)] = "최대 20자까지 입력 가능합니다.";
//   } else if (!/^[a-zA-Z\s]+$/.test(engFirstname)) {
//     errors["engFirstname_".concat(number)] =
//       "영어와 띄워쓰기만 입력 가능합니다.";
//   }

//   if (!engLastname || engLastname.length < 2) {
//     errors["engLastname_".concat(number)] = "영어로 2자 이상 입력해주세요.";
//   }
//   // 존재한다면 포맷 확인
//   else if (engLastname.length > 20) {
//     errors["engLastname_".concat(number)] = "최대 20자까지 입력 가능합니다.";
//   } else if (!/^[a-zA-Z\s]+$/.test(engLastname)) {
//     errors["engLastname_".concat(number)] =
//       "영어와 띄워쓰기만 입력 가능합니다.";
//   }

//   if (!korName || korName.length < 2) {
//     errors["korName_".concat(number)] = "최소 2자 이상 입력해주세요.";
//   } else if (korName.length > 8) {
//     errors["korName_".concat(number)] = "최대 20자까지 입력 가능합니다. ";
//   } else if (!/^[가-힣]*$/.test(korName)) {
//     errors["korName_".concat(number)] = "한글만 입력 가능합니다.";
//   }

//   //성별
//   if (!gender) {
//     errors["gender_".concat(number)] = "성별을 선택해 주세요.";
//   }
//   // 생년월일
//   if (!birth || birth.length < 6 || birth.length > 6) {
//     errors["birth_".concat(number)] = "6자리의 생년월일을 입력해 주세요. ";
//   } else if (!/^[0-9]+$/.test(birth)) {
//     errors["birth_".concat(number)] = "숫자만 입력 가능합니다.";
//   }
// };
