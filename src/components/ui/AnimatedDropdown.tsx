import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import GlassEffect from "./GlassEffect";

interface AnimatedDropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({
  isOpen,
  children,
  className = "",
  style = {},
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`fixed z-[9999] ${className}`}
          style={style}
        >
          <GlassEffect className="w-full">
            <div className="bg-white/95 backdrop-blur-md border border-white/20 shadow-xl p-6">
              {children}
            </div>
          </GlassEffect>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default AnimatedDropdown;
