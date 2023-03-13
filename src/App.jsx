/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  return (
    <>
      <Expand
        aria-label="toggle-theme"
        className="fixed p-2 z-10 md:right-10 right-5 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
        toggled={theme}
        toggle={setTheme}
      />

      <Helmet>
        <meta name="theme-color" content={theme && "#1C1917"} />
        <script
          data-goatcounter="https://saketh.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </Helmet>

      <div className="font-mono bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-200 min-h-screen">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          {/* <Contact /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
