import render from './render'

window.render = () => {}

window.addEventListener("DOMContentLoaded", function () {
  const content = document.body.textContent;
  try {
    const jsonData = JSON.parse(content.trim());
    window.render = render;
    window.json = jsonData;

    console.log(jsonData);
    render(jsonData);
  } catch (e) {
    // console.error('JSON parsing failed', e);
  }
}, false);
