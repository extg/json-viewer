import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const getRoot = (id = "chrome-json-viewer-root") => {
  let root = document.getElementById(id);

  if (!root) {
    root = document.createElement("div");
    root.setAttribute("id", id);
    document.body.innerHTML = "";
    document.body.appendChild(root);
  }

  return root;
};

const render = (
  dataObject: object = {},
  {
    component: Component = JsonViewer,
    plainText = "",
    componentProps = {}
  } = {}
) => {
  const root = getRoot();

  console.log(componentProps);

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Component
        {...componentProps}
        dataObject={dataObject}
        src={dataObject}
        plainText={plainText}
      />
    </ThemeProvider>,
    root
  );
};

export default render;
