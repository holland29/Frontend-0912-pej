import React, { ChangeEvent, useState } from 'react'

//! 화살표 함수
// 기본형태: restPrameter(...args)
// : 여러개의 인자를 배열로 전달받는 방법

const myFunction = (...args: string[]) => {
  console.log(args);
}

//! 구조분해 할당 & 스프레드 연산자
type User = {
  name: string;
  age: number;
  email: string;
}

export default function ReactGrammer() {
  //^ 불변성
  // : 상태를 직접 수정x
  // : 상태 변화가 필요할 때, 
  // : 새로운 상태(객체, 배열)를 생성하여 반환함
  const [user, setUser] = useState<User>({
    name: 'kendall',
    age: 29,
    email: 'jenner@naver.com'
  })

  // 객체를 분해함
  const { name, age, email } = user;
  const handleChage = (e: ChangeEvent<HTMLInputElement>) => {
    // 이벤트 위임 받기
    // setUser({...user, [속성명]: 속성값})
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
  <>
    <p>이름: {name}</p>
    <p>나이: {age}</p>
    <p>이메일: {email}</p>

    <input 
      type="text" 
      name="name"
      value={name} 
      onChange={handleChage} />
    <br />

    <input 
      type="text" 
      name="age" 
      value={age}  
      onChange={handleChage} />
    <br />

    <input 
      type="text" 
      name="email" 
      value={email}  
      onChange={handleChage} />
  </>    
  )
}
