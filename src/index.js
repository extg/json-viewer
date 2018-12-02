// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import React from 'react';

import renderJson from './json-viewer'

if (typeof window !== 'undefined') {
  window.React = React;
}

console.log('index');

window.addEventListener("DOMContentLoaded", function () {
  const content = document.body.textContent;
  console.log('DOMContentLoaded')
  try {
    const jsonData = JSON.parse(content.trim());
    window.json = jsonData;
    let root = document.createElement("div");
    root.setAttribute("id", "chrome-json-viewer-root");
    document.body.innerHTML = "";
    document.body.appendChild(root);
    renderJson(jsonData, document.getElementById('chrome-json-viewer-root'));
  } catch (e) {
    // console.error('JSON parsing failed');
  }
}, false);



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
