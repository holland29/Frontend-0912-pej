import React, { ChangeEvent, useRef, useState } from 'react'
import CreateGoal from './CreateGoal'
import GoalList from './GoalList';
import { trace } from 'console';

//! 배열에 항목을 추가
// spread연산자, concat 함수를 사용

//! 배열에 항목을 제거
// filter 메소드 사용 (해당 하아목과 일치하는 id 제거)

//! 배열의 항목 수정
// 

// 목표 타입 정의
interface Goal {
  id: number;
  title: string;
  explanation: string;
  active: boolean;
}

// 초기 목표
const initialGoals: Goal[] = [
  {
    id: 1,
    title: '책 5권 읽기',
    explanation: '러시아 문학 읽기',
    active: true
  },
  {
    id: 2,
    title: '국내여행',
    explanation: '자차로 운전하기',
    active: false
  },
  {
    id: 3,
    title: '해외여행',
    explanation: '유럽 배낭여행',
    active: false
  },
]

// 목표 APP 컴포넌트 정의
export default function GoalApp() {
  // 목표 상태 관리
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  // 목표 입력 상태 관리
  const [goalInput, setGoalInput] = useState({
    title: '',
    explanation: ''
  })

  // 목표 ID 관리
  const nextId = useRef(4);

  // 목표 입력 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 두 개의 input 창의 값을 하나의 핸들러로 관리하기 때문에 이벤트가 일어나는 target에서 데이터 값을 비구조화 할당으로 처리
    const { name, value } = e.target;

    // 스프레드 연산자를 사용하여 
    // 변경되지 않은 input은 그래도 두고
    // 변경된 name의 value값만 업데이트
    setGoalInput({
      ...goalInput,
      [name]: value
    });
  };

  // 목표 추가 핸들러
  const handleCreate = () => {
    // 새로운 목표 생성
    const newGoal = {
      id: nextId.current,
      title: goalInput.title,
      explanation: goalInput.explanation,
      active: false
    };
    // 현재 목표를 목표 목록에 추가
    // : 기존의 배열을 수정하지 않고 복사하여 사용
    // : 불변성
    // >> spread 연산자 (...)
    // >> concat 함수
    //    : 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 생성

    //? setGoals([...goals, newGoal]);    
    setGoals(goals.concat(newGoal));

    // 입력 필드 초기화
    setGoalInput({title: '', explanation: ''});
    // 다음 ID 증가
    nextId.current += 1;
  }

  const handleRemove = (id: number) => {
    // goal.id가 매개변수로 일치하지 않는 원소만 '추출'해서 새로운 배열을 만듬
    // : goal.id가 매개변수로 받아오는 id 인것을 제거

    // forEach, map ↔ filter(콜백함수)
    //? filter 함수
    // : 배열을 전체 순회하여, 
    // 함수가 true인 요소만을 신규 배열로 추출함
    
      // 각 목표의 id 제거함
      // 기존 매개변수 ≠ 불일치한 id는 신규 배열에 넣음
    setGoals(goals.filter(goal => goal.id !== id))
  }

  // Toggle: 1번 누르면 on/off (true 기능이 있음)
  // 전체 배열을 순회하여, 
  // goal의 id가 매개변수인 id와 일치하는 요소는
  // 전체 속성 중에서, active 값을 반전 시키기
  // 불일치 요소는, 해당 요소를 그대로 반환

  //? map() & forEach() 차이점
  // forEach()
  // : 기존 arr를 변경, 단순한 반복문을 대체하기 위한 함수(단순반복)

  // map() 
  // : forEach로 쓸 수 있는것을 map으로 활용성이 더 높음(성능 up)
  // : 새로운 arr를 반환, 
  // : 즉 요소값을 다른값으로 mapping한(새 기능 적용) 새로운 arr을 생성

  const handelToggle = (id: number) => {
    
    // goal: 속성이 있는 객체 타입
    setGoals(goals.map(goal => 
      goal.id === id ? {...goal, active:!goal.active}: goal)
    )
  }
  
  return (
    <div>
      <CreateGoal
        goal={goalInput}
        onChange={handleChange}
        onCreate={handleCreate}
      />

      <h3>2024년 목표 목록</h3>
      <GoalList goals={goals} onRemove={handleRemove} onToggle={handelToggle} />
    </div>
  )
}