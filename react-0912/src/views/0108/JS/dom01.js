document.addEventListener("DOMContentLoaded", () => {
  // 2. 해당 DOM은 웹 페이지의 구조를 트리 형식으로 표현

  // 웹 문서의 DOM 트리
  // 노드(Node)://! DOM 문서 객체 모델

  // DOM(문서 객체 모델) 정의
  // : 웹 페이지의 콘텐츠 및 구조, 스타일 요소를 구조화 시켜 표현
  // : >> 해당 문서에 접근하여 읽고 조작할 수 있도록 하는 인터페이스

  // DOM의 동작 방식
  // 1. 웹 브라우저가 HTML 문서를 로드한 후, 이를 DOM으로 변환 DOM의 기본 구성 요소
  // 요소 노드(Element Node): HTML 태그
  // 텍스트 노드(Text Node): 요소 내의 텍스트
  // 속성 노드(Attribute Node): 요소의 속성

  // JS에서의 DOM조작

  //! 1. JS에서 DOM 접근(선택)
  //? 기본 메소드를 사용한 요소 선택
  // - getElementById (id 속성을 사용한 단일 요소 선택) - 요소 1개 반환
  let elementById1 = document.getElementById("first-dom");
  let elementById2 = document.getElementById("second-dom");

  // - getElementsByClassName (class 이름을 이용해 요소 집합을 선택) - 요소의 배열이 반환
  let elementsByClassName = document.getElementsByClassName("para");

  // - getElementsTagName (태그 이름을 이용해 요소 집합을 선택) - 요소의 배열이 반환
  let elementsByTagName = document.getElementsByTagName("div");

  //? 쿼리 선택자를 사용
  // - querySelector (CSS 선택자를 이용한 단일 요소 선택 - 첫 번째 요소)
  let querySelector = document.querySelector(".para");
  // - querySelectorAll (CSS 선택자를 사용해 일치하는 모든 요소를 선택)
  let querySelectorAll = document.querySelectorAll(".para");

  //! 2. DOM 요소 조작
  function domElement() {
    // textContent
    // : 요소의 텍스트 내용을 가져오거나 설정
    elementById1.textContent = "새로운 텍스트를 추가합니다.";
    // innerHTML
    // : 요소의 HTML 내용을 가져오거나 설정
    elementById2.innerHTML = "<strong>중요한 내용입니다.</strong>";

    // style 속성
    // : 요소의 인라인 스타일을 직접 조작
    // : css 속성을 js 속성으로 변환
    //   >> camelCase 사용
    elementById1.style.backgroundColor = "lightblue";
    elementById2.style.fontSize = "20px";

    // classList
    // : 요소의 클래스 목록을 조작
    // add(추가), remove(제거), toggle(반전), contains(포함)

    // 클래스 추가
    // document.getElementById('myElement').classList.add('new-class');

    // 클래스 제거
    // document.getElementById('myElement').classList.remove('old-class');

    // 클래스 토글
    // document.getElementById('myElement').classList.toggle('toggle-class');

    // 속성값 설정, 제거
    // setAttribute
    // : 요소에 새로운 속성을 설정, 기존 속성을 변경
    elementById1.setAttribute("class", "divs");
    elementById2.setAttribute("class", "divs");

    let divs = document.querySelectorAll(".divs");

    divs.forEach(function (div) {
      div.style.border = "2px solid black";
      div.style.margin = "10px";
      div.style.padding = "10px";
      div.style.textAlign = "center";
    });

    // removeAttribute
    // : 요소에 특정 속성을 제거
    // 인자: 제거할 속성의 이름
    elementById1.removeAttribute("divs");
    elementById2.removeAttribute("divs");

    // 이벤트 리스너 추가
    let button = document.querySelector("#button");

    let clickHandler = function () {
      button.textContent = "클릭되었습니다.";
    };

    button.addEventListener("click", clickHandler);
  }

  domElement();
});

