import React, { useState, useRef, useEffect } from 'react';
import { ClockIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { FaUser } from 'react-icons/fa';

interface HeaderProps {
  onLogout: () => void;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onLogoClick }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Pega os dados do usuário do localStorage
  const userName = localStorage.getItem('user_name') || '';
  const companyName = localStorage.getItem('company_name') || '';

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
    <header className="fixed top-0 left-0 w-full bg-white h-14 sm:h-16 flex items-center shadow-md z-50">
      <div className="w-full flex items-center justify-between px-3 sm:px-4 md:px-8">
        <img
          src="/logo.png"
          alt="Plugbank"
          width={120}
          height={48}
          className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto cursor-pointer object-contain"
          onClick={onLogoClick}
        />
        <div className="relative" ref={menuRef}>
          <button
            className="flex items-center justify-center bg-[#8D44AD] text-white rounded-full h-10 w-10 sm:h-12 sm:w-12 hover:bg-[#7d379c] transition-colors duration-200 shadow-lg border-2 border-white"
            onClick={() => setOpen((v) => !v)}
            title="Usuário"
            type="button"
            aria-expanded={open}
            style={{ padding: 0 }}
          >
            <FaUser size={20} className="sm:w-7 sm:h-7" color="#fff" style={{ filter: 'drop-shadow(0 1px 2px #0008)' }} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 sm:mt-3 w-48 sm:w-56 bg-white rounded-2xl shadow-xl z-50 overflow-hidden animate-fade-in border border-[#ececec] transition-all duration-200 ease-in-out" style={{ minWidth: 200, boxShadow: '0 8px 32px 0 rgba(141,68,173,0.10)' }}>
              <div className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 bg-white">
                <span className="block text-xs font-semibold text-[#8D44AD] tracking-widest uppercase opacity-80 select-none">Usuário</span>
                <div className="mt-1 text-sm text-black font-bold">{userName}</div>
                <div className="text-xs text-gray-600">{companyName}</div>
              </div>
              <div className="h-px bg-[#ececec] mx-3 sm:mx-4" />
              <button
                className="w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 text-[#8D44AD] font-normal bg-white transition-all duration-200 ease-in-out text-sm sm:text-base outline-none group rounded-none focus:outline-[#8D44AD] focus:outline-2 focus:z-10 hover:bg-[#8D44AD] hover:text-white focus:bg-[#8D44AD] focus:text-white"
                onClick={() => { setOpen(false); onLogout(); }}
                tabIndex={0}
                style={{ borderRadius: 0 }}
              >
                <ArrowRightStartOnRectangleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#8D44AD] group-hover:text-white group-focus:text-white transition-colors" style={{ minWidth: 16 }} />
                <span>Sair</span>
              </button>
              <div className="pb-2" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
