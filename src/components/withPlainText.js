import React from 'react';
import styled from 'styled-components';
import {branch, renderComponent} from 'recompose'

const Root = styled.ol`
  list-style-type: none;
  
  color: #000;
  line-height: normal;
  font-size: 11px;
  font-family: "Fira Code Retina", "Fira Code", Menlo, monospace;
  cursor: default;
  padding-left: 12px;
`;

const RootPlainText = styled(Root)`
  white-space: pre-wrap;
  overflow-x: auto;
`;

const PlainText = ({src}) => (
  <RootPlainText>
    {JSON.stringify(src, null, 2)}
  </RootPlainText>
)

const withPlainText = branch(({plainText}) => plainText, renderComponent(PlainText))

export default withPlainText;
