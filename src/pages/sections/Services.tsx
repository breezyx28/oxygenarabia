import React from "react";
import AvatarsStackCard from "../../components/cards/AvatarsStackCard";
import ServiceCard from "../../components/cards/ServiceCard";
import TextCard from "../../components/cards/TextCard";
import { Svg } from "../../components/icons";
import servicesAnimation from "../../helper/animations/servicesAnimation";
import { Link } from "react-router-dom";

const Services = () => {
  React.useEffect(() => {
    // requestAnimationFrame(servicesAnimation);
    servicesAnimation();
  }, []);

  return (
    <section
      id="services"
      className="w-full min-h-screen md:max-h-[135vh] max-h-auto md:p-20 p-6"
    >
      <div className="services-wrapper flex flex-col gap-y-10 justify-between w-full h-full">
        <div className="grid grid-flow-cols grid-cols-2">
          <div className="gsap-services-from service-title section-text">
            Our <span className="text-primary">Services</span>
          </div>
          <div className="gsap-services-from services-description flex flex-col gap-y-4">
            <span className="text-sm text-slate-400 max-w-[400px]">
              Trusted by leading businesses in healthcare, finance, and retail
              across KSA
            </span>
            <Link
              to={"/about"}
              type="button"
              className="primary-btn w-[110px] h-[40px]"
            >
              Try Free Now
            </Link>
          </div>
        </div>
        <div className="grid md:grid-flow-cols grid-flow-rows md:grid-cols-2 grid-rows-2 gap-10">
          <div className="services order-2 md:order-1 grid grid-flow-cols grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceCard
              title="Cloud Contact Center Solutions"
              description={
                "Who it's for: Businesses that want scalable, flexible, cloud-based customer communication."
              }
              list={[
                "Omnichannel support (Voice, SMS, WhatsApp, Email, Chat, Social Media)",
                "Inbound & Outbound call handling",
                "Interactive Voice Response (IVR) design & deployment",
              ]}
            >
              {Svg.education}
            </ServiceCard>
            <ServiceCard
              title="AI-Powered Automation"
              description={
                "Who it's for: Businesses looking to reduce human workload and improve response speed."
              }
              list={[
                "AI voice bots & chatbots",
                "Smart call routing based on sentiment or intent",
                "Call summarization and transcription",
              ]}
            >
              {Svg.adv}
            </ServiceCard>
            <ServiceCard
              title="WhatsApp & Social Messaging Integration"
              description={
                "Who it's for: Businesses active on social platforms or targeting younger customers."
              }
              list={[
                "Unified dashboard for WhatsApp Business, Twitter, Instagram, Telegram",
                "Bulk WhatsApp campaigns",
                "Conversational commerce setup (orders, support, payments)",
              ]}
            >
              {Svg.tower}
            </ServiceCard>
            <ServiceCard
              title="CRM & Helpdesk Integration"
              description={
                "Who it's for: Enterprises or SMEs needing end-to-end CX."
              }
              list={[
                "Integration with Zoho, Salesforce, HubSpot, Freshdesk, etc.",
                "Ticketing system integration",
                "Customer journey tracking",
              ]}
            >
              {Svg.tech}
            </ServiceCard>

            <Link
              className="link justify-start text-slate-800 font-semibold flex items-center gap-x-1 hover:gap-x-3 duration-200 ease-in"
              to={"/services"}
            >
              More Services <span>{Svg.rightArrow}</span>
            </Link>
          </div>
          <div className="relative opacity-0 -right-[100px] service-poster order-1 md:order-2">
            <div className="absolute lg:flex hidden top-[40px] md:-right-[35px] right-[35px]">
              <TextCard />
            </div>
            <div className="absolute lg:flex hidden md:-bottom-[30px] md:-left-[100px] bottom-[30px] left-[100px]">
              <AvatarsStackCard />
            </div>
            <img
              className="w-full h-full rounded-[15px] object-cover"
              src={"/images/services.jpg"}
              alt={"Our Services"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
