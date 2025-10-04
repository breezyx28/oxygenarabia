import React from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Card } from "../../ui/card";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/oxygen_arabia?igsh=MWp5N2trM2NpcW5xdA==",
    label: "Instagram",
    delay: 0.5,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/oxygen-arabia-co-ltd/",
    label: "LinkedIn",
    delay: 0.6,
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/16RYH57sBn/?mibextid=wwXIfr",
    label: "Facebook",
    delay: 0.7,
  },
];

export const ContactInfo: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const contactItems = [
    {
      icon: MapPin,
      title: t("contactSection.info.location"),
      content: "Saudi Arabia, Riyadh, Olia",
      delay: 0.1,
    },
    {
      icon: Phone,
      title: t("contactSection.info.phone"),
      content: "+966-9200-34424 | +966-539953755",
      delay: 0.2,
    },
    {
      icon: Mail,
      title: t("contactSection.info.email"),
      content: "info@oxygenarabia.com",
      delay: 0.3,
    },
  ];
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold mb-6 text-slate-900">
          {t("contactSection.info.title")}
        </h3>
        <p className="text-slate-600 mb-8 max-w-xl">
          {t("contactSection.info.subtitle")}
        </p>
      </motion.div>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
            whileHover={{ x: isRTL ? -5 : 5 }}
            className="group"
          >
            <Card className="border-none bg-transparent">
              <div
                className={`flex items-start ${
                  isRTL ? "space-x-reverse" : ""
                } space-x-4`}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-blue-200/20 rounded-[16px] flex items-center justify-center text-blue-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-900 font-semibold mb-1 group-hover:text-[#1f70c1] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm break-words">
                    <span
                      style={{
                        unicodeBidi: "plaintext",
                      }}
                    >
                      {item.content}
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-4"
      >
        <h4 className="text-slate-900 text-md font-semibold mb-4">
          {t("contactSection.info.followUs")}
        </h4>
        <div className="flex gap-2">
          {socialLinks.map((social, index) => (
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              href={social.href}
              className="w-12 h-12 bg-blue-200/20 rounded-xl flex items-center justify-center text-blue-600"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
