import React from "react"
import Header from "../components/header"

import "../styles/index.scss"

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
