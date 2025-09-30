import { Button } from "@/components/ui/button";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";

import {
  CheckCircle,
  Target,
  Eye,
  Star,
  Award,
  Lightbulb,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("about.title")} - Oxygen</title>
      </Helmet>
      <div className="relative h-[60vh] overflow-hidden">
        <Suspense
          fallback={
            <div className="h-[60vh] bg-primary/10 flex items-center justify-center">
              <div className="text-white">{t("loading")}</div>
            </div>
          }
        >
          <BackgroundBoxesLayout
            title={t("about.title")}
            subtitle={t("about.subtitle")}
            className="bg-primary"
            containerClassName="bg-primary/10"
          />
        </Suspense>
      </div>

      <section className="section-container py-0 z-50 bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 bg-gray-50 p-6 lg:p-10 rounded-lg h-full">
            <div className="flex flex-col gap-y-10 divide-y divide-gray-100">
              <div className="flex flex-col items-start gap-y-12 pb-4">
                <div className="rounded-full border border-primary px-4 py-2">
                  {t("about.header.badge")}
                </div>
                <h1 className="text-7xl font-bold">
                  {t("about.header.title")}
                </h1>
                <article className="mt-4 text-gray-500">
                  {t("about.header.description")}
                </article>
                <div className="action-btn">
                  <Button>{t("header.cta")}</Button>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-4 pt-4">
                <div className="flex flex-col gap-y-4 lg:gap-y-8">
                  <span className="text-3xl lg:text-5xl font-semibold">
                    500+
                  </span>
                  <div className="text-base lg:text-lg">
                    {t("about.stats.projects")}
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 lg:gap-y-8">
                  <span className="text-3xl lg:text-5xl font-semibold">
                    50+
                  </span>
                  <div className="text-base lg:text-lg">
                    {t("about.stats.team")}
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 lg:gap-y-8">
                  <span className="text-3xl lg:text-5xl font-semibold">
                    4.9/5
                  </span>
                  <div className="text-base lg:text-lg">
                    {t("about.stats.satisfaction")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto mt-6 lg:mt-0">
              <img
                src="/images/about-us/oxygen-ceo.png"
                alt={t("about.images.building")}
                className="w-full h-[300px] lg:h-[720px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="container px-6 py-10 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 p-6 lg:p-10 rounded-lg h-full">
            <div className="w-full h-auto">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" // Diverse tech team
                alt={t("about.images.team")}
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col items-start gap-y-6 pb-4">
                <div className="rounded-full border border-primary px-4 py-2">
                  {t("about.introduction.badge")}
                </div>
                <h1 className="text-7xl font-bold">
                  {t("about.introduction.title")}
                </h1>
                <article className="text-gray-500">
                  {t("about.introduction.description")}
                </article>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">{t("about.features.cloud")}</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">{t("about.features.ai")}</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">
                    {t("about.features.integrations")}
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">{t("about.features.support")}</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">{t("about.features.security")}</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">
                    {t("about.features.experience")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="container px-4 lg:px-6 py-10 mx-auto">
          <div className="w-full h-full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <AboutCard type="mission" icon={cardIcons.mission} />
              <AboutCard type="vision" icon={cardIcons.vision} />
              <AboutCard type="values" icon={cardIcons.values} />
              <AboutCard type="why" icon={cardIcons.why} />
              <AboutCard
                type="goals"
                icon={cardIcons.goals}
                className="md:col-span-2"
              />
              {/* <AboutCard type="vision2030" icon={cardIcons.vision2030} /> */}
            </div>
          </div>
        </div>

        <div className="container px-4 sm:px-6 py-8 sm:py-10 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-16 bg-gray-50 p-4 sm:p-6 lg:p-10 rounded-lg h-full">
            {/* Text Content Section */}
            <div className="flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10 divide-y divide-gray-100">
              <div className="flex flex-col items-start gap-y-6 sm:gap-y-8 lg:gap-y-12 pb-4">
                <div className="rounded-full border border-primary px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  {t("2030 Vision")}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  {t("about.cards.vision2030.title")}
                </h1>
                <article className="mt-2 sm:mt-4 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {t("about.cards.vision2030.description")}
                </article>
              </div>
            </div>

            {/* Main Image Section */}
            <div className="w-full h-auto mt-4 sm:mt-6 lg:mt-0">
              <img
                src="/images/about-us/The-Official-Vision-2030-Logo-Set-Against-the-Riyadh-Night-View-Credits-American-Telephysicians.webp"
                alt={t("about.images.building")}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Logo Grid Section */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6">
              <div className="flex justify-center items-center p-2">
                <img
                  src="/images/about-us/Vision 2030-01.png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  src="/images/about-us/neom (2).png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  src="/images/about-us/Red Sea Global-01.png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  src="/images/about-us/Roshn Group01.png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  src="/images/about-us/Saudi-Aramco-01.png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center items-center p-2">
                <img
                  src="/images/about-us/Seven Saudi Entertainment Ventures2-01.png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
              <div className="flex justify-center items-center p-2 col-span-2 sm:col-span-1">
                <img
                  src="/images/about-us/STC-01.png"
                  alt={t("about.images.vision2030")}
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 lg:px-6 py-10 mx-auto">
          <section>
            {/* add contact button or link to direct the user to contact us */}
            <a href="/contact" className="btn bg-primary border-0 text-white">
              {t("header.cta")}{" "}
              <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-[180deg] ltr:rotate-0" />
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

const AboutCard = ({
  type,
  icon,
  className,
}: {
  type: "mission" | "vision" | "values" | "why" | "goals" | "vision2030";
  className?: string;
  icon: React.ReactNode;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        "group p-4 lg:p-6 rounded-[24px] flex flex-col gap-y-4 lg:gap-y-6 bg-gray-50 hover:bg-blue-600 transition cursor-pointer",
        className
      )}
    >
      <div className="card-icon rounded-full h-[40px] w-[40px] lg:h-[48px] lg:w-[48px] bg-blue-100 flex items-center justify-center transition">
        {/* <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" /> */}
        {icon}
      </div>
      <div className="card-details flex flex-col gap-y-2 lg:gap-y-4">
        <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-white transition">
          {t(`about.cards.${type}.title`)}
        </h3>
        <p className="text-xs lg:text-sm text-gray-500 group-hover:text-white transition">
          {t(`about.cards.${type}.description`)}
        </p>
      </div>
    </div>
  );
};

// Icon mapping for each card type
const cardIcons: Record<
  "mission" | "vision" | "values" | "why" | "goals" | "vision2030",
  React.ReactNode
> = {
  mission: <Target className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
  vision: <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
  values: <Star className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
  why: <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
  goals: <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
  vision2030: <Globe2 className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />,
};

export default About;
