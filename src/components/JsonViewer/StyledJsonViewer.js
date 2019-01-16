import React from 'react';
import styled from 'styled-components';

import getComputedTypeOrValue, { getType } from './getComputedTypeOrValue';

const Icon = styled.span`
  position: relative;
  min-height: 15px;
  line-height: 15px;

  display: inline-flex;
  align-items: center;
  
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    
  &::before {
    content: '\\00a0\\00a0';
    margin-right: -3px;
  }
  
  > svg {
    position: absolute;
    top: 4px;
    left: 0;
    height: 7px;
    width: 9.333px;
  }
`;

const ClosedIcon = ({hidden}) => (
  <Icon hidden={hidden}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#727272" d="M12 8L0 16V0z" />
    </svg>
  </Icon>
);
const OpenIcon = ({hidden}) => (
  <Icon hidden={hidden}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#727272" d="M8 14L0 2h16z" />
    </svg>
  </Icon>
);

const mapTypeToColor = type => {
  const map = {
    Object: '#212121',
    Array: '#212121',
    Number: '#1C00CF', // 'rgb(28, 0, 207)',
    String: '#C41A16', // 'rgb(196, 26, 22)',
    Undefined: '#212121',
    Null: '#808080',
    Boolean: 'rgb(13, 34, 170)',
    Function: '#212121'
  };

  return map[type];
};

const Name = styled.span`
  color: rgb(136, 19, 145);
`;

const Value = styled.span`
  color: ${props => mapTypeToColor(props.type)};
`;

const NameAndValue = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(33,33,33);
  
  margin-top: 1px;
  line-height: 15px;
`;

const Root = styled.ol`
  list-style-type: none;
  
  color: #000;
  line-height: normal;
  font-size: 11px;
  font-family: "Fira Code Retina", "Fira Code", Menlo, monospace;
  cursor: default;
  padding-left: 12px;
  
  // TODO: вынести plainText в отдельный компонент
  ${props => props.plainText && `
    white-space: pre-wrap;
    overflow-x: auto;
  `}
`;

class Json extends React.Component {
  constructor(props) {
    super(props);
    // раскрываем root ноду (у нее нет indexKey) и закрываем все остальные
    this.state = { ...props, isClosed: !!props.indexKey };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.stopPropagation();

    this.setState({ isClosed: !this.state.isClosed });
  }

  render() {
    const { indexKey, dataObject, isClosed } = this.state;
    const type = getType(dataObject);
    let typeValue = getComputedTypeOrValue(dataObject, isClosed);

    if (type === 'Object') {
      typeValue = toJson(dataObject);
    }

    if (this.props.plainText) {
      return (
        <Root>{JSON.stringify(dataObject, null, 2)}</Root>
      );
    }

    const Icon = isClosed ? ClosedIcon : OpenIcon

    return (
      <Root>
        <NameAndValue onClick={this.clickHandler}>
          <Icon hidden={Object.isSealed(dataObject)} />

          {/* Не выводим indexKey, если его нет (у rootNode) */}
          {!!indexKey && <Name>{indexKey}</Name>}
          {!!indexKey && ': '}

          <Value>{typeValue}</Value>
        </NameAndValue>

        {!isClosed &&
        !Object.isSealed(dataObject) &&
        Object.keys(dataObject)
          .sort(Number)
          .map(key => (
            <Json key={key} indexKey={key} dataObject={dataObject[key]} />
          ))}
      </Root>
    );
  }
}

const eq = ': ';
const sep = ', ';

const JsonString = styled.span`
  color: #565656;
`;

const toJson = obj => (
  <JsonString>
    {'{'}
    {!Object.isSealed(obj) &&
    Object.keys(obj)
      .sort(Number)
      .map(key => [
        <Name key='name'>{key}</Name>,
        eq,
        <Value key='value' type={getType(obj[key])}>{JSON.stringify(obj[key])}</Value>
      ])
      .reduce((a, b) => [a, sep, b])}
    {'}'}
  </JsonString>
);

export default Json;
