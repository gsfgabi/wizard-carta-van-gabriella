import React, { useState, useRef, useEffect } from 'react';
import { UserIcon, ClockIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onLogout: () => void;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onLogoClick }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white h-16 flex items-center shadow-md z-50">
      <div className="w-full flex items-center justify-between px-4 sm:px-8">
        <img
          src="/logo.png"
          alt="Plugbank"
          width={120}
          height={48}
          className="w-24 sm:w-32 md:w-40 h-auto cursor-pointer object-contain"
          onClick={onLogoClick}
        />
        <div className="relative" ref={menuRef}>
          <button
            className="flex items-center justify-center bg-[#8D44AD] text-white rounded-full h-10 w-10 hover:bg-[#7d379c] transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
            title="Usuário"
            type="button"
            aria-expanded={open}
          >
            <UserIcon className="h-6 w-6 text-white" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-[#8D44AD] border border-[#7d379c] rounded-lg shadow-xl z-50 overflow-hidden animate-fade-in">
              <a
                href="/historico"
                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#7d379c] transition-colors"
                onClick={() => setOpen(false)}
              >
                <ClockIcon className="h-5 w-5 text-white" />
                <span>Histórico</span>
              </a>
              <button
                className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#7d379c] transition-colors"
                onClick={() => { setOpen(false); onLogout(); }}
              >
                <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-white" />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
