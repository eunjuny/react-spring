import React from 'react';
import styled from 'styled-components';

// function 방식
// class 방식

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//스타일 상속받아서 확장
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <h1>홈 : {number}</h1>
      <button onClick={() => setNumber(number + 1)}> 번호증가</button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목:{board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
