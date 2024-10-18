"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<AnimatedSubscribeButtonProps> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isEnviado, setIsEnviado] = useState<boolean>(subscribeStatus);

  const handleClick = () => {
    if (!isEnviado) {
      setIsEnviado(true);
      // Reset subscription status after 2 seconds
      setTimeout(() => {
        setIsEnviado(false);
      }, 10000);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isEnviado ? (
        <motion.button
          className="relative flex w-full items-center justify-center overflow-hidden rounded-md bg-white p-[10px] border-[1px] border-black outline outline-1 outline-black"
          initial={{ opacity: 0, scale: 0.95 }} // Add scale effect
          animate={{ opacity: 1, scale: 1 }} // Animate to full scale
          exit={{ opacity: 0, scale: 0.95 }} // Exit animation
          onClick={() => setIsEnviado(false)}
          disabled
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-full cursor-pointer items-center justify-center rounded-md border-[1px] p-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          type="submit"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.95 }} // Add scale effect
          animate={{ opacity: 1, scale: 1 }} // Animate to full scale
          exit={{ opacity: 0, scale: 0.95 }} // Exit animation
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
