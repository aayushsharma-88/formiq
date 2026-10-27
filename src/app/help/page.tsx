"use client";

import { useStore } from "@/store/useStore";
import { t } from "@/lib/translations";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function HelpCenterPage() {
  const { language } = useStore();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === 'en' ? [
    { q: "What is FORMIQ?", a: "FORMIQ is a premium fitness and workout tracking platform. It allows you to log your exercises, sets, reps, and weights, and uses that data to provide analytics and personalized tracking responses." },
    { q: "How to create your profile", a: "Navigate to the Settings page and update your personal details and goals. Your profile is securely tied to your data." },
    { q: "How to add a workout", a: "Go to the Workout Tracker page, enter a workout name, duration, and then start adding exercises. Once you're done, click 'Save Workout'." },
    { q: "How to record exercises", a: "Inside a workout, click 'Add Exercise', enter the exercise name (like Bench Press), and then add your sets with weights and reps." },
    { q: "How to use Goals", a: "Visit the Goals page. You can set targets for workout frequency, strength improvements, and more. FORMIQ will track your progress automatically." },
    { q: "How Analytics works", a: "Analytics automatically aggregates your logged data to show total volume, duration, and frequency over time. You need to log at least a few workouts to see trends." },
    { q: "Where my tracking data is saved", a: "All your data is saved securely in the FORMIQ database under your unique user profile. You can view all raw data in the 'History' tab." },
    { q: "How FORMIQ uses my saved data", a: "FORMIQ uses your data exclusively to generate your dashboard stats, analytics charts, and to power the smart 'Ask FORMIQ' assistant on your dashboard." },
    { q: "How to get the most from FORMIQ", a: "Log workouts consistently. Enter accurate sets/reps/weights. Review weekly progress and monthly trends. Use the Dashboard AI assistant to ask specific questions about your past workouts." },
  ] : [
    { q: "FORMIQ क्या है?", a: "FORMIQ एक प्रीमियम फिटनेस और वर्कआउट ट्रैकिंग प्लेटफ़ॉर्म है। यह आपको अपने व्यायाम, सेट, रेप्स और वज़न को लॉग करने की अनुमति देता है, और उस डेटा का उपयोग एनालिटिक्स और व्यक्तिगत ट्रैकिंग प्रतिक्रियाएं प्रदान करने के लिए करता है।" },
    { q: "अपना प्रोफाइल कैसे बनाएं", a: "सेटिंग्स पृष्ठ पर नेविगेट करें और अपने व्यक्तिगत विवरण और लक्ष्यों को अपडेट करें। आपकी प्रोफ़ाइल सुरक्षित रूप से आपके डेटा से जुड़ी हुई है।" },
    { q: "वर्कआउट कैसे जोड़ें", a: "वर्कआउट ट्रैकर पृष्ठ पर जाएं, वर्कआउट का नाम, अवधि दर्ज करें, और फिर व्यायाम जोड़ना शुरू करें। जब आप पूरा कर लें, तो 'वर्कआउट सहेजें' पर क्लिक करें।" },
    { q: "व्यायाम कैसे रिकॉर्ड करें", a: "वर्कआउट के अंदर, 'व्यायाम जोड़ें' पर क्लिक करें, व्यायाम का नाम दर्ज करें (जैसे बेंच प्रेस), और फिर वज़न और रेप्स के साथ अपने सेट जोड़ें।" },
    { q: "लक्ष्यों का उपयोग कैसे करें", a: "लक्ष्य पृष्ठ पर जाएँ। आप वर्कआउट आवृत्ति, शक्ति सुधार, और बहुत कुछ के लिए लक्ष्य निर्धारित कर सकते हैं। FORMIQ स्वचालित रूप से आपकी प्रगति को ट्रैक करेगा।" },
    { q: "एनालिटिक्स कैसे काम करता है", a: "एनालिटिक्स समय के साथ कुल मात्रा, अवधि और आवृत्ति दिखाने के लिए आपके लॉग किए गए डेटा को स्वचालित रूप से एकत्रित करता है। रुझान देखने के लिए आपको कम से कम कुछ वर्कआउट लॉग करने होंगे।" },
    { q: "मेरा ट्रैकिंग डेटा कहां सहेजा गया है", a: "आपका सारा डेटा सुरक्षित रूप से आपके अद्वितीय उपयोगकर्ता प्रोफ़ाइल के तहत FORMIQ डेटाबेस में सहेजा गया है। आप 'इतिहास' टैब में सभी कच्चा डेटा देख सकते हैं।" },
    { q: "FORMIQ मेरे सहेजे गए डेटा का उपयोग कैसे करता है", a: "FORMIQ आपके डेटा का उपयोग विशेष रूप से आपके डैशबोर्ड आँकड़े, एनालिटिक्स चार्ट उत्पन्न करने और आपके डैशबोर्ड पर स्मार्ट 'FORMIQ से पूछें' सहायक को शक्ति देने के लिए करता है।" },
    { q: "FORMIQ का अधिकतम लाभ कैसे उठाएं", a: "लगातार वर्कआउट लॉग करें। सटीक सेट/रेप्स/वज़न दर्ज करें। साप्ताहिक प्रगति और मासिक रुझानों की समीक्षा करें। अपने पिछले वर्कआउट के बारे में विशिष्ट प्रश्न पूछने के लिए डैशबोर्ड एआई सहायक का उपयोग करें।" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="text-center py-10 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl border border-primary/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <HelpCircle size={48} className="mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight mb-4 uppercase glow-text">{t(language, 'help')}</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          {language === 'en' 
            ? "Everything you need to know about using FORMIQ. From basic tracking to advanced analytics."
            : "FORMIQ का उपयोग करने के बारे में आपको जो कुछ भी जानना आवश्यक है। बुनियादी ट्रैकिंग से लेकर उन्नत एनालिटिक्स तक।"}
        </p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="glass-panel rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
            >
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              {openIndex === index ? <ChevronUp className="text-primary flex-shrink-0" /> : <ChevronDown className="text-foreground/40 flex-shrink-0" />}
            </button>
            <div 
              className={clsx(
                "px-6 text-foreground/70 overflow-hidden transition-all duration-300",
                openIndex === index ? "pb-6 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pt-4 border-t border-white/10 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
