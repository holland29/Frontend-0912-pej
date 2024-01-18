import { useState } from "react";
import { initialState } from "../a_useReducer/Reducer";

//! useInput hook 정의
// : 입력 필드의 현재 값,
// : 해당 값을 업데이트하는 함수를 반환
export function useInput(initialValue: string) {
  // input tag에서 작성되는 txt를 관리

  const [value, setValue] = useState(initialValue);

  // 입력값 변경_핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // input(value, 변경 이벤트값)
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleInputChange
  };
}
