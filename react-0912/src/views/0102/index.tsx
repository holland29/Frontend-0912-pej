import React from 'react'
import HookReview from './a_hook_review/HookReview'
import UseMemo from './b_hooks/UseMemo'
import UseCallback from './b_hooks/UseCallback'
import ReactMemo from './b_hooks/ReactMemo'
import MUI01 from './c_MUI/MUI01'

export default function Index() {
  return (
    <>
      <h1>리액트 훅 복습</h1>
      <HookReview />

      <h1>Hooks(useMemo, useCallback)</h1>
      <UseMemo />
      <UseCallback />
      <ReactMemo />

      <h1>MUI</h1>
      <MUI01 />
    </>
  )
}