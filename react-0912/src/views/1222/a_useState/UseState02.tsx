import React, { useState } from "react";

//! useState 사용한 이벤트 처리
// react.이벤트 핸들러의 경우, 
// : onclick()과 같이 → camelCase를 사용
// 문자열이 아닌, 함수를 "이벤트"에 전달

//? 사용자 usetState와 이벤트 처리의 결합
// 유저액션(btn클릭, 폼 제출 etc)에 따른, 상태 변경
// 이벤트 핸들러 내에서, 
// → useState 상태 업데이트 함수를 호출 → 상태 변경

export default function UseState02(){
  const [inputValue, setInputValue] = useState<string>('');

  // 요소의 이벤트 전달
  //? 이벤트 객체
  // react에서 event를 처리할 때, 이벤트 객체가 핸들러 함수에 전달
  //^ input의 onChange를 사용하면, 이벤트 객체 e를 파라미터로 받을 수 있다
  //? e.target.value
  //^ e.taget => 이벤트가 발생한 dom 요소를 지칭
  //? value 속성
  //^ 해당 요소의 현재 값에 접근하는데 사용


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 유저의 입력값을 상태로 설정
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    // 상태 설정 함수를 사용하여, inputValue를 초기화
    setInputValue('');
  }




  return(
    <>
      {/* 
      input 텍스트를 p태그의 내용으로 전달하는 이벤트 설정

      onChange 이벤트
      : 유저가 입력 필드에 타이핑을 할 때마다(실시간 적용), 발생하는 이벤트
      : input, textarea, select etc의 html 요소에 적용됨
      */}


      <h4 style={{backgroundColor: 'black', color: 'white'}}>useState 사용한 이벤트 처리</h4>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      
      {/* 리셋btn 클릭 시, input 태그 안의 내용이 초기화 되도록 설정 */}
      <button onClick={handleClick}>Reset</button>
      <p>Input Value: {inputValue}</p>
    </>
  )
}