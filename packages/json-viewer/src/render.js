import ReactDOM from 'react-dom'
import React from 'react'

import JsonViewer from './json-viewer'

const getRoot = (id = "chrome-json-viewer-root") => {
  let root = document.getElementById(id);

  if (!root) {
    root = document.createElement("div");
    root.setAttribute("id", id);
    document.body.innerHTML = "";
    document.body.appendChild(root);
  }

  return root;
}

const render = (dataObject, {component: Component = JsonViewer, plainText} = {}) => {
  const root = getRoot();

  ReactDOM.render(
    <Component dataObject={dataObject} plainText={plainText}/>,
    root
  )
}

export default render;
