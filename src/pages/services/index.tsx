import {
  Brain,
  Cloud,
  Database,
  // PhoneCall,
  // Headphones,
  Star,
  Smartphone,
  Router,
  Bot,
  Settings,
  GraduationCap,
  Server,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOLayout from "@/layouts/main/SEOLayout";
// import { motion } from "motion/react";
// import ServiceCard1 from "../../components/cards/ServiceCard1";
// import LanguageSwitcher from "../../components/LanguageSwitcher";
// import Jumbotrun from "../../components/pages/Jumbotrun";
// import { DotBackgroundJumbotron } from "@/layouts/styled-layouts/dot-bg-jumbotron";
// import { WavyBackground } from "@/components/ui/wavy-background";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { ServiceCard } from "./service-card";

const Services = () => {
  const { t } = useTranslation();
  return (
    <SEOLayout
      title="Our Services - Oxygen Arabia ICT"
      description="Comprehensive ICT services including AI solutions, cloud services, CRM, ERP, VoIP systems, call center solutions, and IT outsourcing. Transform your business with cutting-edge technology."
      keywords="ICT services, AI solutions, cloud services, CRM, ERP, VoIP, call center, IT outsourcing, digital transformation"
      image="/images/services.jpg"
    >
      <>
      {/* <DotBackgroundJumbotron title={"Our Services"} /> */}
      <div className="relative h-[60vh] overflow-hidden">
        <BackgroundBoxesLayout
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          className="bg-primary"
          containerClassName="bg-primary/10"
        />
      </div>

      <section className="section-container z-10 bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="section-text">
            {t("services.title").split(" ")[0]}{" "}
            <span className="text-primary">
              {t("services.title").split(" ").slice(1).join(" ")}
            </span>
          </div>

          <p className="mt-4 text-gray-500 xl:mt-6">{t("services.subtitle")}</p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <ServiceCard
              title={t("services.callEvaluation.title")}
              subtitle={t("services.callEvaluation.description")}
              icon={<Star className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.softphone.title")}
              subtitle={t("services.softphone.description")}
              icon={<Smartphone className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.voipPhones.title")}
              subtitle={t("services.voipPhones.description")}
              icon={<Router className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.aiAgent.title")}
              subtitle={t("services.aiAgent.description")}
              icon={<Bot className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.ccaas.title")}
              subtitle={t("services.ccaas.description")}
              icon={<Cloud className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.crm.title")}
              subtitle={t("services.crm.description")}
              icon={<Database className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.erp.title")}
              subtitle={t("services.erp.description")}
              icon={<Settings className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.aiServices.title")}
              subtitle={t("services.aiServices.description")}
              icon={<Brain className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.eTraining.title")}
              subtitle={t("services.eTraining.description")}
              icon={<GraduationCap className="w-8 h-8 text-blue-500" />}
            />
            <ServiceCard
              title={t("services.itOutsourcing.title")}
              subtitle={t("services.itOutsourcing.description")}
              icon={<Server className="w-8 h-8 text-blue-500" />}
            />
          </div>
        </div>
      </section>
      </>
    </SEOLayout>
  );
};

export default Services;
