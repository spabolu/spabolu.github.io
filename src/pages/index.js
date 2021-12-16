import * as React from "react";
import SEO from "../components/seo";

import Emoji from "a11y-react-emoji";

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <h3 className="description">
        {" "}
        <Emoji symbol="👋🏼" /> Hi, I'm Saketh! I am an undergraduate at ASU
        studying Computer Science and an incoming intern at SolarSPELL{" "}
        <Emoji symbol="🌤" />. Most recently, I worked as a XR Creative Developer
        for the Learning Futures Collaboratory <Emoji symbol="🕹" />. Looking
        forward to creating an impact in the Python Users Group at ASU as an
        elected officer <Emoji symbol="🐍" />. Recently, I co-created Seemless
        Authentication app at the AWS Hackathon <Emoji symbol="👨🏽‍💻" />. I hustle
        by always working on side projects and receiving guidance from wonderful
        mentors. Lover of <Emoji symbol="🚘" />, <Emoji symbol="🐕" />,{" "}
        <Emoji symbol="🏓" />, <Emoji symbol="📖" />, <Emoji symbol="👨🏽‍💻" />,{" "}
        <Emoji symbol="🍣" /> and <Emoji symbol="🏋🏽‍♂️" />. Lifelong personal
        finance nerd and an early investor in the S&amp;P 500{" "}
        <Emoji symbol="📈" />. I strive to live with intention &amp; act with
        ruth. Oh also, I can juggle <Emoji symbol="🤹🏽‍♂️" />!{" "}
      </h3>

      <h4>
        {" "}
        Grab <Emoji symbol="🧋" /> w/ me by emailing me at{" "}
        <code className="code">spabolu2 at asu dot edu</code>.{" "}
      </h4>
    </>
  );
};

export default IndexPage;
