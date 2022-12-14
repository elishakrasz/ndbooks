import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="w-full p-4 text-gray-600 bg-gray-100"
        role="contentinfo"
      >
        <div className="flex">
          <div className="w-full mx-auto md:w-1/2 lg:w-2/5">
            <h1 className="pt-0 mt-1 text-4xl text-center text-gray-600 font-brand hover:text-black">
              <a
                href="/"
                className="block pt-8 pb-4 mx-auto text-center text-gray-600 no-underline hover:text-black"
              >
                New Directions Publishing
              </a>
            </h1>
            <div className="pb-8 mx-auto text-center measure">
              <a
                href="https://facebook.com/ndbooks"
                className="facebook inline-block hover:text-gray-600 link-transition no-underline mr-2 lg:pt-0 pt-4"
                title="Facebook no-underline"
              >
                <svg
                //   height="32"
                  className="fill-current h-8 w-8"
                //   style="enable-background:new 0 0 67 67"
                  viewBox="0 0 67 67"
                //   width="32"
                //   xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M28.765 50.32h6.744V33.998h4.499l.596-5.624h-5.095l.007-2.816c0-1.466.14-2.253 2.244-2.253h2.812V17.68h-4.5c-5.405.0-7.307 2.729-7.307 7.317v3.377h-3.369v5.625h3.369V50.32zM33 64C16.432 64 3 50.569 3 34S16.432 4 33 4s30 13.431 30 30S49.568 64 33 64z"
                    // style="fill-rule:evenodd;clip-rule:evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href="https://twitter.com/newdirections"
                className="twitter inline-block hover:text-gray-600 link-transition no-underline mr-2 lg:pt-0 pt-4"
                title="Twitter no-underline"
              >
                <svg
                //   height="32"
                  className="fill-current h-8 w-8"
                //   style="enable-background:new 0 0 67 67"
                  viewBox="0 0 67 67"
                //   width="32"
                //   xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M37.167 22.283c-2.619.953-4.274 3.411-4.086 6.101l.063 1.038-1.048-.127c-3.813-.487-7.145-2.139-9.974-4.915l-1.383-1.377-.356 1.017c-.754 2.267-.272 4.661 1.299 6.271.838.89.649 1.017-.796.487-.503-.169-.943-.296-.985-.233-.146.149.356 2.076.754 2.839.545 1.06 1.655 2.097 2.871 2.712l1.027.487-1.215.021c-1.173.0-1.215.021-1.089.467.419 1.377 2.074 2.839 3.918 3.475l1.299.444-1.131.678c-1.676.976-3.646 1.526-5.616 1.568C19.775 43.256 19 43.341 19 43.405c0 .211 2.557 1.397 4.044 1.864 4.463 1.377 9.765.783 13.746-1.568 2.829-1.673 5.657-5 6.978-8.221.713-1.716 1.425-4.851 1.425-6.354.0-.975.063-1.102 1.236-2.267.692-.678 1.341-1.419 1.467-1.631.21-.403.188-.403-.88-.043-1.781.636-2.033.551-1.152-.402.649-.678 1.425-1.907 1.425-2.267.0-.063-.314.042-.671.233-.377.212-1.215.53-1.844.72l-1.131.361-1.027-.7c-.566-.381-1.361-.805-1.781-.932C39.766 21.902 38.131 21.944 37.167 22.283zM33 64C16.432 64 3 50.569 3 34S16.432 4 33 4s30 13.431 30 30S49.568 64 33 64z"
                    // style="fill-rule:evenodd;clip-rule:evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href="https://instagram.com/ndpublishing"
                className="instagram inline-block hover:text-gray-600 link-transition no-underline mr-2 lg:pt-0 pt-4"
                title="Instagram no-underline"
              >
                <svg
                //   height="32"
                  className="fill-current h-8 w-8"
                //   style="enable-background:new 0 0 67 67"
                  viewBox="0 0 67 67"
                //   width="32"
                //   xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M42.271 26.578v-.006c.502.0 1.005.01 1.508-.002.646-.017 1.172-.57 1.172-1.217.0-.963.0-1.927.0-2.89.0-.691-.547-1.24-1.236-1.241-.961.0-1.922-.001-2.883.0-.688.001-1.236.552-1.236 1.243-.001.955-.004 1.91.003 2.865.001.143.028.291.073.426.173.508.639.82 1.209.823C41.344 26.579 41.808 26.578 42.271 26.578zM33 27.817c-3.384-.002-6.135 2.721-6.182 6.089-.049 3.46 2.72 6.201 6.04 6.272 3.454.074 6.248-2.686 6.321-6.043C39.254 30.675 36.462 27.815 33 27.817zM21.046 31.116v.082c0 4.515-.001 9.03.0 13.545.0.649.562 1.208 1.212 1.208 7.16.001 14.319.001 21.479.0.656.0 1.215-.557 1.215-1.212.001-4.509.0-9.02.0-13.528v-.094H42.04c.411 1.313.537 2.651.376 4.014s-.601 2.631-1.316 3.803-1.644 2.145-2.779 2.918c-2.944 2.006-6.821 2.182-9.946.428-1.579-.885-2.819-2.12-3.685-3.713-1.289-2.373-1.495-4.865-.739-7.451C22.983 31.116 22.021 31.116 21.046 31.116zM45.205 49.255c.159-.026.318-.049.475-.083 1.246-.265 2.264-1.304 2.508-2.557.025-.137.045-.273.067-.409V21.794c-.021-.133-.04-.268-.065-.401-.268-1.367-1.396-2.428-2.78-2.618-.058-.007-.113-.02-.17-.03H20.761c-.147.027-.296.047-.441.08-1.352.308-2.352 1.396-2.545 2.766-.008.057-.02.114-.029.171V46.24c.028.154.05.311.085.465.299 1.322 1.427 2.347 2.77 2.52.064.008.13.021.195.03H45.205zM33 64C16.432 64 3 50.569 3 34S16.432 4 33 4s30 13.431 30 30S49.568 64 33 64z"
                    // style="fill-rule:evenodd;clip-rule:evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="pb-16 py-16 mx-auto text-base leading-normal text-center measure">
              New Directions was founded in 1936, when James Laughlin
              (1914???1997), then a twenty-two-year-old Harvard sophomore, issued
              the first of the New Directions anthologies. ???I asked Ezra Pound
              for ???career advice,?????? Laughlin recalled. ???He had been seeing my
              poems for months and had ruled them hopeless. He urged me to
              finish Harvard and then do ???something??? useful.???
            </div>
          </div>
          <div className="hidden pt-8 sm:flex font-brand lg:w-2/5">
            <ul className="w-full p-0">
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/books/"
                  title="Books page"
                >
                  Books
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/author/"
                  title="Authors page"
                >
                  Authors
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/event/"
                  title="Events page"
                >
                  Events
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/shop/"
                  title="Shop page"
                >
                  Shop
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/the-novel-prize/"
                  title="Prizes page"
                >
                  Prizes
                </a>
              </li>
            </ul>
            <ul className="w-full p-0">
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/article/"
                  title="Blog page"
                >
                  Blog
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/resources/"
                  title="Academics page"
                >
                  Academics
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/catalog/"
                  title="Catalogs page"
                >
                  Catalogs
                </a>
              </li>
              <li className="mb-4 md:text-base lg:text-2xl list-reset">
                <a
                  className="text-gray-600 no-underline dim pointer"
                  href="/about/contact/"
                  title="Contact page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-16">
          <div>
            <a
              className="px-2 px-4 text-xs text-gray-600 no-underline hover:text-black"
              href="https://www.ndbooks.com"
            >
              ?? 2022 New Directions Publishing
            </a>

            <a
              className="px-2 px-4 text-xs text-gray-600 no-underline hover:text-black"
              href="/cookie-policy/"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
            <a
              className="px-2 px-4 text-xs text-gray-600 no-underline hover:text-black"
              href="/privacy-policy/"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              className="px-2 px-4 text-xs text-gray-600 no-underline hover:text-black"
              href="/terms-of-service/"
              title="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
          <a
            className="px-2 px-4 text-xs text-gray-600 no-underline hover:text-black"
            href="https://www.thenewdynamic.com"
          >
            site by the New Dynamic
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
