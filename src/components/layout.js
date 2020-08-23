import React from "react"
import Header from "../components/header"
import { Helmet } from "react-helmet"

import "../styles/index.scss"

export default function Layout(props) {
  return (
    <div>
      <Helmet defer={false} defaultTitle="Saketh Pabolu">
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet" />
        <meta property="og:url" content="https://sakethpabolu.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta name="description" content="Hey! I am Saketh, and I'm a high school senior 🙋🏽‍♂️"/>
        <meta property="og:site_name" content="Saketh Pabolu" />
      </Helmet>

      <Header />
      {props.children}
    </div>
  )
}
