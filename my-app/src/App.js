import logo from './logo.svg';
import './App.css';

// 0.React 엔진 - 데이터 변경 감지해서 UI를 그려주는
// 1.실행 과정(index.html) - SPA(Single Page Application) : 싱글페이지에서 body의 내용이 바뀜 -> 깜빡거림이 없음
// 2.JSX 문법
// 3.바벨 (자바스크립트 ES5) -> ES6로 개발하고 ES5로 변경해주는 라이브러리?

//(1) return시에 하나의 Dom만 리턴할 수 있다.
//    return <div>안녕1</div> <div> 안녕2 </div> 안됨;
//(2) 변수선언은 let 혹은 const로만 해야됨
//(3) if 사용 불가능 -> 삼항연산자 (조건 ? 값(true):값(false))
//(4) 조건부 렌더링
//(5) css디자인
//    -내부에 적는 방법
//    -외부 파일에 적는 방법
//    -라이브러리 사용 (부트스트랩, component-styled)

let a = 10; //변수
const b = 20; //상수

const mystyle = {
  //내부에 적는 방법
  color: 'red',
};

function App() {
  return (
    <div>
      <div style={mystyle}>
        안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
      </div>
      <h1 className='box-style'>해딩태그 {b == 20 && '20입니다.'}</h1>
      <hr />
    </div>
  );
}

export default App;
