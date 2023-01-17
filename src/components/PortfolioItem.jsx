import React from "react";

function PortfolioItem({ title, imgURL, stack, link }) {
  return (
    <a
      className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-white hover:border-stone-500 dark:hover:border-red-600"
      href={link}
      rel="noreferrer noopener"
      target="_blank"
    >
      <img
        src={imgURL}
        alt="portfoilio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-stone-100">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md dark:border-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
