import React from "react";

const Search = () => {
  return (
    <div id="filter" className="page-single_default_padding">
      <div className="mb-8">
        <div className="sm:flex flex-wrap items-center mt-16">
          <h1 className="sm:inline-block">New &amp; Forthcoming Books</h1>
          <div className="border-b border-black-10 sm:inline-block sm:ml-8 w-full sm:w-2/5">
            <input
              className="border-0 border-black-10 bg-no-repeat bg-left bg-grey-200 inline-block text-base sm:text-2xl text-grey-600 input-reset pr-2 pl-8 pr-4 py-2 search w-full"
              type="search"
              placeholder="Type to Filter by name or keyword"
              name="q"
              autoComplete="off"
            //   style="background-image:url(/icons/icon-search.png);background-size:19px 19px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
