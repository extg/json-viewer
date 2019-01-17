import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

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

const render = ({ component: Component = JsonViewer, ...props }) => {
  const root = getRoot();

  // console.log(typeof Component, props);

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>,
    root,
  );
};

export default render;
