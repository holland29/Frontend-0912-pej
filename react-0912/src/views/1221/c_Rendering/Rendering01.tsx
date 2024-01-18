import REACT from "react";
import { FaStar } from "react-icons/fa";

interface ItemType{
  name: string;
  isPacked: boolean;
}

function Item({name, isPacked}: ItemType) {
  // if조건식을 사용한 조건부 랜더링
  // 만약, 조건부로 아무것도 반환하지 않을 경우
  // : null
  // if (isPacked) {
    // return <li className='item'>{name} ❤</li>;
    // return null;
//   }
//   return <li className='item'>{name}</li>  

  //! 삼항 연산자를 사용한 조건부 랜더링
  return (
    <li className="item">
      {isPacked ? (
        // 짐이 싸져있을 경우,
        // dle 태그: 텍스트를 가로지르는 선
        <del>
          {name}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

//! 논리 연산자(&&)를 사용한 조건부 렌더링
// react-icons
// npm install react-icons
export default function Rendering01(){
  // const score = 0;
  const score = 1;
  return (
    <>
      <p>Packing List</p>
      <ul>
        <Item
          name = 'snack'
          isPacked={false}
        />
        <Item
          name = 'Note'
          isPacked={false}
        />
        <Item
          name = 'Clothes'
          isPacked={true}
        />
      </ul>
      {/* &&연산자
      : 평점이 있을 경우에만 별점 표시
      : 앞의 항이 true인 경우에만, 뒤의 항이 표시됨
      (***논리 연산자: 앞 true, 뒤 true 판단함)
      */}
      {score > 0 && <FaStar />}
    </>
  )
}