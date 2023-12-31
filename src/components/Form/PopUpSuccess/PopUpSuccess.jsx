import React, { useState, useEffect, useCallback } from 'react';
import {
  CloseSvgBtn,
  ContactMessage,
  PopUpSuccessContainer,
  SuccessBtn,
  SuccessMessage,
  Overlay,
} from './PopUpSuccess.styled';
import { useTranslation } from 'react-i18next';

export const PopUpSuccess = ({ handlePopUp }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenOverlay, setIsOpenOverlay] = useState(true);

  const handleClosePopup = useCallback(() => {
    setIsOpen(false);
    setIsOpenOverlay(false);
    handlePopUp();
  }, [handlePopUp]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape' && isOpen) {
        handleClosePopup();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown); // Видалити обробник подій при виході з компонента
    };
  }, [isOpen, handleClosePopup]);
  return (
    isOpen && (
      <>
        {isOpenOverlay && <Overlay onClick={handleClosePopup} />}
        <PopUpSuccessContainer onClick={handleClosePopup}>
          <CloseSvgBtn type="button" onClick={handleClosePopup} />
          <SuccessMessage>{t('form-request')}</SuccessMessage>
          <ContactMessage>{t('form-contact')}</ContactMessage>
          <SuccessBtn type="button" onClick={handleClosePopup}>
            <p className="btn-text">{t('form-perfect')}</p>
          </SuccessBtn>
        </PopUpSuccessContainer>
      </>
    )
  );
};
