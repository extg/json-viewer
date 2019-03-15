import render from './render';
import ReactJson from '../components/ReactJsonView';
import JsonViewer from '../components/JsonViewer';

const content = document.body.textContent || '';

const getComponent = name =>
  ({
    devtools: JsonViewer,
    reactjson: ReactJson,
  }[name]);

let jsonData;
try {
  jsonData = JSON.parse(content.trim());

  console.log(jsonData);

  chrome.storage.sync.get(({ variant, componentProps }) =>
    render({ src: jsonData, component: getComponent(variant), ...componentProps }),
  );
} catch (e) {
  // console.error('JSON parsing failed', e);
}

chrome.runtime.onMessage.addListener(props => {
  // console.log('chrome.runtime.onMessage', props);

  if (jsonData) {
    chrome.storage.sync.get(({ variant, componentProps }) =>
      render({ src: jsonData, component: getComponent(variant), ...componentProps, ...props }),
    );
  }
});
