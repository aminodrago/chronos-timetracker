/* eslint-disable no-confusing-arrow */
import styled from 'styled-components2';

export const ProgressBarContainer = styled.div`
  width: 94%;
  position: relative;
`;

export const ProgressBarItem = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || 100}%;
  position: absolute;
  height: 52px;
  justify-content: space-between;
`;

export const ProgressBarFill = styled.div`
  visibility: ${props => props.width === 0 ? 'hidden' : 'visible'};
  width: ${props => props.width || 100}%;
  border-radius: 10px;
  background-color: ${props => props.color};
  position: absolute;
  top: 22px;
  height: 12px;
`;

export const Time = styled.span`
  color: rgba(225, 225, 225, .9);
  font-size: 12px;
  line-height: 23px;
  ${props => props.isHighlighted && `
    color: white;
    font-size: 14px;
  `}
`;

export const TimeLabel = styled.span`
  color: rgba(225, 225, 225, .7);
  font-size: 10px;
`;
