import React, { useReducer, useState } from 'react'

//! useReducer
// use~ : hook의 종류 중 하나
// : 컴포넌트 내의 상태관리 기능 담당
// : 복잡한 state 로직을 관리할 때, 효과적
// : 현재의 state(상태), action(행동)를 받아서 
// : => 새로운 state를 반환하는 함수
// ** 주로 따로 관리됨

//? 기본 구조
// (state, action) => newState

type StateType = {
  count: number;
}

type ActionType = {
  type: 'increment' | 'decrement';
}

//^ 리듀서 함수: 상태를 관리하는 함수
function reducer(state: StateType, action: ActionType): StateType {
  // 조건문: if | else if << switch
  // string타입(action, type)
  switch(action.type) {
    case 'increment': 
      // 객체타입
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      // actionType에 맞지 않을 경우, 오류 출력
      throw new Error();
  }
}

export default function UseReducer01() {
  const [count, setCount] = useState<number>(0);

  //^ useReducer를 활용한 count 상태 관리  
  // state: 상태를 관리하는 변수 (count와 동일)
  // dispatch: 액션을 발생시키는 함수
  // >> dispatch({ type: 'increment' }), 

  //^ useReducer 파라미터
  // 1번째 파라미터: reducer 함수
  // 2번째 파라미터: 초기 상태

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  const increment = () => {
    // setCount(prevCount => prevCount + 1);
    dispatch( {type: 'increment'} )
  }

  const decrement = () => {
    // setCount(prevCount => prevCount - 1);
    dispatch( {type: 'decrement'} )
  }


  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}
