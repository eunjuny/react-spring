import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Title } from './MyCss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import LoginPages from './pages/LoginPages';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route path='/' exact={true} component={HomePage} />
      <Route path='/login/:id' exact={true} component={LoginPages} />
      <Footer />
    </div>
  );
}

export default App;
