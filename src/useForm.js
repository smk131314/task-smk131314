// import the useState Hook
import { useEffect, useState } from "react";

// Callback is the function that’s passed into the custom Hook from the component. It gets called whenever the form submits.
const useForm = (callback, validate) => {
  const [values, setValues] = useState({}); // state 값, setter 함수
  const [errors, setErrors] = useState({}); // error를 state로 저장
  const [isSubmitting, setIsSubmitting] = useState(false); // 초기상태 false로 설정

  // errors의 변화를 수신해서, object의 길이를 확인, 오류object가 비어있는 경우 콜백호출
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]); // 두번쨰 매개변수로 errors를 사용해서, errors에 변화가 있을때마다 호출된다.

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // submit하기 전에 validation확인하기 위해 hook의 상태에서 error로 저장된 값을 전달하여 저장
    setErrors(validate(values));
    setIsSubmitting(true);

    // submit전에 약관동의 체크됐는지 확인, 체크돼야 버튼활성화
    // console.log(''); 로 test
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
