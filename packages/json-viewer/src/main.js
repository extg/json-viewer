// import React from 'react';

import render from './render'

// window.React = React;
window.render = render;
window.isJsonViewerEnabled = true;

window.addEventListener("DOMContentLoaded", function () {
  const content = document.body.textContent;
  try {
    const jsonData = JSON.parse(content.trim());
    window.json = jsonData;

    render(jsonData);
  } catch (e) {
    console.error('JSON parsing failed', e);
  }
}, false);
