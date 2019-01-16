import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import ReactJsovViewOption from "./ReactJsovViewOption";

const Container = styled.div`
  width: 500px;
  height: 300px;

  background: palegoldenrod;
`;

const SettingsPage = () => {
  return (
    <Container>
      <ReactJsovViewOption />
    </Container>
  );
};

ReactDOM.render(<SettingsPage />, document.getElementById(
  "root"
) as HTMLElement);
