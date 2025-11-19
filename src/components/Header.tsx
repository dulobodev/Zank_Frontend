import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full h-[120px] sticky top-0 px-[150px] py-0 flex items-center justify-between max-xl:px-[100px] max-lg:px-[80px] max-lg:h-[100px] max-md:px-[50px] max-md:h-[90px] max-sm:px-5 max-sm:h-[80px] z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zank-gray/95 backdrop-blur-md shadow-md' 
          : 'bg-zank-gray'
      }`}
    >
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/fa3b2d9e3593aadf6216494bbd37f396bbb6a5e7?width=100" 
        alt="Zank Logo" 
        className="w-[50px] h-[52px] max-sm:w-10 max-sm:h-[42px] transition-transform duration-300 hover:scale-110" 
      />
      
      <nav className="flex gap-[60px] max-lg:gap-[40px] max-md:hidden">
        {['Home', 'Planos', 'Funcionalidades', 'Contato'].map((item) => (
          <a 
            key={item}
            href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`} 
            className="text-zank-dark text-[21px] font-normal cursor-pointer hover:text-zank-light transition-all duration-300 no-underline relative group max-lg:text-lg whitespace-nowrap"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zank-light group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
        <Link 
          to="/auth?mode=login"
          className="text-zank-dark text-[21px] font-normal cursor-pointer hover:text-zank-light transition-all duration-300 no-underline relative group max-lg:text-lg whitespace-nowrap"
        >
          Login
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zank-light group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link 
          to="/auth?mode=register"
          className="group bg-zank-light text-zank-dark px-[30px] py-[15px] rounded-[25px] text-lg font-semibold hover:bg-zank-dark hover:text-zank-light transition-all duration-300 max-md:px-[20px] max-md:py-[12px] max-md:text-base max-sm:hidden shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 no-underline"
        >
          Cadastre-se
          <div className="w-6 h-6 rounded-full bg-zank-dark flex items-center justify-center group-hover:bg-zank-light transition-all duration-300">
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 20 20" 
              fill="none"
              className="text-zank-light group-hover:text-zank-dark"
            >
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-zank-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-zank-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-zank-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile menu */}
      <nav 
        className={`absolute top-full left-0 w-full bg-zank-gray shadow-lg py-4 px-5 flex flex-col gap-4 md:hidden z-50 transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {['Home', 'Planos', 'Funcionalidades', 'Contato'].map((item) => (
          <a 
            key={item}
            href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`} 
            className="text-zank-dark text-lg font-normal hover:text-zank-light transition-colors duration-300 no-underline"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <Link 
          to="/auth?mode=login"
          className="text-zank-dark text-lg font-semibold hover:text-zank-light transition-colors duration-300 no-underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
        <Link 
          to="/auth?mode=register"
          className="group bg-zank-light text-zank-dark px-[20px] py-[12px] rounded-[25px] text-base font-semibold hover:bg-zank-dark hover:text-zank-light transition-all duration-300 mt-2 flex items-center gap-2 justify-center no-underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Cadastre-se
          <div className="w-5 h-5 rounded-full bg-zank-dark flex items-center justify-center group-hover:bg-zank-light transition-all duration-300">
            <svg 
              width="10" 
              height="10" 
              viewBox="0 0 20 20" 
              fill="none"
              className="text-zank-light group-hover:text-zank-dark"
            >
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
