import { Helmet } from "react-helmet-async";
import TeamCard from "./TeamCard";
import { Suspense } from "react";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("team.title")} - Oxygen</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Suspense
          fallback={
            <div className="h-[50vh] bg-primary/10 flex items-center justify-center">
              <div className="text-white">{t("loading")}</div>
            </div>
          }
        >
          <BackgroundBoxesLayout
            title={t("team.title")}
            subtitle={t("team.description")}
            className="bg-gradient-to-br from-[#1f70c1] to-[#0f4d85]"
            containerClassName="bg-primary/10"
          />
        </Suspense>
      </div>
      <section className="section-container bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div
            className="section-text"
            dangerouslySetInnerHTML={{ __html: t("team.sectionText") }}
          />
          <p className="max-w-2xl my-6 text-gray-500">{t("team.intro")}</p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <TeamCard
              name={t("team.members.aziz.name")}
              position={t("team.members.aziz.position")}
              image="/images/team/aziz.jpg"
              details=""
            />

            <TeamCard
              name="Ahmed Taj"
              position="Graphic Designer"
              image="/images/team/ahmed-taj.jpg"
              details=""
            />

            <TeamCard
              name="Minan"
              position="Sales"
              image="/images/team/minan.jpg"
              details=""
            />

            <TeamCard
              name="Waad"
              position="HR"
              image="/images/team/waad.jpg"
              details=""
            />
            <TeamCard
              name="Alaa"
              position="CTO"
              image="/images/team/alaa.jpg"
              details=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
