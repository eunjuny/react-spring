import React, { useEffect, useState } from 'react';
import Home from '../home/Home';

const HomePage = () => {
  //http요청 (fetch, axios(다운))
  const [boards, setBoards] = useState([]); //boards는 상태데이터여야 한다. 그래야 데이터가 넘어왔을때 상태가 변함?
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  //빈 배열 한번만 실행
  useEffect(() => {
    //다운로드 가정=fetch(),axios(),ajax()
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    // 빈데이터
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);
  return (
    <Home
      boards={boards}
      setBoards={setBoards}
      number={number}
      setNumber={setNumber}
      user={user}
    />
  );
};

export default HomePage;
