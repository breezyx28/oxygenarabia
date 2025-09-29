import { Button } from "@/components/ui/button";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { CheckCircle } from "lucide-react";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

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
                    100%
                  </span>
                  <div className="text-base lg:text-lg">
                    {t("about.stats.satisfaction")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto mt-6 lg:mt-0">
              <img
                src="/images/building.jpg"
                alt={t("about.images.building")}
                className="w-full h-[300px] lg:h-[720px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 p-6 lg:p-10 rounded-lg h-full">
            <div className="w-full h-auto">
              <img
                src="/images/building.jpg"
                alt="Building"
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col items-start gap-y-6 pb-4">
                <div className="rounded-full border border-primary px-4 py-2">
                  About Us
                </div>
                <h1 className="text-7xl font-bold">Who We Are</h1>
                <article className="text-gray-500">
                  We are a team of passionate individuals committed to
                  delivering innovative solutions that drive success for our
                  clients. With a wealth of experience and expertise, we
                  collaborate closely with our partners to understand their
                  unique challenges and develop tailored strategies that deliver
                  results.
                </article>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-blue-500" />
                  <div className="text-lg">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 lg:px-6 py-10 mx-auto">
          <div className="w-full h-full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <AboutCard type="mission" />
              <AboutCard type="vision" />
              <AboutCard type="values" />
              <AboutCard type="mission" />
              <AboutCard type="vision" />
              <AboutCard type="values" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const AboutCard = ({ type }: { type: "mission" | "vision" | "values" }) => {
  const { t } = useTranslation();
  return (
    <div className="group p-4 lg:p-6 rounded-[24px] flex flex-col gap-y-4 lg:gap-y-6 bg-gray-50 hover:bg-blue-600 transition cursor-pointer">
      <div className="card-icon rounded-full h-[40px] w-[40px] lg:h-[48px] lg:w-[48px] bg-blue-100 flex items-center justify-center transition">
        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
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

export default About;
