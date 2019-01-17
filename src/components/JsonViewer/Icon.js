import React from 'react';
import styled from 'styled-components';

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

export const ClosedIcon = ({hidden}) => (
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

export const OpenIcon = ({hidden}) => (
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

export default Icon
