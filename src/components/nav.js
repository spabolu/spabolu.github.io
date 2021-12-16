import * as React from "react";
import { Link } from "gatsby";

import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h3>
          {" "}
          <Link to="/"> Saketh Pabolu ✨</Link>{" "}
        </h3>
      </div>
      <ul className="underline">
        <li>
          {/* <Link to="/writing"> Writing </Link> */}
          <a href="https://write.as/sakethpabolu" rel="canonical">
            {" "}
            Writing{" "}
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1LVzE9km95FG1ZVxj0WZmbe__ayFPUQPG/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Résumé{" "}
          </a>
        </li>
        <li>
          <a href="https://git.io/JLiMg" rel="noreferrer" target="_blank">
            {" "}
            <FaGithub className="icon" />
            GitHub{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
