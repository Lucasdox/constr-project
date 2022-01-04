import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { OfficeBuildingIcon } from '@heroicons/react/solid';

interface ButtonProps {
  link?: string;
}

const Menu: FC = () => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between border border-red-400">
        <div className="flex space-x-4">
          <Logo />
          <LeftNavBar />
        </div>
        <MenuButton>Login</MenuButton>
        <MenuButton>Registrar</MenuButton>
      </div>
    </nav>
  );
};

const LeftNavBar: FC = () => (
  <>
    <MenuButton link="/">Home</MenuButton>
    <MenuButton link="/diario">Diário de obras</MenuButton>
    <MenuButton>Alo</MenuButton>
  </>
);

const MenuButton: FC<ButtonProps> = ({ children, link }) => (
  <Link href={link || '/'} passHref>
    <button>{children}</button>
  </Link>
);

const Logo: FC = () => (
  <div className="flex items-center justify-center text-3xl font-bold">
    <OfficeBuildingIcon className="h-5 w-5 mr-3" />
    Constr
  </div>
);

export default Menu;
