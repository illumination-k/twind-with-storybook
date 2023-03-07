import React from 'react';

import { tw } from "@twind/core"

export const Button = ({}) => {
  return (
    <button
      type="button"
      className={tw("bg-black text-white text-3xl text-sans")}
    >
      Button
    </button>
  );
};
