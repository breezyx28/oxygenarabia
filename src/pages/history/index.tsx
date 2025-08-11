// import { Svg } from "../../components/icons";
import Jumbotrun from "../../components/pages/Jumbotrun";
import { Link } from "react-router-dom";
import HistoryItem from "./HistoryItem";

const history = () => {
  return (
    <>
      <Jumbotrun pageName={"History Timeline"} />
      <section className="section-container flex flex-col justify-around">
        <div className="container md:px-0 px-6 flex flex-col gap-y-2">
          <div className="section-text">
            Our <span className="text-primary">History</span>
          </div>
          <span className="ml-4 text-slate-500 font-semibold capitalize">
            our impressive history timeline
          </span>
        </div>
        <div className="container w-full px-6 py-12 mx-auto flex justify-center">
          <ol className="relative border-l border-gray-200">
            <HistoryItem
              link="/products/central"
              name="Centeral"
              releaseDate="Released on January 13th, 2022"
              description="Electronic Phonebook"
            >
              <Link
                to="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary"
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
              </Link>
              <Link
                to="#"
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
              </Link>
            </HistoryItem>
            <HistoryItem
              link="/products/kpsolla"
              name="Kpsolla"
              releaseDate="Released on December 7th, 2021"
              description="Kpsolla educational platform and professional training"
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="/products/solar"
              name="Electricity/Solar"
              releaseDate="Released on Septemper 2nd, 2021"
              description="Utilizing IoT in solar energy production includes sensors
              attached to the transmission, generation, and distribution
              equipment to observe and manage businesses from a distance
              without physical contact."
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="/products/education"
              name="Education"
              releaseDate="Released on Septemper 3nd, 2020"
              description="
              Access to education is a right, not a privilege.
              current eLearning solution plays a pivotal role in access to education resources. “However! ………..”“More than 50% of populations in Africa do not broadband internet”
              In Oxygen, we developed a very successful offline learning solution (without internet) that enable learners to attend course sessions, without need to have internet and high end terminal (smart phone/PC)
              Currently we’ve more than 1Million subscribers in different learning topics (Italian language, English, French, etc. …)
              "
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="/products/prm"
              name="Advertisment"
              releaseDate="Released on February 21, 2019"
              description="
              In Oxygen, we developed a cloud based ERP systems customized for the medical sector. The service of the system (ODENTS) offer as a service for small and medium clinics and hospital with monthly or yearly subscription"
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="/products/prm"
              name="Medicine PRM Solution"
              releaseDate="Released on January 4th, 2015"
              description=""
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="/products/erp"
              name="Advertisment"
              releaseDate="Released on January 17, 2013"
              description="In Oxygen, we developed a cloud based ERP systems customized for the medical sector."
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="/products/tel"
              name="Telecommunication"
              releaseDate="Released on February 9th, 2012"
              description="We have over 10 years strategizing and developing innovative digital experiences for corporates and consumers. Oxygen present several SMS and IVR services in different categories including news sports entertainment human development"
            >
              {""}
            </HistoryItem>
            <HistoryItem
              link="#"
              name="Establishment"
              releaseDate="Released on January 27, 2012"
              description="Since establishment in 2012, it has achieved many successes and continued rapid growth ever since that date."
            >
              {""}
            </HistoryItem>
          </ol>
        </div>
      </section>
    </>
  );
};

export default history;
