'use client'
import React, { useState } from "react";

const Hamburger = ({isOpen, toggleMenu}) => {
  const genericHamburgerLine = `h-[2.5px] w-5 my-1 transition ease transform duration-100`;
  
  const aDegrees = '45';
  const bDegrees = '45';
  
  // Adjust these pixel values to fine-tune the alignment
  const aTranslate = 'translate-y-[5px] translate-x-[.3px]';
  const bTranslate = '-translate-y-[5px] translate-x-[.3px]';

  return (
    <button
      className={`flex flex-col h-8 w-8 border-[2px] rounded-full justify-center items-center ${
      isOpen
            ? `border-h-accent`
            : `border-h-text`
        }`}
      onClick={toggleMenu}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? `rotate-${aDegrees} ${aTranslate} bg-h-accent`
            : `bg-h-text`
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? `-rotate-${bDegrees} ${bTranslate} bg-h-accent`
            : `bg-h-text`
        }`}
      />
    </button>
  );
};

export default Hamburger;
