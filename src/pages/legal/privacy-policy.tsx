import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import SEOLayout from "@/layouts/main/SEOLayout";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <SEOLayout
      title="Privacy Policy - Oxygen Arabia ICT"
      description="Learn about how Oxygen Arabia ICT collects, uses, and protects your personal information. Our commitment to data privacy and security."
      keywords="privacy policy, data protection, personal information, GDPR, data security, Oxygen Arabia"
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
            title={t("legal.privacyPolicy.title")}
            subtitle={t("legal.privacyPolicy.subtitle")}
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
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.privacyPolicy.introduction.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.privacyPolicy.introduction.content")}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {t("legal.privacyPolicy.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.privacyPolicy.informationCollection.title")}</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">{t("legal.privacyPolicy.informationCollection.personal.title")}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>{t("legal.privacyPolicy.informationCollection.personal.items.name")}</li>
                  <li>{t("legal.privacyPolicy.informationCollection.personal.items.email")}</li>
                  <li>{t("legal.privacyPolicy.informationCollection.personal.items.phone")}</li>
                  <li>{t("legal.privacyPolicy.informationCollection.personal.items.company")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">{t("legal.privacyPolicy.informationCollection.technical.title")}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>{t("legal.privacyPolicy.informationCollection.technical.items.ip")}</li>
                  <li>{t("legal.privacyPolicy.informationCollection.technical.items.browser")}</li>
                  <li>{t("legal.privacyPolicy.informationCollection.technical.items.device")}</li>
                  <li>{t("legal.privacyPolicy.informationCollection.technical.items.usage")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.privacyPolicy.howWeUse.title")}</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
              <li>{t("legal.privacyPolicy.howWeUse.items.services")}</li>
              <li>{t("legal.privacyPolicy.howWeUse.items.communication")}</li>
              <li>{t("legal.privacyPolicy.howWeUse.items.improvement")}</li>
              <li>{t("legal.privacyPolicy.howWeUse.items.legal")}</li>
              <li>{t("legal.privacyPolicy.howWeUse.items.marketing")}</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.privacyPolicy.dataProtection.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("legal.privacyPolicy.dataProtection.content")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{t("legal.privacyPolicy.dataProtection.measures.encryption")}</li>
              <li>{t("legal.privacyPolicy.dataProtection.measures.access")}</li>
              <li>{t("legal.privacyPolicy.dataProtection.measures.monitoring")}</li>
              <li>{t("legal.privacyPolicy.dataProtection.measures.backup")}</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.privacyPolicy.yourRights.title")}</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
              <li>{t("legal.privacyPolicy.yourRights.items.access")}</li>
              <li>{t("legal.privacyPolicy.yourRights.items.correction")}</li>
              <li>{t("legal.privacyPolicy.yourRights.items.deletion")}</li>
              <li>{t("legal.privacyPolicy.yourRights.items.portability")}</li>
              <li>{t("legal.privacyPolicy.yourRights.items.objection")}</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">{t("legal.privacyPolicy.contact.title")}</h2>
            </div>
            <p className="text-gray-600 mb-4">
              {t("legal.privacyPolicy.contact.content")}
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>{t("legal.privacyPolicy.contact.email")}:</strong> privacy@oxygenarabia.com</p>
              <p><strong>{t("legal.privacyPolicy.contact.phone")}:</strong> +966 11 234 5678</p>
              <p><strong>{t("legal.privacyPolicy.contact.address")}:</strong> {t("legal.privacyPolicy.contact.addressValue")}</p>
            </div>
          </div>

        </div>
      </section>
    </SEOLayout>
  );
};

export default PrivacyPolicy;