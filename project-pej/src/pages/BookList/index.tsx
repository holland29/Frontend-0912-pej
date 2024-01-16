import React, { useEffect } from 'react'
import { useBookState } from '../../stores/book.store';

// 책 목록 컴포넌트
export default function Index() {
  // zustand 스토어에서 책 목록, 데이터 목록을 가져오는 함수 사용
  const { books, fetchBooks } = useBookState();

  // 의존성 배열을 사용
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks])
  
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {/* ▽ 동적 라우팅 ▽ */}
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
          ))}
      </ul>
    </div>
  )
}
