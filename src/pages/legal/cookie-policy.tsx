import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import SEOLayout from "@/layouts/main/SEOLayout";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Cookie, Settings, BarChart3, Target, Shield, Info } from "lucide-react";

const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <SEOLayout
      title="Cookie Policy - Oxygen Arabia ICT"
      description="Learn about how Oxygen Arabia ICT uses cookies and similar technologies to enhance your browsing experience and improve our services."
      keywords="cookie policy, cookies, tracking, web analytics, user experience, Oxygen Arabia"
    >
      <div className="relative h-[40vh] overflow-hidden">
        <Suspense
          fallback={
            <div className="h-[40vh] bg-primary/10 flex items-center justify-center">
              <div className="text-white">{t("loading")}</div>
            </div>
          }
        >
          <BackgroundBoxesLayout
            title={t("legal.cookiePolicy.title")}
            subtitle={t("legal.cookiePolicy.subtitle")}
            className="bg-primary"
            containerClassName="bg-primary/10"
          />
        </Suspense>
      </div>

      <section className="section-container py-0 z-50 bg-white">
        <div className="container px-6 py-10 mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.cookiePolicy.introduction.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.cookiePolicy.introduction.content")}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {t("legal.cookiePolicy.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* What Are Cookies */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.cookiePolicy.whatAreCookies.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.cookiePolicy.whatAreCookies.content")}
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.cookiePolicy.typesOfCookies.title")}</h2>
            
            {/* Essential Cookies */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-600">{t("legal.cookiePolicy.typesOfCookies.essential.title")}</h3>
              </div>
              <p className="text-gray-600 mb-3">
                {t("legal.cookiePolicy.typesOfCookies.essential.description")}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>{t("legal.cookiePolicy.typesOfCookies.essential.examples.session")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.essential.examples.security")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.essential.examples.language")}</li>
              </ul>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-600">{t("legal.cookiePolicy.typesOfCookies.analytics.title")}</h3>
              </div>
              <p className="text-gray-600 mb-3">
                {t("legal.cookiePolicy.typesOfCookies.analytics.description")}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>{t("legal.cookiePolicy.typesOfCookies.analytics.examples.google")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.analytics.examples.usage")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.analytics.examples.performance")}</li>
              </ul>
            </div>

            {/* Functional Cookies */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-600">{t("legal.cookiePolicy.typesOfCookies.functional.title")}</h3>
              </div>
              <p className="text-gray-600 mb-3">
                {t("legal.cookiePolicy.typesOfCookies.functional.description")}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>{t("legal.cookiePolicy.typesOfCookies.functional.examples.preferences")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.functional.examples.forms")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.functional.examples.chat")}</li>
              </ul>
            </div>

            {/* Marketing Cookies */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-orange-600">{t("legal.cookiePolicy.typesOfCookies.marketing.title")}</h3>
              </div>
              <p className="text-gray-600 mb-3">
                {t("legal.cookiePolicy.typesOfCookies.marketing.description")}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>{t("legal.cookiePolicy.typesOfCookies.marketing.examples.advertising")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.marketing.examples.social")}</li>
                <li>{t("legal.cookiePolicy.typesOfCookies.marketing.examples.retargeting")}</li>
              </ul>
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.cookiePolicy.howWeUseCookies.title")}</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
              <li>{t("legal.cookiePolicy.howWeUseCookies.items.authentication")}</li>
              <li>{t("legal.cookiePolicy.howWeUseCookies.items.preferences")}</li>
              <li>{t("legal.cookiePolicy.howWeUseCookies.items.analytics")}</li>
              <li>{t("legal.cookiePolicy.howWeUseCookies.items.security")}</li>
              <li>{t("legal.cookiePolicy.howWeUseCookies.items.functionality")}</li>
            </ul>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.cookiePolicy.thirdParty.title")}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("legal.cookiePolicy.thirdParty.content")}
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{t("legal.cookiePolicy.thirdParty.services.title")}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>{t("legal.cookiePolicy.thirdParty.services.items.googleAnalytics")}</li>
                <li>{t("legal.cookiePolicy.thirdParty.services.items.socialMedia")}</li>
                <li>{t("legal.cookiePolicy.thirdParty.services.items.customerSupport")}</li>
                <li>{t("legal.cookiePolicy.thirdParty.services.items.advertising")}</li>
              </ul>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.cookiePolicy.managingCookies.title")}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("legal.cookiePolicy.managingCookies.content")}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">{t("legal.cookiePolicy.managingCookies.browser.title")}</h3>
                <p className="text-sm text-gray-600">
                  {t("legal.cookiePolicy.managingCookies.browser.content")}
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">{t("legal.cookiePolicy.managingCookies.optOut.title")}</h3>
                <p className="text-sm text-gray-600">
                  {t("legal.cookiePolicy.managingCookies.optOut.content")}
                </p>
              </div>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.cookiePolicy.updates.title")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.cookiePolicy.updates.content")}
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">{t("legal.cookiePolicy.contact.title")}</h2>
            <p className="text-gray-600 mb-4">
              {t("legal.cookiePolicy.contact.content")}
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>{t("legal.cookiePolicy.contact.email")}:</strong> privacy@oxygenarabia.com</p>
              <p><strong>{t("legal.cookiePolicy.contact.phone")}:</strong> +966 11 234 5678</p>
              <p><strong>{t("legal.cookiePolicy.contact.address")}:</strong> {t("legal.cookiePolicy.contact.addressValue")}</p>
            </div>
          </div>

        </div>
      </section>
    </SEOLayout>
  );
};

export default CookiePolicy;