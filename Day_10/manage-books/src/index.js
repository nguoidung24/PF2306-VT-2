import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Routers } from "react-router-dom";
import NewBook from './components/NewBook';
import EditBook from './components/EditBook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/newbook' element={<NewBook />} />
        <Route exact path='/editbook/:id' element={<EditBook />} />
      </Routes>
    </Routers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
