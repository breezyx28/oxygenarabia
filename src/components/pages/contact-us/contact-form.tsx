import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Card } from "../../ui/card";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // validations
    if (
      !formData?.fullName.trim() ||
      !formData?.email.trim() ||
      !formData?.message.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      // CHANGE HERE: Laravel API URL
      const res = await fetch("https://mailer.oxygenarabia.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName, // Laravel expects 'name'
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({} as any));

        console.log("contact-form-data: ", data);

        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", message: "" });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-900 mb-2"
            >
              Message Sent Successfully!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600"
            >
              Thank you for reaching out. We'll get back to you within 24 hours.
            </motion.p>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-slate-900 mb-2">Let's Start a Conversation</h3>
          <p className="text-slate-600">
            Tell us about your project and let's create something amazing
            together.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="pl-12 bg-slate-50/50 border-slate-200 focus:border-[#1f70c1] focus:ring-[#1f70c1]/20 transition-all duration-300"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-12 bg-slate-50/50 border-slate-200 focus:border-[#1f70c1] focus:ring-[#1f70c1]/20 transition-all duration-300"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
              <Textarea
                name="message"
                placeholder="What do you want to ask?"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="pl-12 bg-slate-50/50 border-slate-200 focus:border-[#1f70c1] focus:ring-[#1f70c1]/20 transition-all duration-300 resize-none"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#1f70c1] to-[#1557a3] hover:from-[#1557a3] hover:to-[#0f4d85] text-white shadow-lg hover:shadow-xl hover:shadow-[#1f70c1]/20 transition-all duration-300 group"
            >
              <motion.div
                className="flex items-center justify-center space-x-2"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.div>
            </Button>
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
};
