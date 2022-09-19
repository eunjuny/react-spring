import React from 'react';

let num = 10;

function Sub() {
  return <div></div>;
}

export { num }; //추가적으로 export 하고 싶은건 이렇게
export default Sub; //export default 는 이 함수를 외부에 노출하겠다는 의미
