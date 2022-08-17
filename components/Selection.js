import React from "react";

const Selection = () => {
  return (
    <div className="px-8">
      <ul className="hidden sm:block bg-gray-100 sm:flex flex-wrap list-reset mt-0 px-0 px-2 px-8">
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/books/"
            className="border-grey-400 border text-gray-600 rounded block text-md glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2 bg-gray-300 text-gray-200"
          >
            New &amp; Forthcoming
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/genre/fiction/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Fiction
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/genre/literature/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Literature
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/genre/poetry/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Poetry
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/genre/theater/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Theater
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/series/christine-burgin/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Christine Burgin
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/series/pamphlets/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Pamphlets
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/series/pearls/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Pearls
          </a>
        </li>
        <li className="block sm:inline-block my-8 sm:mr-2">
          <a
            href="/series/storybook-nd/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            Storybook ND
          </a>
        </li>
        <div className="flex-auto-l"></div>
        <li className="block sm:inline-block my-8">
          <a
            href="/book/"
            className="border-grey-400 border text-gray-600 rounded block text-sm glow hover:bg-gray-700 hover:text-white no-underline px-4 py-2"
          >
            All Titles
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Selection;
