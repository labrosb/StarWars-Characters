import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Colors from '../../constants/theme';

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 20% auto;
  padding: 20px 50px;
  background-color: ${Colors.secondary};
  border: 6px solid ${Colors.primary};
  border-radius: 6px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  padding: 8px 12px 14px 20px;
  background-color: ${Colors.primary};
  border-bottom-left-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  color: ${Colors.text};
`;