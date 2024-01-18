import React from 'react'
import { useInput } from '../hooks/useInput'

//! customHook

// 단일 입력 필드
export default function CustomHook01() {

  const nameInput = useInput('');


  return (
    <div>
      <input
        {...nameInput}
        type="text" 
        placeholder='enter ur name'
      />

      {/* customHook
        : 컴포넌트 내에서 사용 시,
        : 사용할 컴포넌트의 변수에 할당하여,
        : 객체처럼 반환 값을 사용
      */}
      <p>ur name is: {nameInput.value}</p>
    </div>
  )
}
