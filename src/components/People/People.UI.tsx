import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../../assets/main-background.jpg';
import Colors from '../../constants/theme';

export const staticWidth = '1080px';
export const dynamicWidth = '96%';

export const breakpoint = '768px';
export const breakpoint_2 = '520px';

export const Container = styled.div`
  background: url(${background});
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const Header = styled.h1`
  font-family: star-wars;
  text-align: center;
  margin-top: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  min-width: ${breakpoint};
  @media (max-width: ${breakpoint}) {
    min-width: 99%;
    min-width: ${breakpoint_2};
  }
  @media (max-width: ${breakpoint_2}) {
    min-width: 320px;
  }
`;

export const SearchContainer = styled.div`
  width: ${dynamicWidth};
  max-width: ${staticWidth};
  @media (max-width: ${breakpoint}) {
    width: 99%;
    min-width: 520px;
  }
  @media (max-width: ${breakpoint_2}) {
    min-width: 99%;
  }
`;

export const SearchInput = styled.input`
  padding: 7px 10px;
  margin: 20px 0;
  border: 1px solid ${Colors.light};
  outline: none;
  ::placeholder {
    font-size: 15px;
    color: ${Colors.textFade};
    @media (max-width: ${breakpoint}) {
      font-size: 12px;
    }
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: -24px;
  height: 14px;
  color: ${Colors.textFade};
  opacity: 0.6;
  @media (max-width: ${breakpoint}) {
    height: 12px;
  }
`;