//? 1. js 템플릿 문자열
// : 백틱으로 작성되는
// : 문자열 내의 변수, 표현식을 쉽게 작성하며,

import { findConfigFile } from "typescript";

// : 멀티라인 표현식을 간편하게 작성함
const multiList = `
  안녕하세요
  반갑습니다
  `;

// 백틱 내에서, ${}를 사용하여, 변수/표현식을 삽입 가능하게 함
const greeting = `${multiList}`;
console.log(greeting);

//? 화살표 함수
// : 함수를 간단하게 표현하는 선언 방식
// 기본 함수 this 바인딩의 함수 호출 차이가 있음

function TraditionalFunction() {
  this.value = 20;
  setTimeout(function () {
    console.log(this.value);
  }, 1000);
  // 전통 함수일 경우, 스코프 내의 this만 가져옴
  // undefined
}
TraditionalFunction();

// const ArrowFunction() {
//   this.value = 20;
//   setTimeout(() => {
//     console.log(this.value)
//   },1000)
// }
// 함수가 선언될 때,
// 상위 스코프 this의 함수를 상속받음
// ArrowFunction();

//! 3. 구조분해 할당 & 스프레드 연산자
// a. 구조 분해 할당
// : 배열, 객체로부터 속성/요소를 쉽게 추출할 수 있는 표현식
const person = {
  name: "kendall",
  age: 29,
  height: 179,
  gender: "female",
};
// 속성명의 변수명으로 속성값을 할당
const { name, age } = person;
console.log(name);
console.log(age);

// 배열의 구조 분해 할당은,
// 원 배열 요소의 갯수보다, 분해할 변수가 더 적을 경우에는
// 인덱스 순서대로 할당됨
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);
console.log(second);

// 구조 분해 할당의 기본값 설정
// const height = person.height (아래와 동일)
// const job = 'developer';
const { height, gender, job = "developer" } = person;
console.log(height, gender, job);

// b. 스프레드 연산자
// : 배열/객체의 요소를 쉽게 복사하거나 합칠 수 있는 연산자
const arr1 = [1, 2, 3];
// const arr2 = arr1;

// 스프레드 연산자로 복사를 하는 경우,
// 요소값만을 배열에 할당함
const arr2 = [...arr1];

arr2[1] = 5;
// 배열을 할당하여 복사하는 경우,
// 주소값이 복사되기 때문에,
// 복사된 배열을 수정하면, 기존 배열 또한 똑같이 수정됨
console.log(arr1);

arr3 = [...arr1, 4, 5];
console.log(arr3);

// 객체
// 풀옵스로 한 번에 받을 때 사용함
// 회원가입 등 객체>변수>분해>출력
const object1 = { a: 1, b: 2 };
const object2 = { ...object1, c: 3 };
console.log(object1);
console.log(object2);

//! 비동기 프로그래밍
// : 순차적인 진행x
// : 코드 실행이 완료되는 작업부터 랜더링(출력)하는 방법
// : Promise <<< Async & Await

// Promise(): 비동기 작업의 최종 완료 | 실패를 나타내는 객체
// 콜백함수의 매개변수
const myPromise = new Promise((resolve, reject) => {
  const value = "성공";
  const error = "실패";
  if (resolve) {
    resolve(value); // 성공 결과 전달
  } else {
    reject(error); // 실패 메세지 전달
  }
});
myPromise
  .then((value) => {
    // 성공 시, 수행
  })
  .catch((error) => {
    // 실패 시, 수행
  })
  .finally(() => {
    // 완료 시( 성공|실패 유무 상관없이 진행됨), 수행
  });

// Async & Await
// : promise 보다 쉽게 작성할 수 있도록 도와주는 es8 문법
// : 비동기 함수는 async 선언되고,
// : awiat 키워드를 사용하여 promise 결과를 기다림

async function fetchData() {
  // 비동기적으로 수행할 로직을 작성
  try {
    // 로직 형태 외우기
    const response = await fetch("https://example.com/data");
    // 해당 데이터 처리
    const data = await response.json();

    // 비동기 수행 중, 일어나는 오류를 반환
  } catch (error) {
    // 에러 처리
  }
}

//! 이벤트 처리
// 1. 이벤트 핸들링(≒다루다)
// : 유저의 인터랙션(상호작용/요구사항)을 처리하는 방법
// : js 에서는 dom 요소에 이벤트 리스너를 추가하여,
// : 유저의 행동에 반응함
// ex. btn
const button = document.querySelector("button");

// click e.핸들러 정의
function handleClick() {
  console.log("button clicked!");
}

button.addEventListener("click", handleClick);

// 2. 이벤트 위임
// : 여러 요소에 대한 이벤트를 한 곳에서 효율적으로 처리하는 기법
// : 상위 요소에 하나의 이벤트 리스너를 추가,
// : 이벤트가 발생한 하위 요소를 식별하여 처리함

// 상위요소 선택
const list = document.querySelector("ul");

// e.핸들러 정의
function handleListItemClick(event) {
  if (event.target.tagName === "LI") {
    console.log("List Item Clicked : ", event.target.textContent);
  }
}
list.addEventListener("click", handleListItemClick);
