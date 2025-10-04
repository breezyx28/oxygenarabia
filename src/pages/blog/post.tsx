import { motion } from "motion/react";
import { Toaster } from "sonner";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { marked } from "marked";

let en = `# How to Build a Smart Customer Experience in 2025: From Cloud Contact Centers to Hospitality Robots

## Introduction

Customer experience is no longer just about answering fast or cutting wait times—it’s a complete operating system that balances **speed, personalization, and omnichannel consistency**. Whether you run a hotel, clinic, e-commerce store, or hospitality brand, turning service into a **unified system** that connects communications, customer data, and analytics is the real differentiator for satisfaction and revenue growth. This article gives you a practical, 90-day roadmap tailored to today’s Saudi market realities.

## 1) Start with the Customer Journey—not the tools

Before you buy any platform, map the end-to-end journey: how customers discover you, how they contact you, where they get stuck, and when they decide to buy or cancel. Assign a clear **KPI** to each friction point: First Response Time (FRT), Average Handle Time (AHT), and conversion to booking/purchase (CVR). This map becomes the compass for every tech decision.

## 2) Cloud Contact Center: One console for every conversation

It’s not about taking calls—it’s about **unifying conversations across phone, WhatsApp, email, and web chat** in one screen, with automatic call distribution (ACD) and a smart **IVR** to route customers themselves.
Expected outcomes:

* Lower wait times and higher first-contact resolution.
* Immediate visibility into customer history—no repetition.
* Hybrid/remote support during peaks without operational chaos.

Build a simple backbone: clear IVR menus, accurate business hours, call recording for QA, and real-time dashboards on a shared screen.

## 3) CRM + ERP: Data-driven personalization that actually works

Integrating your contact center with **CRM** gives agents a rich customer card: past purchases, preferences, complaints, and loyalty points. **ERP** integration ensures you never promise what’s unavailable and ties inventory to order flows.
Practical examples:

* A hotel recognizes returning guests and offers an upgrade or free breakfast based on points.
* A clinic sends WhatsApp appointment reminders with a one-tap confirm that updates CRM schedules.
* An online store suggests complementary bundles using previous purchase behavior.

## 4) Hospitality Robots: A front-of-house that never sleeps

In hotels, restaurants, and hospitals, reception/delivery robots can handle repeatable tasks—room deliveries, guest guidance, instant feedback collection—consistently and safely.
Real value:

* Free human teams for complex tasks and relevant upsell moments.
* 24/7 consistency that reduces errors and lifts loyalty.
  For best results, define scenarios, plan traffic routes, and integrate with PMS/CRM where available.

## 5) AI: Graduate from “FAQ bots” to a true **Service Copilot**

Skip generic bots disconnected from your data. Train a language model on your **internal knowledge base** (policies, menus, rooms, prices) to deliver:

* Contextual, accurate answers instead of generic replies.
* **Auto-generated call/chat summaries** saved straight into CRM.
* **Intent detection** for sensitive cases (escalations, VIPs) routed instantly to specialists.

## 6) Continuous measurement: What isn’t measured won’t improve

Adopt a weekly performance board featuring:

* **FRT** (First Response Time)
* **AHT** (Average Handle Time)
* **CSAT/NPS** (Satisfaction/Recommendation)
* **Conversion Rate** (conversation → booking/order)
* **Cost per Resolution**
  Run short (15-minute) reviews and implement one concrete change after each review (script tweak, micro-training, IVR update).

## 7) Omnichannel done right

Keep the experience consistent across channels. If a customer starts on WhatsApp and then calls, the agent should see the **entire conversation context**—no repeated questions. Reuse smart message templates (confirmations, follow-ups, surveys) and tune send times so “smart” doesn’t become spam.

## 8) Security & compliance build trust

Encrypt data in transit and at rest, use granular access controls, define clear retention/deletion policies, and test backups regularly. Train your team on handling sensitive data: with the right tools and awareness, people become your strongest link.

## 9) Your service team: Scripts, training, and empowerment

Tech alone won’t win. Develop **outcome-oriented conversation scripts** (solve + relevant upsell), and provide ongoing training in empathy, active listening, and objection handling. Learn from recordings: run quick listening sessions to capture best practices and scale them.

## 10) A 90-Day Rollout Plan

**Weeks 1–2:** Map the journey, set KPIs, align on targets.
**Weeks 3–4:** Activate the cloud contact center (IVR, ACD, channels, recording).
**Weeks 5–6:** Integrate CRM, design customer cards/templates, automate post-service messages.
**Weeks 7–8:** Pilot a hospitality robot in a controlled zone with clear scenarios.
**Weeks 9–10:** Deploy an AI copilot trained on your internal knowledge base.
**Weeks 11–12:** Review metrics, apply quick wins, and expand scope.

## 11) Quick lessons to avoid common pitfalls

* Don’t start with tools before journey and metrics.
* Don’t collect data you never use—every field must have a purpose.
* Don’t over-automate—preserve a human handoff for nuanced cases.
* Don’t ignore the **agent experience**—complicated tools slow service no matter how “powerful” they are.

## Conclusion

A smart customer experience is an **operating model**, not just software. When you unify channels in the cloud, power service with CRM/ERP data, deploy robots where they make operational sense, and layer in AI trained on your own knowledge—you’ll raise satisfaction, lower costs, and build sustainable growth. Start with a clear map, measure relentlessly, and improve weekly. Over time, service shifts from a cost center to a **value engine** for your business.

`;

