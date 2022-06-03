import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Colors from '../../constants/theme';
import { breakpoint, breakpoint_2, dynamicWidth, staticWidth } from './People.UI';

type RowProps = { $special?: boolean }
type ColumnProps = { $width?: number, $responsive?: boolean };

export const Table = styled.div`
  box-sizing: border-box;
  width: ${dynamicWidth};
  max-width: ${staticWidth};
  opacity: 0.96;
  @media (max-width: ${breakpoint}) {
    width: 99%;
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: ${({ $special }) => $special ? Colors.secondary : Colors.primary};
  &:hover {
    opacity: 0.9;
  }
`;

export const HeaderRow = styled(Row)`
  background-color: ${Colors.light};
  &:hover {
    opacity: 1;
  }
`;

export const Column = styled.div<ColumnProps>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: ${({ $width }) => $width ? `${$width}px` : '100%'};
  @media (max-width: ${breakpoint}) {
    padding: 0 5px;
    width: 100%;
  }
  @media (max-width: ${breakpoint_2}) {
    ${({ $responsive }) => $responsive && `display: none;`
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  height: 100%;
  padding-left: 15px;
  @media (max-width: ${breakpoint_2}) {
    padding-left: 0;
  }
`;

export const LoadingBox = styled(Box)`
  justify-content: center;
  padding-left: 0;
`;

export const LinkBox = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  color: ${Colors.text};
  @media (max-width: ${breakpoint}) {
    font-size: 12px;
  }
`;

export const TitleIcon = styled(FontAwesomeIcon)`
  height: 14px;
  margin-left: 16px;
  color: ${Colors.primary};
  &:hover {
    cursor: pointer;
  }
`;


export const MoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 38px;
  width: ${dynamicWidth};
  max-width: ${staticWidth};
  border-color: ${Colors.primary};
  background-color: ${Colors.primary};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  @media (max-width: ${breakpoint}) {
    width: 99%;
  }
`;

export const MoreIcon = styled(FontAwesomeIcon)`
  height: 22px;
  color: ${Colors.text};
  @media (max-width: ${breakpoint}) {
    height: 18px;
  }
`;
