import render from './render';

const content = document.body.textContent || '';
try {
  const jsonData = JSON.parse(content.trim());
  console.log(window.document);

  console.log(jsonData);
  render(jsonData);
} catch (e) {
  console.error('JSON parsing failed', e);
}
