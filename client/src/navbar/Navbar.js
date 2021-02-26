import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/ui/Button';
import CommissionButton from './CommissionButton';

const NavbarLink = ({ children, to }) => (
  <NavLink exact className="m-4 p-1" activeClassName="border-b border-blue-400" to={to}>
    {children}
  </NavLink>
);

export default function Navbar() {

  return (
    <nav className="w-screen mb-14 px-14 h-16 shadow-xl flex justify-between items-center">
      <div>
        <NavbarLink to="/">Accueil</NavbarLink>
        <NavbarLink to="/non">Les biens en vente</NavbarLink>
        <NavbarLink to="/real-estates/add">Ajouter un bien</NavbarLink>
        <NavbarLink to="/oui">Mes ventes</NavbarLink>
      </div>
      <aside>
        <CommissionButton/>
      </aside>
    </nav>
  );
}
