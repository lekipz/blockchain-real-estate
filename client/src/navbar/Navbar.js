import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({children, to}) => (
  <NavLink exact className="m-4 p-1" activeClassName="border-b border-blue-400" to={to}>{children}</NavLink>
)

export default function Navbar() {
  return (
    <div className="w-screen mb-14 pl-14 h-16 shadow-xl flex items-center">
      <NavbarLink to="/">Accueil</NavbarLink>
      <NavbarLink to="/real-estates">Les biens en vente</NavbarLink>
      <NavbarLink to="/real-estates/add">Ajouter un bien</NavbarLink>
      <NavbarLink to="/oui">Mes ventes</NavbarLink>
    </div>
  )
}
