import { Box, Button, Typography, createTheme } from '@mui/material';
import React from 'react';


//! mui 기본 사용법
// 설치 npm install 
// @mui/material @emotion/react @emotion/styled

// mui 라이브러리의 컴포넌트를 사용하여 정의
// : 대문자로 시작하여 키워드를 작성

//! mui 테마 및 디자인 정의
// createTheme 함수를 사용하여, 사용자 정의 테마 생성
// ThemeProvider 컴포넌트를 사용, 메인 컴포넌트에게 전달
// 메인 컴포넌트 = app 컴포넌트

export const theme = createTheme({
  palette : {
    primary: {
      light: '#7986cb', //밝은ver. 기본 색상
      main: '#556cd6', //기본 색상
      dark: '#303f9f', //다크ver. 기본 색상
      contrastText: '#fff' //대비되는 텍스트 색상
    },
    secondary: {
      light: '#33ab9f',
      main: '#19857b',
      dark: '#00695f',
      contrastText: '#000',
    },
    // 기본적으로 2개 컬러 세팅하기
  },
  typography: {
    fontFamily: 'Arial',
    fontSize: 14,
    h1: {
      fontSize: '2.2rem'
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: 'italic',
    }
  },
  spacing: 4, //기본 간격
  components: {
    MuiButton: {
      // 버튼 컴포넌트에 대한 스타일
      styleOverrides: {
        root: {
          // 모든 버튼에 적용될 스타일
          borderRadius: 8,
        }
      }
    }
  },
  //? 반응형 디자인을 위한 브레이크 포인트 설정
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
});

//! 스타일 커스텀 마이징
//? sx 속성
// : mui의 컴포넌트의 스타일을 변경하는 속성
// : 개별 컴포넌트에 사용자 정의 스타일 적용
// (1) 일반적인 스타일 지정
// : camelCase 사용
// (2) box-model 관련 공간 지정,
// : utility 유틸리티 속성
// : bgcolor, m(mr,mb,ml), p(pr,pb,pl)


export default function index() {
  return (
    <>    
      <Typography 
        variant='h1' 
        color='primary.contrastText'>
        안녕 mui 입니다
      </Typography>
      <Typography 
        variant='body1' 
        color='secondary.light'>
        material ui를 사용한 예제 입니다.
      </Typography>

      <Box style={{margin: theme.spacing(2)}}>
        <Button variant='contained' color='primary'>
          버튼을 클릭해주세요!
        </Button>
        <Button variant='outlined' color='secondary' style={{margin: theme.spacing(2)}}>
          더보기
        </Button>
      </Box>

      {/* xs 속성 사용하기 */}
      <Box 
        sx={{ color: 'primary.contrastText', 
        backgroundColor: 'primary.main',
        width: 100,
        borderRadius: 8,
        '@media (min-width: 600px)': {width: 250, fontSize: 40},
        '&:hover': {bgColor: 'primary.light'},
        display: 'flex',
        justifyContent: 'center',
        m: 10,
        p: 10,
        maxWidth: 300,
        maxHeight: 150,
        }}>
        this is a box
      </Box>
    </>
  )
}
