import React, { FC } from 'react'
import Link from 'next/link';

interface ButtonProps {
  link?: string;
}

const MenuButton: FC<ButtonProps> = ({ children, link }) => (
  <Link href={link || '/'}>
    <a>{children}</a>
  </Link>
);

export default MenuButton