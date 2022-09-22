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

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
