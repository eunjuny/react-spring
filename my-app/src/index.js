import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// ReactDOM.render(
//   <App />, //App.js를 실행
//   document.getElementById('root') // public/index.html의 root를 찾아서 App을 집어넣는다 -> App을 root에 그려넣는다.
// );

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
//store가 App내의 모든곳에서 사용 가능하게
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
