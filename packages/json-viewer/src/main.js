import render from './render'

window.render = render;

window.addEventListener("DOMContentLoaded", function () {
  const content = document.body.textContent;
  try {
    const jsonData = JSON.parse(content.trim());
    window.json = jsonData;

    console.log(jsonData);
    render(jsonData);
  } catch (e) {
    console.error('JSON parsing failed', e);
  }
}, false);
