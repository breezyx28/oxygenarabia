import React from "react";
import { Svg } from "../../components/icons";
import historyAnimation from "../../helper/animations/historyAnimation";
import { Link } from "react-router-dom";

const History = () => {
  React.useEffect(() => {
    historyAnimation();
  }, []);
  return (
    <section className="section-container flex flex-col justify-around">
      <div className="container px-6 flex flex-col gap-y-2">
        <div className="section-text">
          Our <span className="text-primary">History</span>
        </div>
        <span className="ml-4 text-slate-500 font-semibold capitalize">
          our impressive history timeline
        </span>
      </div>
      <div className="container w-full px-6 py-12 mx-auto flex justify-center">
        <ol className="relative history-animation fade-bottom border-l border-gray-200 ">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-primary "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <Link to={"/products/central"} className="link link-hover">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                Centeral{" "}
              </h3>
            </Link>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              Electronic Phonebook
            </p>
            <div className="flex gap-x-4 items-center">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary "
              >
                <svg
                  className="w-4 h-4 mr-2"
                  width={68}
                  height={68}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.016 1.646a.5.5 0 0 1 .708 0l1.105 1.106A5.621 5.621 0 0 1 11.647 2h.706a5.62 5.62 0 0 1 2.82.753l1.107-1.107a.5.5 0 1 1 .707.708l-.984.984A5.635 5.635 0 0 1 18 7.648a.353.353 0 0 1-.353.352H6.353A.353.353 0 0 1 6 7.647c0-1.728.776-3.275 2-4.31l-.984-.983a.5.5 0 0 1 0-.708ZM10.5 5.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3.724.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M4 8.947a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Z" />
                  <path d="M7 8.947a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H7Z" />
                  <path d="M19.21 9.947a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0v-6Z" />
                  <path d="M7.793 21a.293.293 0 0 0-.293.294v.206a1.75 1.75 0 1 0 3.5 0v-.206a.293.293 0 0 0-.293-.294H7.793Z" />
                  <path d="M13 21.294c0-.163.131-.294.293-.294h2.913c.163 0 .294.131.294.294v.206a1.75 1.75 0 1 1-3.5 0v-.206Z" />
                </svg>{" "}
                Android App
              </a>
              <a
                href={"#"}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary "
              >
                <svg
                  className="w-4 h-4 mr-2"
                  width={68}
                  height={68}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.703 5.616c.03-.905.278-2.237 1.145-3.112.805-.813 1.785-1.209 2.395-1.39a.347.347 0 0 1 .45.353c-.04.866-.269 2.158-.856 2.85-.554.652-1.444 1.516-2.75 1.662a.348.348 0 0 1-.384-.363Z" />
                  <path d="M13.937 22.17c.627.24 1.26.482 1.833.482 1.227 0 4.798-2.83 4.926-5.768a.4.4 0 0 0-.215-.36c-.908-.508-2.392-1.774-2.443-3.615-.06-2.146 1.017-3.85 1.832-4.555.184-.159.247-.439.083-.617-.742-.81-2.234-1.925-3.596-1.898-.991.02-1.884.39-2.65.706-.587.243-1.1.455-1.526.455-.403 0-.887-.21-1.443-.453-.748-.326-1.626-.708-2.61-.708C6.304 5.84 2.7 7.352 2.7 13.19c0 3.096 3.195 9.544 5.892 9.462.582 0 1.204-.24 1.822-.48.608-.236 1.211-.47 1.767-.47.537 0 1.143.233 1.756.468Z" />
                </svg>{" "}
                IOS App
              </a>
            </div>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-primary "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <Link to={"/products/kpsolla"} className="link link-hover">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                Kpsolla
              </h3>
            </Link>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              Released on December 7th, 2021
            </time>
            <p className="text-base font-normal text-gray-500 ">
              Kpsolla educational platform and professional training
            </p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white ">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-primary "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <Link to={"/products/solar"} className="link link-hover">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                Electricity/Solar
              </h3>
            </Link>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              Released on Septemper 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500  md:max-w-[400px] max-w-[200px]">
              Utilizing IoT in solar energy production includes sensors attached
              to the transmission, generation, and distribution equipment to
              observe and manage businesses from a distance without physical
              contact.
            </p>
          </li>
        </ol>
      </div>
      <div className="flex items-center justify-center">
        <Link
          to={"/history"}
          className="link gap-x-1 hover:gap-x-3 duration-200 ease-in text-slate-700 flex items-center"
        >
          There is more <span>{Svg.rightArrow}</span>
        </Link>
      </div>
    </section>
  );
};

export default History;
