import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../../assets/main-background.jpg';
import Colors from '../../constants/theme';

export const staticWidth = '1080px';
export const dynamicWidth = '96%';

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
`;

export const SearchContainer = styled.div`
  width: ${dynamicWidth};
  max-width: ${staticWidth};
`;

export const SearchInput = styled.input`
  padding: 7px 10px;
  margin: 20px 0;
  border: 1px solid ${Colors.light};
  outline: none;
  ::placeholder {
    font-size: 15px;
    color: ${Colors.textFade};
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: -24px;
  height: 14px;
  color: ${Colors.textFade};
  opacity: 0.6;
`;