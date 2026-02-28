import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
} from "flowbite-react";

import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div className="py-6 pt-20"> {/* espace au-dessus */}
      <Navbar
      
        fluid
        className="bg-[#D9D9D9] w-[60%] rounded-[15px] px-12 py-4 shadow-md" 
      > 
        {/* Logo */}
        <NavbarBrand as={Link} href="/">
          <span className="text-xl font-bold text-gray-900">
           LOGO
          </span>
        </NavbarBrand>

       <div className="flex items-center ml-auto space-x-12">

  <Link to="/" className="text-gray-800 font-medium hover:text-black">
    Accueil
  </Link>

  <Link to="/apropos" className="text-gray-800 font-medium hover:text-black">
    À propos
  </Link>

  <Link to="/services" className="text-gray-800 font-medium hover:text-black">
    Services
  </Link>

  <Link to="/actualites" className="text-gray-800 font-medium hover:text-black">
    Actualités
  </Link>

  <Link to="/contact" className="text-gray-800 font-medium hover:text-black">
    Contact
  </Link>

</div>
      </Navbar>
    </div>
  );
}