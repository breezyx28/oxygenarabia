import {
  Brain,
  Cloud,
  Database,
  PhoneCall,
  Headphones,
  Star,
  Smartphone,
  Router,
  Bot,
  Settings,
  GraduationCap,
  Server,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
// import { motion } from "motion/react";
import ServiceCard1 from "../../components/cards/ServiceCard1";
// import LanguageSwitcher from "../../components/LanguageSwitcher";
// import Jumbotrun from "../../components/pages/Jumbotrun";
// import { DotBackgroundJumbotron } from "@/layouts/styled-layouts/dot-bg-jumbotron";
// import { WavyBackground } from "@/components/ui/wavy-background";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("services.title")} - Oxygen</title>
      </Helmet>
      {/* <DotBackgroundJumbotron title={"Our Services"} /> */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* <WavyBackground
          className="w-full"
          containerClassName="h-[60vh]"
          backgroundFill="#6aadefff"
          // colors={["white", ""]}
        >
          <motion.div
            className="text-center text-5xl text-white font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.div>
        </WavyBackground> */}

        <BackgroundBoxesLayout
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          className="bg-primary"
          containerClassName="bg-primary/10"
        />
      </div>

      <section className="section-container z-10 bg-white">
        <div className="container px-6 py-10 mx-auto">
          {/* <div className="flex justify-center mb-6">
            <LanguageSwitcher />
          </div> */}
          <div className="section-text">
            {t("services.title").split(" ")[0]}{" "}
            <span className="text-primary">
              {t("services.title").split(" ").slice(1).join(" ")}
            </span>
          </div>

          <p className="mt-4 text-gray-500 xl:mt-6">{t("services.subtitle")}</p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <ServiceCard1
                title={t("services.dialerAuto.title")}
                description={t("services.dialerAuto.description")}
              >
                <PhoneCall className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.ivr.title")}
                description={t("services.ivr.description")}
              >
                <Headphones className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.callEvaluation.title")}
                description={t("services.callEvaluation.description")}
              >
                <Star className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.softphone.title")}
                description={t("services.softphone.description")}
              >
                <Smartphone className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.voipPhones.title")}
                description={t("services.voipPhones.description")}
              >
                <Router className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.aiAgent.title")}
                description={t("services.aiAgent.description")}
              >
                <Bot className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.ccaas.title")}
                description={t("services.ccaas.description")}
              >
                <Cloud className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.crm.title")}
                description={t("services.crm.description")}
              >
                <Database className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.erp.title")}
                description={t("services.erp.description")}
              >
                <Settings className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.aiServices.title")}
                description={t("services.aiServices.description")}
              >
                <Brain className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.eTraining.title")}
                description={t("services.eTraining.description")}
              >
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title={t("services.itOutsourcing.title")}
                description={t("services.itOutsourcing.description")}
              >
                <Server className="w-8 h-8 text-blue-500" />
              </ServiceCard1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
