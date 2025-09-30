import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "@/components/logo/Logo";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="md:p-10 p-6 text-white divide-y bg-primary">
      <div className="footer pb-4">
        <div>
          <Logo />
          <p className="text-md font-semibold">
            {t("footer.companyName")}
            <br />
            {t("footer.tagline")}
          </p>
          <div className="flex gap-x-2 mt-4 text-white">
            <Link
              to={"https://www.facebook.com/Oxygenict/"}
              className="rounded-full p-2 bg-white text-primary"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              to={"https://twitter.com/oxygen_ict"}
              className="rounded-full p-2 bg-white text-primary"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/oxygen-technologies-ltd/"}
              className="rounded-full p-2 bg-white text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">{t("footer.services.title")}</span>
          <a href="/services" className="link link-hover">
            {t("footer.services.education")}
          </a>
          <a href="/services" className="link link-hover">
            {t("footer.services.advertisement")}
          </a>
          <a href="/services" className="link link-hover">
            {t("footer.services.telecommunications")}
          </a>
          <a href="/services" className="link link-hover">
            {t("footer.services.digitalServices")}
          </a>
        </div>
        <div>
          <span className="footer-title">{t("footer.company.title")}</span>
          <a href="/about" className="link link-hover">
            {t("footer.company.aboutUs")}
          </a>
          <a href="/contact" className="link link-hover">
            {t("footer.company.contact")}
          </a>
          <a href="/team" className="link link-hover">
            {t("footer.company.ourTeam")}
          </a>
          <a href="/projects" className="link link-hover">
            {t("footer.company.events")}
          </a>
        </div>
        <div>
          <span className="footer-title">{t("footer.legal.title")}</span>
          <a className="link link-hover">{t("footer.legal.termsOfUse")}</a>
          <a className="link link-hover">{t("footer.legal.privacyPolicy")}</a>
          <a className="link link-hover">{t("footer.legal.cookiePolicy")}</a>
        </div>
      </div>
      <div className="copyrights flex flex-col justify-center items-center pt-4">
        <span className="text-md">{t("footer.poweredBy")}</span>
        <span className="text-md">
          {t("footer.allRightsReserved")} ©{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
