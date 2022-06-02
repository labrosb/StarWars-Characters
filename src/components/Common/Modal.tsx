import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Overlay, ModalContent, CloseButton, CloseIcon } from './Modal.UI';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  const onContentClick = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent
        onClick={onContentClick}
        {...{ isOpen, onClose }}
      >
        <CloseButton>
          <CloseIcon icon={faXmark} />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
}

export default Modal;
