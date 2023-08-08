'use client'
import React, { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2.5px] w-5 my-1 bg-h-text transition ease transform duration-100`;
  
  const aDegrees = '45';
  const bDegrees = '45';
  
  // Adjust these pixel values to fine-tune the alignment
  const aTranslate = 'translate-y-[5px] translate-x-[.3px]';
  const bTranslate = '-translate-y-[5px] translate-x-[.3px]';

  return (
    <button
      className="flex flex-col h-12 w-12 p-2 border-[3px] border-h-text rounded-full justify-center items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? `rotate-${aDegrees} ${aTranslate}`
            : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? `-rotate-${bDegrees} ${bTranslate}`
            : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
