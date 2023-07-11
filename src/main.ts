import { StrictMode } from 'react';
import { jsx } from 'radipan';
import ReactDOM from 'react-dom/client';
import App from './App.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  jsx(StrictMode, jsx(App))
);
