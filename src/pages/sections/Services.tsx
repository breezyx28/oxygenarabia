import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  
  React.useEffect(() => {
    // requestAnimationFrame(servicesAnimation);
    servicesAnimation();
  }, []);

  const stats = [
    { value: 5000, suffix: "+", label: t('servicesSection.stats.happyClients') },
    { value: 4.9, suffix: "", label: t('servicesSection.stats.customerRating') },
    { value: 99.9, suffix: "%", label: t('servicesSection.stats.uptime') },
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
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">{t('servicesSection.badge')}</span>
            </motion.div>
            <div className="gsap-services-from section-text">
              {t('servicesSection.title')} <span className="text-primary">{t('servicesSection.titleHighlight')}</span>
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
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
        <div className="grid md:grid-flow-cols grid-flow-rows md:grid-cols-2 grid-rows-0 gap-10">
          <div className="services order-2 md:order-1 grid grid-flow-cols grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceCard
              title={t('servicesSection.cloudContactCenter.title')}
              description={t('servicesSection.cloudContactCenter.description')}
              list={t('servicesSection.cloudContactCenter.features', { returnObjects: true }) as string[]}
            >
              {/* {Svg.education} */}
              <Cloud className="w-8 h-8 text-blue-500" />
            </ServiceCard>
            <ServiceCard
              title={t('servicesSection.aiPowered.title')}
              description={t('servicesSection.aiPowered.description')}
              list={t('servicesSection.aiPowered.features', { returnObjects: true }) as string[]}
            >
              {/* {Svg.adv} */}
              <Brain className="w-8 h-8 text-blue-500" />
            </ServiceCard>
            <ServiceCard
              title={t('servicesSection.whatsappIntegration.title')}
              description={t('servicesSection.whatsappIntegration.description')}
              list={t('servicesSection.whatsappIntegration.features', { returnObjects: true }) as string[]}
            >
              {/* {Svg.tower} */}
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </ServiceCard>
            <ServiceCard
              title={t('servicesSection.crmIntegration.title')}
              description={t('servicesSection.crmIntegration.description')}
              list={t('servicesSection.crmIntegration.features', { returnObjects: true }) as string[]}
            >
              {/* {Svg.tech} */}
              <Database className="w-8 h-8 text-blue-500" />
            </ServiceCard>

            <Link
              className="link justify-start text-slate-800 font-semibold flex items-center gap-x-1 hover:gap-x-3 duration-200 ease-in"
              to={"/services"}
            >
              {t('servicesSection.moreServices')} <span>{Svg.rightArrow}</span>
            </Link>
          </div>
          <div className="relative opacity-0 -right-[100px] service-poster order-1 md:order-2">
            <img
              className="w-full md:h-full h-[300px] rounded-[15px] object-cover"
              src="https://images.unsplash.com/photo-1598870784088-35e7058da12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGxhcHRvcCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2MzgxNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={"Our Services"}
            />

            {/* Floating Review Badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
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
                  5000+ {t('servicesSection.stats.reviews')}
                </span>
              </div>
            </motion.div>

            {/* Built On Badge */}
            <motion.div
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-blue-500 text-white px-3 py-1">
                {t('servicesSection.builtOn')}
              </Badge>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
