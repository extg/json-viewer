import * as ReactDOM from 'react-dom';
import * as React from 'react';

import JsonViewer from '../components/JsonViewer';

const getRoot = (id = 'chrome-json-viewer-root') => {
  let root = document.getElementById(id);

  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', id);
    document.body.innerHTML = '';
    document.body.appendChild(root);
  }

  return root;
};

const render = (
  dataObject: Object,
  { component: Component = JsonViewer, plainText } = {}
) => {
  const root = getRoot();
  console.log('render');
  ReactDOM.render(
    <Component dataObject={dataObject} plainText={plainText} />,
    root
  );
};

export default render;
