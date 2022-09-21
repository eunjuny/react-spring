import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Title } from './MyCss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import LoginPages from './pages/LoginPages';

function App() {
  return (
    <div>
      <LoginPages />
    </div>
  );
}

export default App;
