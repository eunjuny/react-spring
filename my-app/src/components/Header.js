import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용가능)
//styled-components => js.파일과 css파일 관리!
const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <HeaderList>
      <ul>
        <li>오시는길 : 서울 강남구....</li>
        <li>전화번호 : 020002002</li>
      </ul>
    </HeaderList>
  );
};

export default Header;