let ar = `# كيف تبني تجربة عميل ذكية في 2025: من مركز الاتصال السحابي إلى روبوتات الضيافة

## المقدمة

لم تعد تجربة العميل اليوم مجرد سرعة في الرد أو خفض زمن الانتظار؛ بل أصبحت منظومة متكاملة تُوازن بين **السرعة، التخصيص، والاتساق عبر كل القنوات**. سواءً كنت تدير فندقًا، عيادة، متجرًا إلكترونيًا، أو علامة ضيافة، فإن تحويل خدمة العملاء إلى **نظام موحّد** يجمع الاتصالات وبيانات العملاء والتحليلات سيكون الفارق الحقيقي في رضا العملاء ونمو الإيرادات. يقدّم هذا المقال خارطة طريق عملية وقابلة للتطبيق في السوق السعودي، مع خطوات واضحة للانطلاق خلال 90 يومًا.

## 1) ابدأ من رحلة العميل لا من الأدوات

قبل التفكير في شراء أي منصة، ارسم رحلة العميل كاملة: كيف يكتشفك، كيف يتواصل، أين يتعثّر، ومتى يتخذ قرار الشراء أو الإلغاء. حدّد نقاط الاحتكاك وضع لكل نقطة **مؤشر أداء** واضح مثل زمن أول رد (FRT)، ومتوسط زمن المعالجة (AHT)، ونسبة التحويل إلى حجز أو شراء (CVR). هذه الخريطة ستكون البوصلة التي تقود كل قرار تقني لاحق.

## 2) مركز الاتصال السحابي: قناة موحّدة لكل محادثة

الفكرة ليست استقبال المكالمات فقط، بل **توحيد المحادثات عبر الهاتف، الواتساب، البريد، ودردشة الموقع** في شاشة واحدة مع توزيع آلي للمكالمات (ACD) و**IVR** ذكي يوجّه العميل ذاتيًا.
النتيجة المتوقعة:

* خفض وقت الانتظار، ورفع نسبة الحل من أول تواصل.
* رؤية فورية لسجل العميل بدل تكرار الأسئلة.
* دعم العمل الهجين أو عن بُعد وقت الذروة دون تعقيد تشغيلي.

ابنِ هيكلًا بسيطًا: قوائم IVR واضحة، ساعات عمل محدّثة، تسجيل محادثات للتقييم، وتقارير لحظية تُعرض على لوحة قياس داخلية.

## 3) CRM + ERP: التخصيص المدعوم بالبيانات

تكامل مركز الاتصال مع **CRM** يمنح موظف الخدمة بطاقة عميل غنيّة: المشتريات السابقة، التفضيلات، الشكاوى، ونقاط الولاء. أمّا تكامل **ERP** فيضمن عدم الوعد بما هو غير متاح، وربط المخزون بسير الطلبات.
أمثلة تطبيقية:

* فندق يعرّف العميل العائد تلقائيًا ويعرض ترقية غرفة أو إفطار مجاني بناءً على نقاطه.
* عيادة ترسل تذكير مواعيد عبر واتساب مع زرّ تأكيد فوري يحدّث الجدول في CRM.
* متجر إلكتروني يقترح حزمًا مكمّلة اعتمادًا على سلوك الشراء السابق.

## 4) روبوتات الضيافة: واجهة خدمة لا تنام

في الفنادق والمطاعم والمستشفيات، يمكن لروبوتات الاستقبال والتوصيل الداخلي أن تدير المهام المتكررة بكفاءة، مثل توصيل الطلبات للغرف، توجيه الضيوف، أو جمع تقييمات فورية بعد الخدمة.
القيمة الحقيقية:

* تحرير وقت الفريق البشري للمهام المعقّدة والبيع الإضافي.
* تجربة متسقة 24/7 تقلل الأخطاء وترفع ولاء الضيوف.
  لتحقيق أفضل نتائج، ضع سيناريوهات تشغيل واضحة، وحدّد مسارات الحركة، وتأكد من تكامل الروبوت مع أنظمة PMS/CRM إن وُجدت.

## 5) الذكاء الاصطناعي: من “أسئلة شائعة” إلى “مساعد خدمة”

ابتعد عن البوتات العامة غير المربوطة ببياناتك. درّب نموذجًا لغويًا على **قاعدة معرفية داخلية** تشمل سياساتك وأسعارك وقوائمك، ليوفّر:

* إجابات سياقية دقيقة بدل ردود عامة.
* **ملخصات محادثات** تُحفظ تلقائيًا داخل CRM، لتقليل الكتابة اليدوية.
* **تصنيف نوايا** يكتشف الحالات الحساسة (شكوى عالية، ضيف VIP) ويوجهها فورًا لموظف مختص.

## 6) القياس المستمر: ما لا يُقاس لا يتحسّن

اعتمد لوحة مؤشرات أسبوعية تضم:

* FRT: زمن أول رد.
* AHT: متوسط زمن المعالجة.
* CSAT/NPS: رضا العملاء وقابلية التوصية.
* Conversion Rate: من محادثة إلى حجز/طلب.
* Cost per Resolution: تكلفة حل الحالة.
  أنشئ اجتماعات قصيرة (15 دقيقة) لمراجعة المؤشرات، واتّخذ إجراءً واحدًا ملموسًا بعد كل مراجعة (تعديل سكربت/تدريب/تحديث IVR).

## 7) تجربة القنوات المتكاملة (Omnichannel)

اجعل تجربة العميل متسقة مهما تغيّرت القناة: إذا بدأ على واتساب ثم اتصل هاتفيًا، ينبغي أن يرى الموظف **سياق المحادثة كاملًا** دون تكرار الأسئلة. أعد استخدام قوالب رسائل ذكية (تأكيد، متابعة، استبيان) وتأكد من ضبط توقيت الإرسال كي لا يتحول “الذكي” إلى إزعاج.

## 8) الأمان والامتثال أساس الثقة

طبّق تشفيرًا أثناء النقل والتخزين، وصلاحيات وصول دقيقة، وسياسات احتفاظ بيانات واضحة، مع نسخ احتياطي دوري واختبارات استعادة. درّب فريقك على التصرّف السليم مع البيانات الحساسة، فالعنصر البشري هو الحلقة الأقوى إذا مُكّن بالتوعية والأدوات.

## 9) فريق الخدمة: سكربتات، تدريب، وتمكين

التقنية وحدها لا تكفي. طوّر **سكربتات محادثة** موجهة للنتيجة (حل المشكلة + فرصة بيع إضافي ملائمة)، وقدّم تدريبًا دوريًا على مهارات التعاطف، تقنيات الاستماع، وإدارة الاعتراضات. فعّل التعلم من التسجيلات: جلسات استماع قصيرة لاستخراج أفضل الممارسات وتعميمها.

## 10) خطة تنفيذ 90 يومًا

**الأسبوع 1–2:** رسم رحلة العميل وتحديد مؤشرات الأداء والموافقة على الأهداف.
**الأسبوع 3–4:** تفعيل مركز الاتصال السحابي (IVR، ACD، القنوات، التسجيل).
**الأسبوع 5–6:** تكامل CRM، إعداد البطاقات والقوالب، وأتمتة رسائل ما بعد الخدمة.
**الأسبوع 7–8:** إطلاق تجريبي لروبوت ضيافة في نطاق محدود مع سيناريوهات واضحة.
**الأسبوع 9–10:** نشر مساعد ذكاء اصطناعي مدرّب على قاعدة معرفية داخلية.
**الأسبوع 11–12:** مراجعة مؤشرات الأداء، تطبيق تحسينات سريعة، ثم توسيع النطاق.

## 11) دروس سريعة لتجنّب الأخطاء الشائعة

* لا تبدأ بالأدوات قبل فهم الرحلة والمقاييس.
* لا تجمع بيانات لا تستخدمها؛ اجعل كل حقل له هدف.
* لا تُفرط في الأتمتة لدرجة فقدان اللمسة البشرية عند الحاجة.
* لا تُهمل تجربة الموظف؛ أدوات معقدة تعني خدمة أبطأ حتى لو كانت “أقوى”.

## الخلاصة

تجربة العميل الذكية هي **منهج تشغيل** قبل أن تكون منصات وبرمجيات. حين توحّد القنوات سحابيًا، وتثري الخدمة ببيانات CRM/ERP، وتوظّف روبوتات عند الحاجة، وتضيف طبقة ذكاء اصطناعي مدعومة بقاعدة معرفية داخلية—ستحصل على مزيجٍ يرفع الرضا ويُخفض التكلفة ويصنع نموًا مستدامًا. ابدأ بخريطة واضحة، قِس باستمرار، وحسّن كل أسبوع؛ ومع الوقت ستتحوّل خدمة العملاء من مركز تكلفة إلى **محرّك قيمة** لعملك.

`;

