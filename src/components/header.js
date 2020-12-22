import React from "react"
import { Link } from "gatsby"

import headerStyle from "./header.module.scss"

export default function Header() {
  return (
    <header>
      <nav>
        <div className={headerStyle.title}>
          <h3> <Link to="/"> Saketh Pabolu </Link> </h3>
        </div>
        <ul className="underline">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/writing"> Writing </Link>
          </li>
          <li>
            <a href="https://bit.ly/3nDzVq6" rel="noreferrer" target="_blank"> Résumé </a>
          </li>
          <li>
            <Link to="/photo"> Photography </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
