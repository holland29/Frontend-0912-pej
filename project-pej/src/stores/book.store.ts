import axios from "axios";
import { create } from "zustand";

// 책 데이터 타입 정의
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}
// Zustand 스토어 상태 타입 정의
interface BookStore {
  books: Book[];
  fetchBooks: () => void;
}
export const useBookState = create<BookState>((set) => ({
  // 초기 책 목록 상태: 빈 배열
  books: [],
  fetchBooks: async () => {
    const response = await axios.get("http://localhost:5000/pej");
    // 상태 업데이트
    set({ books: response.data });
  },
}));
