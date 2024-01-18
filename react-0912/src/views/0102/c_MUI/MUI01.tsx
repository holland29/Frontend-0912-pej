import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


//! MUI Materail-UI (https://mui.com/) 
// : react에서 사용하는 ui 라이브러리
// : 디자인 컴포넌트

//? mui 사용법
// 1. 설치
// npm install @mui/material @emotion/react @emotion/styled

// cssbaseline
// https://mui.com/material-ui/react-css-baseline/

// * txt: https://mui.com/material-ui/react-typography/

// 블로그 참조
// https://medium.com/@iamkjw/material-ui-%EC%82%AC%EC%9A%A9%EB%B2%95-7c0a8e8fb573

//? Customization





export default function MUI01() {
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 500 }}>

        {/* heading */}
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>

        {/* body */}
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>

        {/* etc */}
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
    </>
  )
}
