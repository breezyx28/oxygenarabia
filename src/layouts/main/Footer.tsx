import { Svg } from "../../components/icons";
import LogoBase from "../../components/logo/LogoBase";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="md:p-10 p-6 text-slate-800 divide-slate-600 divide-y">
      <div className="footer pb-4">
        <div>
          <LogoBase />
          <p className="text-md font-semibold">
            {t('footer.companyName')}
            <br />
            {t('footer.tagline')}
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
          <span className="footer-title">{t('footer.services.title')}</span>
          <a className="link link-hover">{t('footer.services.education')}</a>
          <a className="link link-hover">{t('footer.services.advertisement')}</a>
          <a className="link link-hover">{t('footer.services.telecommunications')}</a>
          <a className="link link-hover">{t('footer.services.digitalServices')}</a>
        </div>
        <div>
          <span className="footer-title">{t('footer.company.title')}</span>
          <a href="/#about" className="link link-hover">
            {t('footer.company.aboutUs')}
          </a>
          <a href="/#contact-us-section" className="link link-hover">
            {t('footer.company.contact')}
          </a>
          <a href="/team" className="link link-hover">
            {t('footer.company.ourTeam')}
          </a>
          <a href="/events" className="link link-hover">
            {t('footer.company.events')}
          </a>
        </div>
        <div>
          <span className="footer-title">{t('footer.legal.title')}</span>
          <a className="link link-hover">{t('footer.legal.termsOfUse')}</a>
          <a className="link link-hover">{t('footer.legal.privacyPolicy')}</a>
          <a className="link link-hover">{t('footer.legal.cookiePolicy')}</a>
        </div>
      </div>
      <div className="copyrights flex flex-col justify-center items-center pt-4">
        <span className="text-md">{t('footer.poweredBy')}</span>
        <span className="text-md">
          {t('footer.allRightsReserved')} ©{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
