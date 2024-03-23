import React, { useState } from 'react';

export const useModal = (initialValue: boolean = false) => {
  const [modal, setModal] = useState<boolean>(initialValue || false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  return { modal, toggleModal, closeModal, openModal };
};
