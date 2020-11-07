export default function validate(values) {
  // useForm custom Hook의 에러를 열거
  let errors = {};

  // 필수 입력 값이 존재하는지 확인, 없으면 에러 object에 추가
  if (!values.engName || values.engName.length < 2) {
    errors.engName = "영어로 2자 이상 입력해주세요.";
  }
  // 존재한다면 포맷 확인
  else if (values.engName.length > 20) {
    errors.engName = "최대 20자까지 입력 가능합니다.";
  } else if (!/^[a-zA-Z\s]+$/.test(values.engName)) {
    errors.engName = "영어와 띄워쓰기만 입력 가능합니다.";
  }

  if (!values.korName || values.korName.length < 2) {
    errors.korName = "최소 2자 이상 입력해주세요.";
  } else if (values.korName.length > 8) {
    errors.korName = "최대 20자까지 입력 가능합니다. ";
  } else if (!/^[가-힣]*$/.test(values.korName)) {
    errors.korName = "한글만 입력 가능합니다.";
  }

  return errors;
}
