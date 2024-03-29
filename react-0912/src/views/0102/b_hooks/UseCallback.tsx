import React, { useCallback, useState } from 'react'

//! UseCallback
// :함수를 메모리에 저장하여, 컴포넌트가 re랜더링 될 때마다, 동일한 함수를 재생성하는 것을 방지함

//? 사용 사례
// - 자식 컴포넌트에 함수를 props로 전달할 때 용이
// - 함수의 참조 일관성을 유지할 때
// - 불필요한 re랜더링을 최소화 할 때

//? 기본 구조
// const memoizedCallback = useCallback(() => {
  // doSomething(a,b);
// }, [a, b]);

// doSomething(a, b): 메모리에 저장될 함수
// [a, b]: 의존성 배열

//? useMemo, useCallback의 차이점
// useMemo: 값(value)를 캐싱할 때 사용, 복잡한 계산의 결과를 저장
// useCallback: 함수(function)을 캐싱할 때 사용, 함수의 재생성을 방지

//^ 자식 컴포넌트
const ChildComponent: React.FC<{ onClick: () => void }> = ({onClick}) => (
  <button onClick={onClick}>Click me!</button>
)

export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  
  // 부모 컴포넌트가 re랜더링 될 때마다, 
  // handleClick 함수는 재생성 되는것을 방지
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  )
}
