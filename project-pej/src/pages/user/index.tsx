import React from 'react'
import { useParams } from 'react-router-dom'

export default function Index() {
  // useParams : 구조 분해 할당
  const { userId } = useParams();


  return (
    <div>
      User Id: { userId }
    </div>
  )
}
