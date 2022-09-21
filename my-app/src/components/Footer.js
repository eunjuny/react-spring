import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용가능)
//styled-components => js.파일과 css파일 관리!
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
