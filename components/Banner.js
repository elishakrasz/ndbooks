import React from "react";

const Banner = () => {
  return (
    <div
      className="mx-auto flex-col lg:flex h-1/2 justify-end max-w-7xl w-full font-body"
      data-rellax-speed="1"
    >
      <div className="px-8 py-16">
        <div>
          <a
            href="/"
            className="no-underline opacity-50 color-inherit dim hover:opacity-100 hover:text-white"
          >
            New Directions
          </a>
          <h1 className="mb-0 text-4xl leading-tight color-inherit sm:text-5xl">
            New &amp; Forthcoming Books
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
