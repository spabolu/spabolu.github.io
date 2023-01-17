import React from "react";
import PortfolioItem from "./PortfolioItem";

export const PortfolioItems = [
  {
    title: "Courseer",
    imgURL: "/assets/courseer-card.png",
    stack: ["NextJS", "Firebase", "Stripe"],
    link: "https://courseer.co/",
  },
  {
    title: "Just Stock Price",
    imgURL: "/assets/juststockprice-card.png",
    stack: ["HTML", "JavaScript", "CSS"],
    link: "https://juststockprice.netlify.app/",
  },
];

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div
        className={`grid grid-cols-1 md:grid-cols2 
        ${PortfolioItems.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}
        gap-4`}
      >
        {PortfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            imgURL={item.imgURL}
            stack={item.stack}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
