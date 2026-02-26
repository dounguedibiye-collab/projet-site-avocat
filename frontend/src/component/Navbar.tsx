import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      
      <NavbarBrand as={Link} href="/">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Cabinet Avocat Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Cabinet Avocat
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>

        <NavbarLink as={Link} href="/" active>
          Accueil
        </NavbarLink>

        <NavbarLink as={Link} href="/apropos">
          A propos
        </NavbarLink>

        <NavbarLink as={Link} href="/services">
          Services
        </NavbarLink>

        <NavbarLink as={Link} href="/actualites">
          Actualites
        </NavbarLink>

        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>

      </NavbarCollapse>

    </Navbar>
  );
}