import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/Sidebar';
import { TopNav } from '../components/topnav/TopNav';
import '../layout/main-layout.scss';

export const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <Sidebar />
      <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
        <div className="main__content">
          <TopNav onDarkModeToggle={handleDarkModeToggle} /> {/* Passa a função para o TopNav */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;