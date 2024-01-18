import axios from 'axios';
import React, { useEffect, useState } from 'react'

// 서버없는 프론트엔드 프로젝트를 위한,
// mock-server & mock-data 만들기

//! mock
// : 실제 서버 응답을 모방하고,
// : 백엔드 서버가 준비중일 때, 사용하는 하드코딩된 데이터

//? mock-server (JSON-server) 설치 및 설정
// npm install -g json-server (전역)
// npm install -D json-server (의존성~)

//? db.json 파일 생성
// : mock-db 입력
//? JSON-server 실행
// > 'http://localhost.3001'에서 api 실행
// >> 포트 번호 생략 시, 기본 3000포트로 실행됨
// >>> json-server --watch db.json (--port 3000 괄호는 생략가능)

//? api 호출을 위한, axios 설치
// npm install axios

//^ api 호출로 가져올 응답 db를 위한 타입 정의
interface User {
  id: number;
  username: string;
  email: string;
}


export default function Mock01() {

  const [users, setUsers] = useState<User[]>([]);

  //! useEffect
  // : 함수 컴포넌트에서 부수 효과를 수행하기 위한 Hook
  // : 데이터 가져오기, 구독 설정, 수동으로 DOM 변경 등의 작업
  // : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정 가능
  //? useEffect와 라이프 사이클
  // 마운팅과 업데이트에서 실행할 코드 관리
  // 의존성 배열(deps)을 사용하여 업데이트 시 동작을 제어
  // 반환되는 함수는 언마운팅 시 호출되어 정리작업에 사용
  //? useEffect 기본 구조
  // 첫 번째 인자: 부수 효과를 수행하는 함수(콜백 함수)
  // 두 번째 인자: 의존성 배열 
    // - 해당 배열의 값이 변경될 때 마다 효과가 다시 실행     
    // - 배열이 비워져 있는 경우 컴포넌트가 마운트 될 때 한 번만 실행
    // -- 정리 함수가 있다면(return 반환) 언마운트 시 단 한번만 실행

  useEffect(() => {
    axios.get('http://localhost:5000/users').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div>
      <h2>username: {users.map(user => (
        <h2>{user.username}</h2>
      ))}</h2>

      <p>email: {users.map(user => (
        <p>{user.email}</p>
      ))}</p>
    </div>
  )
}
