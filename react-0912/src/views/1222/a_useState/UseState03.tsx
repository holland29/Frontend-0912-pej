import React, { useState } from 'react'

//! 여러 개의 입력 상태 값 처리
// : input에 name을 설정하여 이벤트가 발생했을 때 해당 값을 참조
// : useState에서는 문자열이 아니라 객체 형태의 상태를 관리


//! react 상태에서 객체를 수정해야 할 경우,
// input[name]: value;
// : 위처럼 직접 수정 X
// setInput({...inputs, [name]: value})
// : 위처럼 새로운 객체를 만들어, 새 객체에 변화를 주고, 이를 상태로 사용

interface Input {
  id: string;
  password: string;
}

export default function UseState03() {
  const [inputs, setInputs] = useState<Input>({
    id: '',
    password: ''
  });

  // 비구조화 할당을 통해 값 추출
  // : 배열/객체의 속성을 변수로 쉽게 추출하는 표현식
  // : (비추출 시,) 아래 input 값이 전달이 안됨
  const { id, password } = inputs;
  // const id = input.id;
  // const password = input.password;

  //? 스프레드 연산자 (= ...연산자)
  const obj = {a: 1, b: 2};
  // const newObj = {...obj, c: 3};
  const newObj = {...obj, b: 3};
  // {a: 1, b: 2, c: 3}
  console.log(newObj)

  // 배열 요소 값 변경
  const arr = [1, 2];
  arr[1] = 3;
  console.log(arr);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트가 일어난 DOM 요소에서 name과 value를 추출
    // id 입력란에 입력할 경우, e.target => 아이디 input 요소
    // e.target의 value & name => id변수, 'id'명
    
    // e.target => 아래의 input dom 속성
    // name = value의 이름
    const { value, name } = e.target;

    setInputs({      
      ...inputs, // 기존의 input 객체를 복사한 뒤
      // 기존의 input 객체를 복사 → 기존의 상태를 복사
      // {id: '', password: ''}

      // name 키를 가진 값을 value로 설정
      [id]: '안녕하세요' 
      // 변경된 필드의 값을 업데이트함 (수정/추가)
      // [name]: value;

    })
  }

  const handleResetClick = () => {
    setInputs({
      id: '',
      password: '',
    });
  }

  // onSubmit 함수
  // 폼이 제출될 때, 호출되는 함수
  // 실제 환경에서는 api 호출 등을 포함
  const handleSubmit = (e: React.FormEvent) => {
    // 기본 폼 제출 동작을 방지
    e.preventDefault();
    // 폼 데이터 제출 처리 예시
    console.log('From Data Sumitted: ', inputs)
  }



  return (
    <>
      <h5 style={{ backgroundColor: 'black', color: 'white' }}>
        여러 개의 입력 상태 관리
      </h5>
      {/* input의 name속성 */}

      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='아이디' 
        name='id' 
        onChange={handleInputChange}
        value={id}
      />

      <br />
      
      <input 
        type="text" 
        placeholder='비밀번호' 
        name='password'
        onChange={handleInputChange}
        value={password}
      />
      <button onClick={handleResetClick}>Reset</button>
      </form>
      
      <div>
        아이디 : {id} <br />
        비밀번호 : {password}
      </div>

      {/* 제출 버튼 */}
      <button type='submit'>Submit</button>
    </>
  )
}