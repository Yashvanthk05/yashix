import { useEffect, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const Navbar = () => {
  const getTheme = () => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } else {
      return theme;
    }
  };

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav>
      <p id="banner">Yashix</p>
      {theme === 'light' ? (
        <button
          style={{
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
          }}
          onClick={() => setTheme('dark')}
        >
          <IoMdSunny size={22} color="black" />
        </button>
      ) : (
        <button
          style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}
          onClick={() => setTheme('light')}
        >
          <IoMdMoon size={22} color="white" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
