import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

// 0116화

//! React-rounter-DOM의 주요 컴포넌트
// BrowserRouter: route 기능을 사용할 제일 루트 단위의 컴포넌트를 그룹화 하는 과정
// → react0912 > src > index.tsx
// Route: url과 렌더링할 컴포넌트를 연결하는 컴포넌트
// Routes: Route 컴포넌트들(2개 이상)을 그룹화 하는 컴폰넌트
// Link: 유저가 다른 경로로 네비게이션 할 수 있도록 하는 컴폰넌트

//! React-router-DOM 설치 및 기본 설정
// node_modules가 있는 폴더의 통합 터미널
// npm install react-router-dom

//! 기본 Router들을 그룹화 하는 Routes 사용
//? path 속성
// : App.tsx 연결 시, 작성되는 localhost: 3000 경로 뒤에 작성되는
// : url 경로 작성
// ex. /login /signup /booksDetail
//? elements 속성
// : 해당 url과 연결될 컴포넌트 지정
// : import로 컴포넌트 전달을 받아야 함
import About from './pages/about'
import Home from './pages/home'

//! Link 컴포넌트 사용
// link 컴포넌트는 다른 경로의 이동을 위해 사용
// : 페이지 전체를 새로 로드하지 않고,
// : 앱 내에서 경로를 변경
//? to 속성
// : 이동할 경로 지정 (문자열 | 객체)

//! 정적 라우팅
// : 특정 경로url → 특정 컴포넌트를 고정하는 방법
// : 애플리케이션의 고정된 페이지 ex. 홈화면/소개 페이지/로그인/로그아웃 etc

//! 동적 라우팅
// : url 매개변수를 사용하여 동적으로 컴포넌트를 렌더링 하는 방법
// : 같은 구조의 페이지에서 다양한 데이터를 표시할 때 사용
// ex. 사용자 프로필 | 상품 상세 페이지 etc

//! useParams
// : ReactRouter에서 제공하는 hooks
// : url 매개변수를 객체 형태로 추출할 수 있게 해주는 기능 담당
// : 경로에 지정된 매개변수 값을 컴포넌트 내에서 쉽게 접근/사용할 수 있도록 설정
// : url 경로에 매개변수 지정 시, 형태 ▷ :매개변수

// 동적으로 url 매개변수를 사용하는 컴포넌트
import User from './pages/user';

//! 의존성 설치 (필요한 라이브러리 설치)
// : zustand, axios, json-server
// npm install zustand, axios, json-server

//? 서버 데이터 파일 생성: json-server를 위한 설정
// 프로젝트 루트에 db.json 파일 생성

import BookList from './pages/BookList';
import BookDetail from '/pages/BookDetail';


function App() {
  return (
    <>
    {/* 
      Routes 외에서 작성되는 컴포넌트는,
      url 경로와 상관없이 react 실행 시, 렌더링 된다
      : header, nav, footer 작성된다
      */}
      <nav>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/user/1'>User 1</Link></li>
        <li><Link to='/user/2'>User 2</Link></li>
        <li><Link to='/book'>Book</Link></li>
      </nav>
    <Routes>
      {/* 
        path 경로에 /만 지정한 경우, 해당 route의 메인 url로 연결
      */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* 동적 컴포넌트 사용 예시 */}
      <Route path='/user/:userId' element={<User />} />

      {/* 책 목록 > 상세 페이지 컴포넌트 예시 */}
      <Route path='/book' element={<BookList />} />
      {/* 동적 경로에서 책 상세 페이지 표시 */}
      <Route path='/book/:bookdId' element={<BookDetail />} />
    </Routes>
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </>
  );
}

export default App;
