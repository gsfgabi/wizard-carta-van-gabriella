import React from 'react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onLogout: () => void;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onLogoClick }) => (
  <header className="fixed top-0 left-0 w-full bg-white h-12 flex items-center shadow-md z-50">
    <div className="w-full flex items-center justify-between px-4 sm:px-8 min-w-0">
      <img
        src="/logo.png"
        alt="Plugbank"
        className="h-8 sm:h-10 md:h-12 lg:h-14 cursor-pointer max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px] object-contain flex-shrink-0 transition-all duration-200"
        onClick={onLogoClick}
      />
      <button
        className="flex items-center bg-primary text-white rounded-full px-3 py-1 sm:px-5 font-bold text-base sm:text-lg hover:bg-primaryDark transition flex-shrink-0"
        onClick={onLogout}
        title="Sair"
      >
        <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
      </button>
    </div>
  </header>
);

export default Header;
