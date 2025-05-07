import React from 'react';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <header className="w-full bg-white h-20 flex items-center shadow-md z-50">
    <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6">
      <img src={logo} alt="Plugbank" className="h-10" />
      <button className="bg-primary text-white rounded-full px-6 py-2 font-semibold hover:bg-primaryDark transition">
        Sair
      </button>
    </div>
  </header>
);

export default Header; 