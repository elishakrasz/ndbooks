import React from "react";

const EmailBanner = () => {
  return (
    <div>
      <div className="bg-left font-brand bg-gray-900 text-center sm:text-left text-gray-400 mt-16 px-8 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto color-inherit inline-block text-4xl sm:text-5xl">
            Keep up to date with New&nbsp;Directions
          </div>
          <div className="mx-auto py-16 h-full sm:flex items-center justify-around w-full lg:w-5/6">
            &nbsp;
            <form
              action="https://ndbooks.us8.list-manage.com/subscribe/post?u=94060051763b502e547df0464&amp;amp;id=c885e6f388"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate text-sm flex flex-col lg:flex-row items-center text-left"
              target="_blank"
              rel="noreferrer"
              noValidate=""
            >
              {/* <label
                for="mce-EMAIL"
                className="screen-reader-text clip hide-until-focused"
              >
                Email Address
              </label> */}
              <div className="sm:flex">
                <input
                  type="email"
                  name="EMAIL"
                  className="required border-r border-l border-t bw1-ns border-b b--inherit bg-transparent color-inherit email text-2xl font-brand mw-100 input-reset near-white px-4 py-2"
                  id="mce-EMAIL"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  value="Sign Up"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="border-l border-r border-b border-t-0 sm:border-t bg-transparent color-inherit text-2xl font-brand hover:bg-white hover:text-black px-4 pointer text-center near-white"
                  onClick='ga("send","event",{eventCategory:"newsletter",eventAction:"subscribe"})'
                >
                  Sign Up
                </button>
              </div>
              {/* <div id="mce-responses" className="clear display:none">
                <div
                  className="response"
                  id="mce-error-response"
                 
                ></div>
                <div
                  className="response display:none"
                  id="mce-success-response"
                 
                ></div>
              </div> */}
              {/* <div className="position:absolute;left:-5000px">
                <label for="mc3" className="hidden"></label>
                <input
                  id="mc3"
                  type="text"
                  name="b_0dc2a0f506c935993943cf0a9_b3baf6eece"
                  tabindex="-1"
                />
              </div> */}
            </form>
            <div className="lg:flex items-center">
              {/* &nbsp; */}
              <div className="color-inherit text-2xl text-gray-600 pb-2 lg:pb-0 lg:pr-8 mt-8 sm:mt-0">
                Follow us
              </div>
              <a
                href="https://facebook.com/ndbooks"
                className="facebook inline-block hover:text-gray-600 link-transition no-underline mr-2 lg:pt-0 pt-4"
                title="Facebook no-underline"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/newdirections"
                className="twitter inline-block hover:text-gray-600 link-transition no-underline mr-2 lg:pt-0 pt-4"
                title="Twitter no-underline"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/ndpublishing"
                className="instagram inline-block hover:text-gray-600 link-transition no-underline mr-2 lg:pt-0 pt-4"
                title="Instagram no-underline"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="hidden sm:block absolute color-inherit left-0 mt-32 h-32 ml-16 top-0 opacity-25 fill-current">
            &nbsp;
            <img
              src="/logos/logo-ndbooks-large.svg"
              className="text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBanner;
