import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';


let target = document.getElementById('root');

// let element = React.createElement("h1", {className: 'saludo'}, 'Hola Mundo');

// ReactDOM.render(element, target)

ReactDOM.render(<App />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
