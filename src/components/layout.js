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
        <meta name="description" content="Hello! I am Saketh 👋🏼. I’m a high school senior, and currently the founder of CodeBetas. I’ve previously interned Chandler PD, created YACU website, and won Best-in-Show at CodeDay hackathon twice! I am the co-founder of Arizona YACU chapter to engage in politics and promote bipartisanship. Lover of 🚘, 🐕, 📷, 👨🏼‍💻, 🌮 and 🥗. Lifelong personal finance nerd 💵 and early investor in the S&amp;P 500 📈. I depend on the Internet. I strive to live with intention &amp; act with compassion. I can juggle 🤹🏼‍♂️! My career goal is to attain FI/RE. Until then, in my free time, I enjoy 🚵🏼‍♂️, 🧗🏼‍♂️, playing 🎸 or 🎹, and exploring exciting technology." />
        <meta property="og:site_name" content="Saketh Pabolu" />
      </Helmet>

      <Header />
      {props.children}
    </div>
  )
}
