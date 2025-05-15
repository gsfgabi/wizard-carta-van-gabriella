import React from 'react';
import logo from '../../assets/logo.png';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onLogout: () => void;
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onLogoClick }) => (
  <header className="w-full bg-white h-12 flex items-center shadow">
    <div className="w-full flex items-center justify-between px-2 sm:px-4 min-w-0">
      <img
        src={logo}
        alt="Plugbank"
        className="h-8 sm:h-10 cursor-pointer max-w-[100px] sm:max-w-[120px] object-contain flex-shrink-0"
        onClick={onLogoClick}
      />
      <button
        className="flex items-center bg-primary text-white rounded-full px-2 py-1 sm:px-4 font-bold text-base sm:text-lg hover:bg-primaryDark transition flex-shrink-0"
        onClick={onLogout}
        title="Sair"
      >
        <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
      </button>
    </div>
  </header>
);

export default Header;
