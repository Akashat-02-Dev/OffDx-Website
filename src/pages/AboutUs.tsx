import { useState, useEffect, useRef } from 'react';
import AmityLogo from '../asset/images/avcp7pvi6__1_-removebg-preview.png';

export default function AboutUs() {
  return (
    <div className="py-8 sm:py-12 lg:py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Header ===== */}
        <section className="text-center mb-8 sm:mb-12 animate-slideInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">About OffDX</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bridging the gap between quality education and career success through strategic partnerships and innovative learning solutions.
          </p>
        </section>

        {/* ===== Mission & Vision ===== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Mission */}
          <div className="bg-blue-50 p-6 sm:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slideInLeft">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To democratize quality higher education by providing accessible, affordable, and industry-relevant integrated programs that prepare students for successful careers in the modern economy.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border-2 border-blue-100 p-6 sm:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slideInRight">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To become India's leading education partner, recognized for transforming lives through innovative integrated programs, strategic university partnerships, and comprehensive career development that bridges the gap between academia and industry.
            </p>
          </div>
        </section>

{/* ===== Partnership ===== */}
<section className="mb-12 sm:mb-16 animate-slideInUp">
  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">
    Partnership with Amity University
  </h2>
  <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 sm:p-8 rounded-lg transform transition-all duration-300 hover:scale-105">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
      {/* Details on the left */}
      <div className="flex flex-col items-center md:items-start order-2 md:order-1">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left">
          Why Amity University?
        </h3>
        <ul className="space-y-3 mb-2">
          {[
            'Ranked among top private universities in India',
            'UGC approved and globally recognized degrees',
            'Strong industry connections and placement record',
            'Innovative curriculum designed for modern careers',
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start transform transition-all duration-300 hover:translate-x-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-blue-200 mr-3 animate-pulse">•</span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-white text-blue-800 p-4 sm:p-6 rounded-lg inline-block transform transition-all duration-300 hover:scale-110 mt-2">
          <a href="https://application.amityonline.com/lp/affiliate/?ams_id=1594"><h4 className="text-base sm:text-lg font-bold mb-2">Established Partnership</h4>
          <p className="text-xs sm:text-sm">Trusted collaboration for quality education delivery</p></a>
        </div>
      </div>
      {/* Logo on the right */}
      <div className="flex justify-center md:justify-end order-1 md:order-2">
        <a href="https://application.amityonline.com/lp/affiliate/?ams_id=1594">
          <img
          src={AmityLogo}
          alt="Amity University Logo"
          className="w-40 h-auto mb-4 md:mb-0 drop-shadow-lg bg-white rounded-lg p-2"
          style={{ background: "" }}
        />
        </a>
      </div>
    </div>
  </div>
</section>

        {/* ===== Our Credibility (Animated Stats) ===== */}
        <section className="mb-12 sm:mb-16 animate-slideInUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">Our Credibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedStatCard number={500} suffix="+" label="Students Enrolled" index={0} />
            <AnimatedStatCard number={95} suffix="%" label="Placement Rate" index={1} />
            <AnimatedStatCard number={50} suffix="+" label="Industry Partners" index={2} />
          </div>
        </section>

        {/* ===== Our Values ===== */}
        <section className="mb-12 sm:mb-16 animate-slideInUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'Committed to delivering the highest quality education and services',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'Transparent and ethical practices in all our interactions',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Embracing new technologies and methodologies in education',
              },
              {
                icon: '🌟',
                title: 'Empowerment',
                description: 'Enabling students to achieve their full potential and career goals',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:rotate-12 hover:bg-blue-200">
                  <span className="text-xl sm:text-2xl animate-bounce">{value.icon}</span>
                </div>
                <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base hover:text-blue-900 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ Section ===== */}
        <FAQSection />
      </div>
    </div>
  );
}

// Animated Stat Card with scroll animation
interface AnimatedStatCardProps {
  number: number;
  suffix: string;
  label: string;
  index: number;
}
function AnimatedStatCard({ number, suffix, label, index }: AnimatedStatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={cardRef}
      className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl animate-slideInUp"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 text-sm sm:text-base">{label}</p>
    </div>
  );
}

// FAQ Section from first code (preserved exactly)
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes OffDX different from other education consultants?",
      answer: "OffDX stands out through our exclusive partnership with Amity University, offering integrated UG-PG programs that save time and money. We provide personalized counseling, comprehensive support throughout your academic journey, and have a proven track record with 95% placement rate."
    },
    {
      question: "Are the degrees offered through OffDX recognized?",
      answer: "Yes, absolutely! All degrees are awarded by Amity University, which is UGC approved and globally recognized. The degrees hold the same value as those obtained through traditional campus programs and are accepted by employers and higher education institutions worldwide."
    },
    {
      question: "What is the admission process for integrated programs?",
      answer: "The admission process involves: 1) Initial consultation and program selection, 2) Document verification and eligibility assessment, 3) Application submission to Amity University, 4) Entrance test/interview (if required), 5) Fee payment and enrollment confirmation. Our team guides you through each step."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we have a dedicated placement cell that works closely with Amity University's placement team. We offer resume building, interview preparation, skill development workshops, and connect students with our network of 50+ industry partners for internships and job opportunities."
    },
    {
      question: "Can I study online or do I need to attend physical classes?",
      answer: "We offer flexible learning options including online, hybrid, and traditional classroom modes. The choice depends on your program and personal preferences. Online and hybrid options are particularly popular among working professionals and students from remote locations."
    },
    {
      question: "What support do you provide during the course?",
      answer: "We provide comprehensive support including academic counseling, doubt resolution sessions, study materials, regular progress monitoring, career guidance, and 24/7 student support. Our team ensures you have all the resources needed for academic success."
    },
    {
      question: "How much can I save with integrated programs?",
      answer: "Integrated UG-PG programs typically save 1 year of study time compared to pursuing degrees separately. This translates to savings in tuition fees, living expenses, and opportunity cost. Students can enter the job market earlier and start earning sooner."
    },
    {
      question: "What if I want to change my program after enrollment?",
      answer: "Program changes are possible within the first semester, subject to eligibility criteria and seat availability. Our counselors will assess your situation and guide you through the process. However, we recommend thorough consultation before enrollment to avoid such situations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

 return (
    <section className="animate-slideInUp">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl animate-slideInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors duration-300 rounded-lg"
            >
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 pr-4 hover:text-blue-800 transition-colors duration-300">
                {faq.question}
              </h3>
              <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium tracking-wide">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-8 sm:mt-12 text-center">
        <div className="bg-blue-50 rounded-lg p-6 sm:p-8 transform transition-all duration-300 hover:scale-105">
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Our counselors are here to help you with any additional questions about our programs and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-900 transition-all duration-300 font-medium text-sm sm:text-base transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/enquire"
              className="inline-block bg-white text-blue-800 border-2 border-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
