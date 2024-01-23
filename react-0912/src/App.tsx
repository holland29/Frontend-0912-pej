import { Route, Routes } from "react-router-dom";
// 파일명 index의 경우,
// 해당 파일이 존재하는 디렉토리(폴더)의 
// 즉, 웹 페이지의 기본(메인) 파일임을 "파일명"으로 알려줌
import Index1219 from "./views/1219";
import Index1221 from "./views/1221";
import Index1222 from "./views/1222";
import Index1226 from "./views/1226";
import Index1228 from "./views/1228";
import Index1229 from "./views/1229/React";
import Index0102 from "./views/0102/index"
import Index0104 from "./views/0104/Index"
import Index0105 from "./views/0105/Index"
import { useContext } from "react";
import { ThemeContext } from "./views/0105/a_ContextAPI/ThemeContext";
import ThemeProvider from "./views/0105/a_ContextAPI/ThemeProvider";
import { GlobalStyles } from "@mui/material";
import Index0108 from "./views/0108/react/Index"
import Index0109 from "./views/0109/a_Axios/index"
import Index0111 from "./views/0111/index"
import Index0123 from "./views/0123/mui/index"

function App() {
  //! Context API를 사용한 전역 상태관리
  return (
    <>
    {/* <GlobalStyles /> */}
      <ThemeProvider>
          <Routes>
            {/*
            npm run start  
              기본경로: localhost: 3000
              Route의 path 속성으로 지정된 경로로 elements가 랜더링됨
            */}
            {/* npm run start의 제일 첫번째 랜더링의 페이지의 경우,
              / ← 경로로 지정한다 ▽ */}
            {/* <Route path="/" element={<랜더링할 페이지 />} /> */}
            <Route path="/1219" element={<Index1219 />} />
            <Route path="/1221" element={<Index1221 />} />
            <Route path="/1222" element={<Index1222 />} />
            <Route path="/1226" element={<Index1226 />} />
            <Route path="/1228" element={<Index1228 />} />
            <Route path="/1229" element={<Index1229 />} />
            <Route path="/0102" element={<Index0102 />} />
            <Route path="/0104" element={<Index0104 />} />
            <Route path="/0105" element={<Index0105 />} />
            <Route path="/0108" element={<Index0108 />} />
            <Route path="/0109" element={<Index0109 />} />
            <Route path="/0111" element={<Index0111 />} />
            <Route path="/0123" element={<Index0123 />} />
          </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
