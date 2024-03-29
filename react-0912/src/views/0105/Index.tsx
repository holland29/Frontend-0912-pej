import React, { useContext } from 'react';
import ContextApi01 from  './a_ContextAPI/ContextAPI01';
import { ThemeContext } from './a_ContextAPI/ThemeContext';
import Styled01 from './b_StyledComponents/Styled01';
import Mock01 from './c_mock/Mock01';

export default function Index() {
  // Context API를 사용한 전역 상태관리
  // ThemeContext를 사용하여 현재 테마 상태를 가져옴
  const { theme } = useContext(ThemeContext);

  // 현재 테마에 따라 배경색 설정
  const backgroundColor = theme === 'lightblue' ? 'pink' : 'lightblue';
  
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>0105 리액트 수업 자료</h1>
      <h2>Context API</h2>
      <ContextApi01 />

      <h2>
        Styled Components
      </h2>
      <Styled01 />

      <h2>mock</h2>
      <Mock01 />
    </div>
  )
}