// document.addEventListener("DOMContentLoaded", () => {
//   //! dom 문서 객체 모델

//   //? dom(문서 객체 모델) 정의
//   // : 웹 페이지의 콘텐츠 및 구조, 스타일 요소를 구조화 시켜 표현함

//   //? 용도
//   // : 프로그래밍 언어가 해당 문서에 접근/읽어, 조작할 수 있도록 하는 인터페이스

//   //? dom의 동작 방식
//   // 1. 웹 브라우저가 html.doc 로드 > 이를 dom으로 변환
//   // 2. 해당 dom은 웹 페이지의 구조를 트리 형식으로 표현

//   //? 웹 문서의 dom-tree
//   // Node: dom의 기본 구성 요소
//   // 요소 노드 element-node: html (전체)tag
//   // text-node: 요소 내의 텍스트 (열,내용 = text-node,닫히는 태그)
//   // 속성 노드 attribute-node: 요소의 속성

//   // js에서의 dom 조작 (html +js 기능)
//   // js ≠ dom
//   //! 1. js에서 dom 접근(선택)

//   //? 기본 메소드를 사용한 요소 선택
//   // - getElementById: id속성의 단일 요소 선택 -> 요소 1개 반환
//   let elementById1 = document.getElementById('first-dom');
//   let elementById2 = document.getElementById('second-dom');

//   // - getElementsByClassName
//   // : class명을 이용해 요소 집합을 선택 -> 요소 배열이 반환
//   let elementsByClassName = document.getElementsByClassName('para');

//   // - getElementsByTagName
//   // : 태그명을 이용해 요소 집합을 선택 -> 요소 배열 반환
//   let elementsByTagName = document.getElementsByTagName('div');

//   //? query 선택자를 사용
//   // - querySelector: css선택자 사용, 단일 요소 선택(1번째 요소만 들고옴)
//   let querySelector = document.querySelector('.para')
//   // - querySelectorAll: css 선택자를 사용, 일치하는 모든 요소 선택
//   let querySelectorAll = document.querySelectorAll('.para');

//   //! 2. dom 요소 조작
//   // text-content
//   // : 요소의 텍스트 내용을 가져오거나 설정

//   elementById1.textContent = "new-text 추가!";
//   // innerHTML
//   // : 요소의 html 내용을 가져오거나 설정
//   // elementById2.map((element) => {
//   //   element.innerHTML = "<strong>상기 주요 내용 입니다!</strong>";
//   // });
// }); //전체 종료

// //? style 속성
// // : 요소의 인라인 스타일을 직접 조작
// // : css 속성을 → js 속성으로 변환 => camelCase 사용
// elementsById1.style.backgroundColor = "lightblue";
// elementsById2.style.fontSize = "20px";

// //? classList
// // : 요소의 클래스 목록을 조작
// // add 추가, remove 제거, toggle 반전(true ↔ false), contains(포함여부)

// //? 속성값 설정, 제거
// // setAttribute: 요소의 새 속성 설정 | 기본 속성을 변경
// elementsById1.setAttribute("class", "divs");
// elementsById2.setAttribute("class", "divs");
// let divs = document.querySelectorAll(".divs");
// divs.forEach(function (div) {
//   div.style.border = "2px solid black";
//   div.style.margin = "20px";
//   div.style.padding = "10px";
//   div.style.textAlign = "center";
// });

// // removeAttribute
// // : 요소의 특정 속성을 제거함
// // 인자: 제거할 속성명만 기재
// elementById1.removeAttribute("divs");
// elementById2.removeAttribute("divs");

// // 이벤트 리스너 사용 = 즉각 사용
// let button = document.querySelector('#button')
// document.querySelector("#button").addEventListener('click', function() {
//   document.querySelector('#button').text-content = "클릭됐습니다"
// })
// let clickedHandler = function(){
//   button.textContent = '클릭됨!'
// }
