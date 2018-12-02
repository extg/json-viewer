import React from 'react';

import renderJson from './json-viewer'

if (typeof window !== 'undefined') {
  window.React = React;
}

window.addEventListener("DOMContentLoaded", function () {
  const content = document.body.textContent;
  // console.log('DOMContentLoaded')
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
