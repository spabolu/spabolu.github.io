import * as React from 'react'
import Emoji from 'a11y-react-emoji'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <>
      <SEO title='Home' />
      <h3 className='description'> Hello! I am Saketh <Emoji symbol='🙋🏽‍♂️' />. I am a high school senior, and currently the founder of CodeBetas. I’ve previously interned at Chandler PD, created the website for YACU.org, and won Best-in-Show at CodeDay hackathon twice! I've been coding for about {Math.floor((new Date().getTime()) / 1000 / 60 / 43800 / 12) - Math.floor((new Date('2014').getTime()) / 1000 / 60 / 43800 / 12)} years and recipient of the ASU's Medallion Scholarship Program! Lover of <Emoji symbol='🚘' />, <Emoji symbol='🐕' />, <Emoji symbol='📸' />, <Emoji symbol='👨🏽‍💻' />, <Emoji symbol='🍣' /> and <Emoji symbol='🥗' />. Lifelong personal finance nerd <Emoji symbol='💵' /> and an early investor in the S&amp;P 500 <Emoji symbol='📈' />. I <i>depend</i> on the Internet. I strive to live with intention &amp; act with solicitude. I can juggle <Emoji symbol='🤹🏽‍♂️' />! My career goal is to attain the '4-Hour Workweek.' Until then, in my free time, I enjoy <Emoji symbol='🚵🏽‍♂️' />, <Emoji symbol='🧗🏽‍♂️' />, reading <Emoji symbol='📖' />, and exploring <i>exciting</i> technologies. </h3>
      <h4><a href='mailto:hello@sakethpabolu.com'>Contact Me <Emoji symbol='📧' className='dotted' /></a></h4>
    </>
  )
}

export default IndexPage