const Post = () => {
  const { t, i18n } = useTranslation();
  //   const { slug } = useParams<{ slug: string }>();
  const isRTL = i18n.language === "ar";
  const lang = i18n.language === "ar" ? "ar" : "en";

  const postMeta = {
    title:
      lang === "ar"
        ? "كيف تبني تجربة عميل ذكية في 2025"
        : "How to Build a Smart Customer Experience in 2025",
    author: "Mohamed Al'Amri",
    date: "2025-09-30",
    readTime: "7 min read",
    category: lang === "ar" ? "تجربة العميل" : "Customer Experience",
  };

  return (
    <>
      <Helmet>
        <title>{postMeta.title} - Oxygen Blog</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Suspense
          fallback={
            <div className="h-[40vh] bg-primary/10 flex items-center justify-center">
              <div className="text-white">{t("loading")}</div>
            </div>
          }
        >
          <BackgroundBoxesLayout
            title={postMeta.title}
            subtitle={
              lang === "ar"
                ? "مقال متخصص في تجربة العملاء والتقنية"
                : "Expert insights on customer experience and technology"
            }
            className="bg-gradient-to-br from-[#1f70c1] to-[#0f4d85] text-center"
            containerClassName="bg-primary/10"
          />
        </Suspense>
      </div>

      {/* Blog Content */}
      <section className="section-container py-12 lg:py-16 bg-white">
        <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="gap-2">
              <Link to="/blog" className="text-xs">
                <ArrowLeft className="w-4 h-4 rtl:rotate-[180deg] ltr:rotate-[0deg]" />
                {t("blog.backToBlog")}
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              {postMeta.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {postMeta.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{postMeta.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(postMeta.date).toLocaleDateString(lang)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{postMeta.readTime}</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              {/* <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                {t("blog.share")}
              </Button> */}
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`prose prose-lg lg:prose-xl max-w-none ${
              isRTL ? "prose-rtl text-right" : "prose-ltr"
            } prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50`}
            dir={isRTL ? "rtl" : "ltr"}
            dangerouslySetInnerHTML={{
              __html: marked(isRTL ? ar : en),
            }}
          />
        </div>
      </section>
      <Toaster position="top-right" />
    </>
  );
};

export default Post;
