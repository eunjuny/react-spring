import React from 'react';

// function 방식
// class 방식
const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards } = props;
  return (
    <div>
      <div>
        <h1>홈페이지입니다</h1>
        <button onClick={() => setBoards([])}>전체삭제</button>
        {boards.map((board) => (
          <h3>
            제목:{board.title} 내용:{board.content}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Home;
