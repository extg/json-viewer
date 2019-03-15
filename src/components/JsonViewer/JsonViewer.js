import React from 'react';
import styled from 'styled-components';

import withToggle from '../withToggle'
import withPlainText from '../withPlainText'
import getComputedTypeOrValue, { getType } from './getComputedTypeOrValue';
import {ClosedIcon, OpenIcon} from './Icon'
import NameAndValue, {Name, Value} from './NameAndValue'

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

const eq = ': ';
const sep = ', ';

const JsonString = styled.span`
  color: #565656;
`;

const toJson = (obj, type) => (
  <JsonString>
    {'{'}
    {!Object.isSealed(obj) &&
    Object.keys(obj)
      .sort(Number)
      .map(key => [
        <Name key='name'>{key}</Name>,
        eq,
        <Value key='value' type={type}>{JSON.stringify(obj[key])}</Value>
      ])
      .reduce((a, b) => [a, sep, b])}
    {'}'}
  </JsonString>
);

const JsonViewer = withToggle(({indexKey, src, active = !indexKey, toggle}) => {
  const type = getType(src);
  let typeValue = getComputedTypeOrValue(src, active);

  if (type === 'Object') {
    typeValue = toJson(src, type);
  }

  const Icon = active ? OpenIcon : ClosedIcon

  return (
    <Root>
      <NameAndValue onClick={toggle}>
        <Icon hidden={Object.isSealed(src)} />

        {/* Не выводим indexKey, если его нет (у rootNode) */}
        {!!indexKey && <Name>{indexKey}</Name>}
        {!!indexKey && ': '}

        <Value type={type}>{typeValue}</Value>
      </NameAndValue>

      {active &&
      !Object.isSealed(src) &&
      Object.keys(src)
        .sort(Number)
        .map(key => (
          <JsonViewer key={key} indexKey={key} src={src[key]} active={false}/>
        ))}
    </Root>
  );
})

export default withPlainText(JsonViewer);
