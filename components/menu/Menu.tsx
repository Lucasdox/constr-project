
import React, { FC } from 'react';
import Logo from './Logo';
import { MenuIcon } from '@heroicons/react/solid';

import MenuButton from './MenuButton';

const MenuBox: FC = ({children}) => (
  <nav className="bg-gray-100">
    <div className="px-4 mx-auto flex items-center justify-between border border-red-400 font-Poppins">
      {children}
    </div>
  </nav>
)

const Menu: FC = () => {
  return (
    <MenuBox>
        <div className="flex space-x-4 py-5">
          <Logo />
          <LeftNavBar className='hidden sm:flex'/>
        </div>
        <SecondNavBar className='hidden sm:flex'/>
        <HamburgerIcon />
    </MenuBox>
  );
};

const LeftNavBar: FC<HiddenProps> = ({ className }) => (
  <div className={`flex space-x-3 items-center ${className}`}>
    <MenuButton link="/diario">Diário de obras</MenuButton>
    <MenuButton link="/pricing">Preços</MenuButton>
  </div>
);

const SecondNavBar: FC<HiddenProps> = ({ className }) => (
  <div className={`flex space-x-4 ${className}`}>
    <MenuButton>Login</MenuButton>
    <MenuButton>Registrar</MenuButton>
  </div>
)

const HamburgerIcon: FC = () => (
  <button className='sm:hidden'>
    <MenuIcon className='h-5 w-5 mr-2 text-blue-400'/>
  </button>
)

interface HiddenProps {
  className?: string
}

export default Menu;
