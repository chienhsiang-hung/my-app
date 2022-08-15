import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Hello(props) {
  return <h1>hello, {props.name}</h1>;
}
function MainContent(props) {
  return <div>
    <Hello name="Hsiang" />
    <h2>{props.counter}</h2>
  </div>;
}

function Item(props) {
  return <div className='item'>
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> ${props.price}
  </div>;
}
function MyApp(props) {
  return <div>
    <MainContent counter={props.counter} />
    <Item name='cheese' price='4.99' />
    <Item name='cheese' price='4.99' />
    <Item name='cheese' price='4.99' />
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
function show() {
  counter++;
  // In practice, most React apps call ReactDOM.render() once.
  // We will learn how to update elements without calling the render method in the next lessons.
  root.render(
    <MyApp counter={counter}/>,
    document.getElementById('root')
  )
}
setInterval(show, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
