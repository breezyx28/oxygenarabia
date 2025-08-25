import { Svg } from "../../components/icons";
import LogoBase from "../../components/logo/LogoBase";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="md:p-10 p-6 bg-gray-50 text-slate-800 divide-slate-600 divide-y">
      <div className="footer pb-4">
        <div>
          <LogoBase />
          <p className="text-md font-semibold">
            Oxygen Technology Co.
            <br />
            We Inovate For People
          </p>
          <div className="flex gap-x-2 mt-4 text-white">
            <Link
              to={"https://www.facebook.com/Oxygenict/"}
              className="rounded-full p-2 bg-slate-800"
            >
              {Svg.facebook}
            </Link>
            <Link
              to={"https://twitter.com/oxygen_ict"}
              className="rounded-full p-2 bg-slate-800"
            >
              {Svg.twitter}
            </Link>
            <Link
              to={"https://www.linkedin.com/company/oxygen-technologies-ltd/"}
              className="rounded-full p-2 bg-slate-800"
            >
              {Svg.linkedIn}
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Education</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Telecommunications</a>
          <a className="link link-hover">Digital Services</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/#about" className="link link-hover">
            About us
          </a>
          <a href="/#contact-us-section" className="link link-hover">
            Contact
          </a>
          <a href="/team" className="link link-hover">
            Our Team
          </a>
          <a href="/events" className="link link-hover">
            Events
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="copyrights flex flex-col justify-center items-center pt-4">
        <span className="text-md">Powered by Oxygen Ict LLc</span>
        <span className="text-md">
          All rights reserved ©{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
