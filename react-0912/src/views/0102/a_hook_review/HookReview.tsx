import React, { useEffect, useState } from 'react'

//? 사진 객체 정의를 위한 인터페이스 구현
interface Photo {
  id: number;
  title: string;
}

export default function HookReview() {

  // 사진 목록 저장하는 상태
  const [photos, setPhotos] = useState<Photo[]>([]);

  // 유저의 검색어를 저장하는 상태
  const [searchTerm, setSearchTerm] = useState<string>('');

  // 새 사진 제목을 저장하는 상태
  const [newPhotoTitle, setNewPhotoTitle] = useState<string>('');

  // 현재 수정 중인 사진의 제목을 저장하는 상태
  const [editTitle, setEditTitle] = useState<string>('');

  //^ 현재 수정 중인 사진의 id를 저장하는 상태
  // : 초기값 null; (첫 시작부터 저장x)
  const [editingId, setEditingId] = useState<number | null>(null);

  //^ 컴포넌트가 마운트 될 때, 외부 api의 db 호출
  useEffect(() => {
    // api 호출
    // fetch로 가져오는 응답을 json 형태로 변환하기
    // 처음 30개의 사진만 가져와, 상태에 저장
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 10)));
  // 빈 의존성 배열: 마운트 시에만, 실행
  }, []);


  //^ 새 사진을 추가하는 함수
  const addPhoto = () => {
    // 새로운 사진 객체를 생성
    const newPhoto: Photo = {      
      // Math.max 함수: 해당 목록에서 제일 큰 숫자를 불러옴
      // photops arr type
      // number 타입이 배열로 묶임
      // map 함수를 사용하여, photos 배열의 각 사진에서 id만 추출
      // , photos 배열이 비어있을 경우(전체 삭제)
      // => 기본값: 0;
      id: Math.max(...photos.map(photo => photo.id), 0) +1,

      // 입력 필드에서 유저가 입력한 새 사진 제목을 사용함
      title: newPhotoTitle,
    };
    //^ 사진 목록 상태를 갱신하기
    // 전체복사, 새 사진(목록 맨끝)
    // 초기값이 없는 경우의 설정: setPhotos([newPhoto, ...photos]);
    setPhotos([...photos, newPhoto]);

    //^ 입력필드 초기화
    setNewPhotoTitle('');
  }

  //^ 특정 사진을 삭제하는 함수
  const deletePhoto = (id: number): void => {
    // photos에서 삭제됨 
    // 해당 id를 제외한 사진들로 목록을 갱신함
    setPhotos(photos.filter(photo => photo.id !== id));
  }

  //^ 특정 사진의 수정을 시작하는 함수
  const startEdit = (photo: Photo) => {
    // 수정 중인 사진의 id 설정
    setEditingId(photo.id);

    // 수정 중인 사진 제목을 입력 필드에 설정
    setEditTitle(photo.title);
  }

  //^ 사진 수정을 완료하는 상태
  const editPhoto = () => {
    // 수정 완료 시, 렌더링된 사진 배열의 요소를 변경
    setPhotos(
      photos.map(photo => 
      // id가 일치하면, 제목 수정
      // ...photo: photo 객체 자체를 전부 복사
      photo.id === editingId ? { ...photo, title: editTitle } : photo))
  };

  //^ 입력 필드 초기화
  setEditTitle('');
  //^ 수정 중인 사진 id 초기화
  setEditingId(null);



  //^ 검색어에 따라, 필터링된 사진 목록 형성
  // includes() 메서드
  // : 배열의 항목에 특정값이 포함되어 있는지를 판단하여, true | false 값을 반환함
  const filteredPhotos = photos.filter(photo => photo.title.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <>
      {/* 검색 입력 필드 */}
      <input 
        type="text"
        placeholder='Search Photos'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <hr />


      {/* 새 사진 추가 입력 필드 */}
      <input 
        type="text" 
        placeholder='add new photo'
        value={newPhotoTitle}
        onChange={(e) => setNewPhotoTitle(e.target.value)}
      />

      {/* 사진 추가 btn */}
      <button onClick={addPhoto}>Add photo</button>
      <hr />

      {/* 수정 중인 사진을 위한 입력 필드 및 저장 btn */}
      {/* !== true */}
      {/*
        && : 앞뒤로 true 여야만 함 
        : 내부 div 자동 랜더링 됨
      */}
      {editingId !== null && (
        <div>
          {/* edit 클릭 > startedit에 전달됨 */}
          <input 
            type="text" 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} />
          <button onClick={editPhoto}>Save Edit</button>
        </div>
      )}

      {/* 사진 목록 리스트 형식으로 표시 */}
      {/* https://jsonplaceholder.typicode.com/photos */}

      <ul>
        {filteredPhotos.map(photo => (
          <li key={photo.id}>
            {photo.id === editingId ? 
              (
                `Editing: #{photo.title})`
                ): (
                  <>
                    {photo.title}
            {/* 수정 btn */}
            <button onClick={() => startEdit(photo)}>
              Edit
            </button>
            {/* 삭제 btn */}
            <button onClick={() => deletePhoto(photo.id)}>
              Delete
            </button>
                  </>
                )
                }
          </li>
        ))}
      </ul>
    </>
  )
}
