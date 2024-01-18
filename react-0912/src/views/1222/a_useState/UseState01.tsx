import React, { useState } from "react";

//! "컴포넌트 단위"의 상태 관리: useState
// 컴포넌트(함수형/클래스)
// 현재: 함수형 컴포넌트 사용 → hook훅
// React의 hook 중 하나, 가변적인 상태 관리

//? useState의 상태와 렌더링 관계
// 1. useState를 사용하여 상태(sate) 설정
// : 해당 상태의 변경이 컴포넌트의 재렌더링을 유발함
// react가 렌더링을 다시 시작하여, dom을 업데이트함

//? 비동기(비순차적 렌더링o → 빠르게 로딩되는 순서대로)
// : useState로 상태를 변경하는 작업은, 비동기적으로 이루어짐
// 2번째 인자 set설정 함수를 호출한 직후,
// → 상태값이 즉시 변경되지 않을 수도 있다

export default function UseState01(){
  // count: 현재 값
  // setCount: 상태를 업데이트하는 함수
  // (0): 상태의 초기값
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    // 상태 +1 증가(업데이트)
    //^ 상태 설정 함수를 그대로 사용
    // → 이전 상태를 직접 참조
    
    setCount(count + 1);
    
    // 0: 해당 시점에서는, 이전 값이 출력(될 수 있음) 
    // ▷ 상태 변경 즉각 반영(이 안될 수 있다)
    // ▶ react는 성능 최적화를 위해, 여러 상태 변경을 한꺼번에 처리
    // ▶ 하나의 랜더링 사이클에서 일어날 수 있도록 설정
    console.log(count);

    // 이전 상태값을 기반으로, 상태를 업데이트 할 경우,
    // 함수형 업데이트를 사용할 것을 권장
    // ▷ 상태 업데이트 함수의 "최신 상태값"을 → 자동 전달

    //^ 함수형 업데이트
    // setCount(count + 1); //0
    setCount(prevCount => prevCount + 1);
  }
  return(
    <div>
      <h5 style={{backgroundColor: 'black', color: 'white'}}>최신 상태 관리</h5>
      <p>you clicked {count} times</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}