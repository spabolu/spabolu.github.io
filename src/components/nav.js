import * as React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav>
      <div>
        <h3> <Link to="/"> Saketh Pabolu </Link> </h3>
      </div>
      <ul className="underline">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          {/* <Link to="/writing"> Writing </Link> */}
          <a href="https://write.as/sakethpabolu" rel="canonical"> Writing </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/14QukU_ZTdBaQTOtRgMirHPndC2-EguxF/view?usp=sharing" rel="noreferrer" target="_blank"> Résumé </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar