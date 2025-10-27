import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import SEOLayout from "@/layouts/main/SEOLayout";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Scale, AlertTriangle, Users, Globe, Shield } from "lucide-react";

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <SEOLayout
      title="Terms of Use - Oxygen Arabia ICT"
      description="Read the terms and conditions for using Oxygen Arabia ICT services. Understand your rights and responsibilities when using our platform."
      keywords="terms of use, terms and conditions, user agreement, service terms, Oxygen Arabia"
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
            title={t("legal.termsOfUse.title")}
            subtitle={t("legal.termsOfUse.subtitle")}
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
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.termsOfUse.introduction.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.termsOfUse.introduction.content")}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {t("legal.termsOfUse.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.termsOfUse.acceptance.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.termsOfUse.acceptance.content")}
            </p>
          </div>

          {/* Services Description */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.termsOfUse.services.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("legal.termsOfUse.services.content")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{t("legal.termsOfUse.services.items.cloudPbx")}</li>
              <li>{t("legal.termsOfUse.services.items.contactCenter")}</li>
              <li>{t("legal.termsOfUse.services.items.aiServices")}</li>
              <li>{t("legal.termsOfUse.services.items.crmErp")}</li>
              <li>{t("legal.termsOfUse.services.items.consulting")}</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.termsOfUse.userResponsibilities.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("legal.termsOfUse.userResponsibilities.content")}
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
              <li>{t("legal.termsOfUse.userResponsibilities.items.accurate")}</li>
              <li>{t("legal.termsOfUse.userResponsibilities.items.lawful")}</li>
              <li>{t("legal.termsOfUse.userResponsibilities.items.security")}</li>
              <li>{t("legal.termsOfUse.userResponsibilities.items.prohibited")}</li>
              <li>{t("legal.termsOfUse.userResponsibilities.items.compliance")}</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.termsOfUse.intellectualProperty.title")}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t("legal.termsOfUse.intellectualProperty.content")}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{t("legal.termsOfUse.intellectualProperty.items.ownership")}</li>
              <li>{t("legal.termsOfUse.intellectualProperty.items.license")}</li>
              <li>{t("legal.termsOfUse.intellectualProperty.items.restrictions")}</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">{t("legal.termsOfUse.liability.title")}</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 font-medium">
                {t("legal.termsOfUse.liability.warning")}
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.termsOfUse.liability.content")}
            </p>
          </div>

          {/* Service Availability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.termsOfUse.availability.title")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.termsOfUse.availability.content")}
            </p>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.termsOfUse.termination.title")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.termsOfUse.termination.content")}
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("legal.termsOfUse.governingLaw.title")}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t("legal.termsOfUse.governingLaw.content")}
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">{t("legal.termsOfUse.contact.title")}</h2>
            <p className="text-gray-600 mb-4">
              {t("legal.termsOfUse.contact.content")}
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>{t("legal.termsOfUse.contact.email")}:</strong> legal@oxygenarabia.com</p>
              <p><strong>{t("legal.termsOfUse.contact.phone")}:</strong> +966 11 234 5678</p>
              <p><strong>{t("legal.termsOfUse.contact.address")}:</strong> {t("legal.termsOfUse.contact.addressValue")}</p>
            </div>
          </div>

        </div>
      </section>
    </SEOLayout>
  );
};

export default TermsOfUse;