import React from "react";
// import AvatarsStackCard from "../../components/cards/AvatarsStackCard";
import ServiceCard from "../../components/cards/ServiceCard";
// import TextCard from "../../components/cards/TextCard";
import { Svg } from "../../components/icons";
import servicesAnimation from "../../helper/animations/servicesAnimation";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Brain,
  MessageSquare,
  Database,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { GlassCard } from "@/components/ui/GlassCard";
// import { AnimatedNumber } from "@/components/core/animated-number";

const Services = () => {
  React.useEffect(() => {
    // requestAnimationFrame(servicesAnimation);
    servicesAnimation();
  }, []);

  const stats = [
    { value: 5000, suffix: "+", label: "Happy Clients" },
    { value: 4.9, suffix: "", label: "Customer Rating" },
    { value: 99.9, suffix: "%", label: "Uptime" },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen md:max-h-[135vh] max-h-auto md:p-20 p-6"
    >
      <div className="services-wrapper flex flex-col gap-y-10 justify-between w-full h-full">
        <div className="grid md:grid-flow-cols grid-flow-rows md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="flex flex-col gap-4">
            <motion.div
              className="inline-flex w-[fit-content] items-center space-x-2 bg-blue-50 text-primary px-4 py-2 rounded-full border border-blue-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Services</span>
            </motion.div>
            <div className="gsap-services-from section-text">
              Our <span className="text-primary">Services</span>
            </div>
          </div>
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-background rounded-xl border border-border/50"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: index * 0.1 + 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    <NumberTicker
                      value={stat.value}
                      className="text-primary"
                      decimalPlaces={stat.value === 5000 ? 0 : 1}
                    />
                    {stat.suffix}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
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
              {/* {Svg.education} */}
              <Cloud className="w-8 h-8 text-blue-500" />
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
              {/* {Svg.adv} */}
              <Brain className="w-8 h-8 text-blue-500" />
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
              {/* {Svg.tower} */}
              <MessageSquare className="w-8 h-8 text-blue-500" />
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
              {/* {Svg.tech} */}
              <Database className="w-8 h-8 text-blue-500" />
            </ServiceCard>

            <Link
              className="link justify-start text-slate-800 font-semibold flex items-center gap-x-1 hover:gap-x-3 duration-200 ease-in"
              to={"/services"}
            >
              More Services <span>{Svg.rightArrow}</span>
            </Link>
          </div>
          <div className="relative opacity-0 -right-[100px] service-poster order-1 md:order-2">
            {/* <div className="absolute lg:flex hidden top-[40px] md:-right-[35px] right-[35px]">
              <TextCard />
            </div>
            <div className="absolute lg:flex hidden md:-bottom-[30px] md:-left-[100px] bottom-[30px] left-[100px]">
              <AvatarsStackCard />
            </div> */}
            <img
              className="w-full h-full rounded-[15px] object-cover"
              src="https://images.unsplash.com/photo-1598870784088-35e7058da12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGxhcHRvcCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2MzgxNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={"Our Services"}
            />

            {/* Floating Review Badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  5000+ reviews
                </span>
              </div>
            </motion.div>

            {/* Built On Badge */}
            <motion.div
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-blue-500 text-white px-3 py-1">
                Built On 5000+
              </Badge>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
