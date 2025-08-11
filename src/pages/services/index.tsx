import ServiceCard1 from "../../components/cards/ServiceCard1";
import { Svg } from "../../components/icons";
import Jumbotrun from "../../components/pages/Jumbotrun";

const Services = () => {
  return (
    <>
      <Jumbotrun pageName={"Our Services"} />
      <section className="section-container z-10 bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="section-text">
            Our <span className="text-primary">Services</span>
          </div>

          <p className="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2">
            <div className="space-y-3">
              <ServiceCard1
                title="Cloud Contact Center Solutions"
                description={
                  "Who it's for: Businesses that want scalable, flexible, cloud-based customer communication."
                }
              >
                {Svg.education}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Omnichannel support (Voice, SMS, WhatsApp, Email, Chat, Social Media)",
                  "Inbound & Outbound call handling",
                  "Interactive Voice Response (IVR) design & deployment",
                  "Automatic Call Distribution (ACD)",
                  "Call recording & monitoring",
                  "Real-time dashboards & analytics",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="AI-Powered Automation"
                description={
                  "Who it's for: Businesses looking to reduce human workload and improve response speed."
                }
              >
                {Svg.adv}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "AI voice bots & chatbots",
                  "Smart call routing based on sentiment or intent",
                  "Call summarization and transcription",
                  "Predictive analytics & customer behavior insights",
                  "Agent assist AI (live suggestion engine)",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="WhatsApp & Social Messaging Integration"
                description={
                  "Who it's for: Businesses active on social platforms or targeting younger customers."
                }
              >
                {Svg.tower}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Unified dashboard for WhatsApp Business, Twitter, Instagram, Telegram",
                  "Bulk WhatsApp campaigns",
                  "Conversational commerce setup (orders, support, payments)",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="CRM & Helpdesk Integration"
                description={
                  "Who it's for: Enterprises or SMEs needing end-to-end CX."
                }
              >
                {Svg.tech}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Integration with Zoho, Salesforce, HubSpot, Freshdesk, etc.",
                  "Ticketing system integration",
                  "Customer journey tracking",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Reporting & Analytics"
                description={
                  "Who it's for: Managers who want to track ROI and team performance."
                }
              >
                {Svg.tech}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Call center performance KPIs",
                  "Agent productivity & SLA reports",
                  "Customer satisfaction & sentiment analysis",
                  "Custom reports for business decisions",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Professional Services"
                description={
                  "Who it's for: New clients or companies transitioning to cloud."
                }
              >
                {Svg.tech}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "IVR design & scripting",
                  "Custom solution development",
                  "Contact center consulting",
                  "Regulatory & compliance advisory (CITC, privacy, etc.)",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Training & Support"
                description={
                  "Who it's for: Clients who value long-term partnerships."
                }
              >
                {Svg.tech}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Agent onboarding & training",
                  "Supervisor enablement",
                  "24/7 technical support",
                  "Dedicated account manager",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Industry-Specific Packages"
                description={
                  "Why: Builds trust by showing domain understanding."
                }
              >
                {Svg.tech}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Healthcare (e.g., appointment scheduling, post-op follow-up)",
                  "Retail & eCommerce (e.g., order tracking, return handling)",
                  "Real estate (lead qualification, follow-ups)",
                  "Government & public services (citizen hotline management)",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <ServiceCard1
                title="Business Process Outsourcing (BPO)"
                description={
                  "Who it's for: Businesses looking to reduce costs, scale fast, and focus on their core business while we handle operations."
                }
              >
                {Svg.tech}
              </ServiceCard1>

              <ul className="flex flex-col gap-2 mx-5">
                {[
                  "Outsourced call center agents (inbound, outbound, blended)",
                  "Appointment scheduling & confirmation",
                  "Customer care & technical support",
                  "Lead generation & qualification",
                  "Back-office operations (data entry, follow-ups, live chat support)",
                  "Multilingual support (Arabic, English – with option for others)",
                ].map((item: string, index: number) => (
                  <li
                    className="flex items-center gap-2"
                    key={"services-list-" + index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary w-[16px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
