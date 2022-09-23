import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';

const LoginPages = (props) => {
  const { history } = props;
  console.log('loginPage', props);
  return (
    <div>
      <button onClick={() => history.push('/')}>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPages;
