import React, { useState } from 'react'


//! ReactMemo
// react의 성능 최적화 기능 중 하나
// 컴포넌트가 동일한 props로 랜더링 될 때, re랜더링을 방지
// 함수형 컴포넌트에서 사용
// props에서 변화가 없을 경우, 이전 랜더링 결과를 재사용

//? React 메모 사용 시, 주의사항 
// - 성능최적화를 위한 도구 → 모든 컴포넌트에서 활용 권장x
// - React.memo는 props의 변화만 감지
// : props를 받고 있는 컴포넌트 내부의 state 변경 시, 변화 감지x

//^ ListComponent의 props 타입 정의
interface ListComponentProps {
  list: string[];
}

const ListComponent = React.memo(( {list}: ListComponentProps) => {
  console.log('Rendering ListComponent');
  return (
    <ul>
      {list.map(item => <li key={item}> {item} </li>)}
    </ul>
  )
})

export default function ReactMemo() {
  // ListComponent의 ListProps가 변경되지 않는 한,
  // 메인(React.memo)의 컴포넌트 count 상태가 변경되어도,
  // re랜더링 되지 않음
  const [list, setList] = useState(['item1', 'item2']);
  const [count, setCount] = useState(0);

  return (
    <>
      <ListComponent list={list} />
      <button onClick={() => setCount(count +1)}>Imcrease</button>
      <p>Count: {count}</p>
    </>
  )
}
