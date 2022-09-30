import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Detail from './book/Detail';
import Home from './book/Home';
import SaveForm from './book/SaveForm';
import UpdateForm from './book/UpdateForm';
import Header from './components/Header';
import JoinForm from './user/JoinForm';
import LoginForm from './user/LoginForm';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/saveForm" exact={true} element={<SaveForm />} />
          <Route path="/book/:id" exact={true} element={<Detail />} />
          <Route path="/loginForm" exact={true} element={<LoginForm />} />
          <Route path="/joinForm" exact={true} element={<JoinForm />} />
          <Route path="/updateForm" exact={true} element={<UpdateForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
