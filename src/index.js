import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "Hsiang";

let counter = 0;
function show() {
  counter++;
  root.render(
    <h1>hello, {name}, here is your counter: {counter}</h1>,
    document.getElementById('root')
  )
}
setInterval(show, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
