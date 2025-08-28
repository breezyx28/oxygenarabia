import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Users,
  Award,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Zap,
} from "lucide-react";

export function AboutSection() {
  const companyStats = [
    { value: "500+", label: "Projects Completed", icon: Award },
    { value: "50+", label: "Team Members", icon: Users },
    { value: "5+", label: "Years Experience", icon: Clock },
    { value: "25+", label: "Countries Served", icon: Globe },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technology to deliver solutions that stay ahead of the curve.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Our commitment to quality ensures your business operations run smoothly 24/7.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Fast implementation and optimization that gets you results quickly.",
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "99.9% Customer Satisfaction",
    "Award-Winning Support Team",
    "Enterprise Security Standards",
  ];

  return (
    <section className="md:p-20 p-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Blue Gradient Backdrop with Ambient Lighting */}
      <div className="absolute inset-0">
        {/* Main blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-purple-600/20"></div>

        {/* Ambient light orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Floating light particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/60 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-blue-100 px-4 py-2 rounded-full border border-white/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">About Oxygen</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Empowering Businesses with <br />
            <span className="text-blue-300">Smart Technology</span>
          </h2>

          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize digital experiences, Oxygen
            has been at the forefront of technological innovation, helping
            businesses transform and thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content - Team Image & Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Team Image Glass Card */}
            <GlassCard
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752170080635-db168448f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTYzMTg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Oxygen team collaborating"
                className="w-full h-[400px] object-cover opacity-90"
              />

              {/* Floating Achievement Badge - Glass Effect */}
              <motion.div
                className="absolute top-6 left-6 bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-400/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Industry Leader
                    </div>
                    <div className="text-sm text-blue-200">Tech Solutions</div>
                  </div>
                </div>
              </motion.div>

              {/* Success Rate Badge - Glass Effect */}
              <motion.div
                className="absolute bottom-6 right-6 bg-green-400/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center space-x-2 border border-green-300/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">99.9% Success Rate</span>
              </motion.div>
            </GlassCard>

            {/* Story Text Glass Card */}
            <GlassCard
              className="space-y-6 p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white">
                Our Journey of Innovation
              </h3>
              <p className="text-blue-100/80 leading-relaxed">
                What started as a small team of passionate developers has grown
                into a comprehensive technology partner for businesses
                worldwide. We've consistently pushed the boundaries of what's
                possible with AI, cloud computing, and digital transformation.
              </p>
              <p className="text-blue-100/80 leading-relaxed">
                Today, we're proud to serve over 500 clients across 25
                countries, maintaining our commitment to excellence and
                innovation in every project we undertake.
              </p>
            </GlassCard>
          </motion.div>

          {/* Right Content - Stats & Values */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Company Statistics - Glass Cards */}
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => (
                <GlassCard
                  key={stat.label}
                  className="text-center p-6 rounded-2xl"
                  hover
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-blue-300/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-blue-200" />
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-blue-200 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: index * 0.1 + 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-blue-100/70">{stat.label}</div>
                </GlassCard>
              ))}
            </div>

            {/* Core Values - Glass Card */}
            <GlassCard
              className="space-y-6 p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white">Core Values</h3>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-300/30 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-blue-300/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-blue-100/70">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Achievements - Glass Card */}
            <GlassCard
              className="space-y-6 p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white">
                Our Achievements
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-green-400/10 backdrop-blur-sm border border-green-300/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-100">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Call to Action - Glass Card */}
        <GlassCard
          className="text-center rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Oxygen to deliver exceptional
            technology solutions. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-8 py-3 rounded-full font-semibold group border border-white/30"
              size="lg"
            >
              START YOUR PROJECT
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-primary backdrop-blur-sm px-8 py-3 rounded-full font-semibold"
              size="lg"
            >
              MEET OUR TEAM
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
