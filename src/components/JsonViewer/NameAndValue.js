import React from 'react';
import styled from 'styled-components';

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

export const Name = styled.span`
  color: rgb(136, 19, 145);
`;

export const Value = styled.span`
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

export default NameAndValue;
