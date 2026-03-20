import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';


import { useThemeStore } from './store/useThemeStore.js'; 



const root = document.documentElement;
const savedTheme = localStorage.getItem("chat-theme") || "light";
root.setAttribute("data-theme", savedTheme);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
