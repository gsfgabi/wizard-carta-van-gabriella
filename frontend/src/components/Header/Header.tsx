import React from 'react';
import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <header className="w-full bg-white h-12 flex items-center">
    <div className="w-full flex items-center justify-between px-4">
      <img src={logo} alt="Plugbank" className="h-12" />
      <button
        className="bg-primary text-white rounded-full px-4 py-1 font-bold text-lg hover:bg-primaryDark transition"
        onClick={() => {/* lógica de logout */}}
      >
        Sair
      </button>
    </div>
  </header>
);

export default Header;
