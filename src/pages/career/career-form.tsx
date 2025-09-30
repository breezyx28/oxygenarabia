import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  coverLetter: string;
  cv: File | null;
}

export const CareerForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    coverLetter: "",
    cv: null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      cv: file,
    }));
  };

  const validateForm = (): boolean => {
    // Required fields validation
    if (!formData.name.trim()) {
      toast.error(t("careerSection.form.validation.nameRequired"));
      return false;
    }

    if (!formData.email.trim()) {
      toast.error(t("careerSection.form.validation.emailRequired"));
      return false;
    }

    if (!formData.phone.trim()) {
      toast.error(t("careerSection.form.validation.phoneRequired"));
      return false;
    }

    if (!formData.city.trim()) {
      toast.error(t("careerSection.form.validation.cityRequired"));
      return false;
    }

    if (!formData.coverLetter.trim()) {
      toast.error(t("careerSection.form.validation.coverLetterRequired"));
      return false;
    }

    if (!formData.cv) {
      toast.error(t("careerSection.form.validation.cvRequired"));
      return false;
    }

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error(t("careerSection.form.validation.validEmail"));
      return false;
    }

    // Phone format validation (basic international format)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
      toast.error(t("careerSection.form.validation.validPhone"));
      return false;
    }

    // CV file validation
    if (formData.cv) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(formData.cv.type)) {
        toast.error(t("careerSection.form.validation.invalidFileType"));
        return false;
      }

      if (formData.cv.size > maxSize) {
        toast.error(t("careerSection.form.validation.fileTooLarge"));
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("city", formData.city);
      submitData.append("coverLetter", formData.coverLetter);
      if (formData.cv) {
        submitData.append("cv", formData.cv);
      }

      // CHANGE HERE: Laravel API URL for career applications
      const res = await fetch("https://mailer.oxygenarabia.com/api/career", {
        method: "POST",
        body: submitData,
        // Don't set Content-Type header for FormData, let browser set it with boundary
      });

      if (res.ok) {
        toast.success(t("careerSection.form.validation.success"));
        setIsSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({} as any));
        console.log("career-form-data: ", data);
        toast.error(t("careerSection.form.validation.failed"));
      }
    } catch (err) {
      toast.error(t("careerSection.form.validation.networkError"));
    } finally {
      setIsSubmitting(false);
      // Don't reset form on network error, only reset on success
      if (isSubmitted) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          coverLetter: "",
          cv: null,
        });
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto"
      >
        <Card className="p-8 border-2 border-green-200 bg-green-50/80 backdrop-blur-sm shadow-xl">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-200"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-slate-900 mb-4"
            >
              {t("careerSection.form.successTitle")}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-lg"
            >
              {t("careerSection.form.successMessage")}
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
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="p-6 md:p-8 border-2 border-slate-200 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            {t("careerSection.form.title")}
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t("careerSection.form.subtitle")}
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  name="name"
                  placeholder={t("careerSection.form.fullName")}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-12 py-6 bg-white border-2 border-slate-200 focus:border-[#1f70c1] transition-all duration-300 rounded-xl"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
                <Input
                  type="email"
                  name="email"
                  placeholder={t("careerSection.form.email")}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-12 py-6 bg-white border-2 border-slate-200 focus:border-[#1f70c1] transition-all duration-300 rounded-xl"
                  required
                />
              </div>
            </motion.div>
          </div>

          {/* Contact Information Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder={t("careerSection.form.phone")}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-12 py-6 bg-white border-2 border-slate-200 focus:border-[#1f70c1] transition-all duration-300 rounded-xl"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group"
            >
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
                <Input
                  type="text"
                  name="city"
                  placeholder={t("careerSection.form.city")}
                  value={formData.city}
                  onChange={handleInputChange}
                  className="pl-12 py-6 bg-white border-2 border-slate-200 focus:border-[#1f70c1] transition-all duration-300 rounded-xl"
                  required
                />
              </div>
            </motion.div>
          </div>

          {/* CV Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative group"
          >
            <div className="relative">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium text-white"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm/6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        type="file"
                        name="file-upload"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-sm text-slate-500 mt-2 ml-12">
                    {t("careerSection.form.fileHint")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cover Letter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative group"
          >
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-slate-400 w-5 h-5 group-focus-within:text-[#1f70c1] transition-colors" />
              <Textarea
                name="coverLetter"
                placeholder={t("careerSection.form.coverLetter")}
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={5}
                className="pl-12 py-4 bg-white border-2 border-slate-200 focus:border-[#1f70c1] transition-all duration-300 rounded-xl resize-none"
                required
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto min-w-[200px] mx-auto flex justify-center bg-gradient-to-r from-[#1f70c1] to-[#1557a3] hover:from-[#1557a3] hover:to-[#0f4d85] text-white shadow-xl hover:shadow-2xl hover:shadow-[#1f70c1]/30 transition-all duration-300 group text-lg font-semibold py-6 px-8 rounded-xl"
            >
              <motion.div
                className="flex items-center justify-center space-x-3"
                whileTap={{ scale: 0.95 }}
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
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>{t("careerSection.form.sending")}</span>
                  </>
                ) : (
                  <>
                    <span>{t("careerSection.form.sendButton")}</span>
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
