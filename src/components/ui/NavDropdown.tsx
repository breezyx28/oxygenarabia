import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { MagicCard } from "./magic-card";

interface MenuItem {
  text: string;
  href: string;
  icon: LucideIcon;
  customClass?: string;
}

interface NavDropdownProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  menuItems: MenuItem[];
  className?: string;
  isAtTop?: boolean;
  gridCols?: number;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  isOpen,
  onToggle,
  menuItems,
  className = "",
  isAtTop = true,
}) => {
  return (
    <li
      className={`relative duration-300 ease-in font-semibold text-base cursor-pointer transition-colors ${
        isAtTop ? "text-white" : "text-foreground"
      } ${className}`}
      onClick={onToggle}
    >
      <span className="upper-nav-link-menu font-[500] text-sm gap-1 flex items-center">
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        <span className="upper-nav-link leading-[1.5rem]">{label}</span>
      </span>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed max-w-[400px] w-full z-[9999]"
              style={{
                top: "100px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <MagicCard gradientColor="#4aa5fb55">
                <div className="bg-white/50 backdrop-blur-lg border border-white/20 shadow-xl rounded-md p-6">
                  <div className={`grid grid-cols-2 gap-6`}>
                    {menuItems.map((item, index) => {
                      return (
                        <a
                          key={index}
                          className={`flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-white rounded-md transition-colors ${
                            item.customClass || ""
                          }`}
                          href={item.href}
                        >
                          {React.createElement(item.icon, {
                            className: "h-4 w-4 text-primary",
                          })}
                          {item.text}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </li>
  );
};

export default NavDropdown;
