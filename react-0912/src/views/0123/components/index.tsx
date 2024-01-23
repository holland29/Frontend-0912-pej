import { Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import images from './images/puppy-1.jpg'

export default function index() {
  return (
    <>
      {/* 기본 버튼 */}
      <Button variant='contained'>
        Default
      </Button>

      {/* 색상 변경 버튼 */}
      <Button variant='contained' color='primary'>색상 변경 버튼</Button>

      {/* 비활성화 버튼 */}
      <Button variant='contained' disabled>disabled btn</Button>

      {/* 링크 버튼 */}
      <Button variant='contained' href='#text-buttons'>Link</Button>

      {/* 텍스트 필드: 유저로부터 입력 받기위한 요소 */}
      <TextField
        label='Standard' variant='standard' />
      
      {/* 멀티라인 */}
      <TextField
        label='Standard' 
        multiline 
        rows={4}/>

      {/* 패스워드 */}
      <TextField
        label='Password' type='password' />

      {/* 카드: 정보를 보여주는 컨테이너 */}
      <Card variant='outlined'>
        <CardMedia
          component='img'
          height='140'
          image='./images/puppy-1.jpg'
          alt='강아지 이미지1'
        />
        <CardContent>
          <Typography variant='h5' component='h2'>
            Card Title
          </Typography>
          <Typography variant='body2' component='p'>
            Card content
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
