import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[120px] relative bg-[#E8E8E8] px-[150px] py-0 flex items-center justify-between max-md:px-[50px] max-sm:px-5">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/fa3b2d9e3593aadf6216494bbd37f396bbb6a5e7?width=100" 
        alt="Zank Logo" 
        className="w-[50px] h-[52px] max-sm:w-10 max-sm:h-[42px]" 
      />
      
      <nav className="flex gap-[60px] max-md:hidden">
        <a href="#home" className="text-[#204749] text-[21px] font-normal cursor-pointer hover:opacity-80 transition-opacity">
          Home
        </a>
        <a href="#planos" className="text-[#204749] text-[21px] font-normal cursor-pointer hover:opacity-80 transition-opacity">
          Planos
        </a>
        <a href="#funcionalidades" className="text-[#204749] text-[21px] font-normal cursor-pointer hover:opacity-80 transition-opacity">
          Funcionalidades
        </a>
        <a href="#contato" className="text-[#204749] text-[21px] font-normal cursor-pointer hover:opacity-80 transition-opacity">
          Contato
        </a>
        <a href="#login" className="text-[#204749] text-[21px] font-normal cursor-pointer hover:opacity-80 transition-opacity">
          Login
        </a>
      </nav>
      
      <button className="hover:opacity-90 transition-opacity">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2981d6420cfa6804794dcfbe3199c353449eb764?width=406" 
          alt="Começar agora" 
          className="w-[203px] h-[59px] rounded-[25px] max-md:w-[150px] max-md:h-[45px] max-sm:w-[120px] max-sm:h-10 cursor-pointer" 
        />
      </button>
    </header>
  );
};

export default Header;
