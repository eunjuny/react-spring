import React, { useState } from 'react';
import styled from 'styled-components';

const StyleditemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const handleWrite = (e) => {
    e.preventDefault(); //onSubmit을 사용할때는 form태그가 하려는 액션을 중지 시키기 위해 이게 필요.
    setPosts([...posts, post]);
    setNo(no + 1);
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.content);

    //computed property names 문법 (키값을 동적으로 할당(name, content))
    setPost({
      ...post, //기존값 유지하면서 덮어쓰기
      [e.target.name]: e.target.value,
    }); //name은 key값 value 내용
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form onSubmit={handleWrite}>
        <input
          tyep='text'
          placeholder='제목을 입력하세요...'
          value={post.title}
          onChange={handleForm} //변화가 있을때 계속 가져옴
          name='title'
        />
        <input
          tyep='text'
          placeholder='내용을 입력하세요...'
          value={post.content}
          onChange={handleForm}
          name='content'
        />
        <button type='submit'>글쓰기</button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyleditemBoxDiv>
          <div>
            번호 : {post.id} 제목 : {post.title} / 내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyleditemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
