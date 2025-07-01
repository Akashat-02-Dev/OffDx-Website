import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transform Your Future with",
      subtitle: "Integrated Education",
      description: "Join our UG-PG integrated programs in partnership with Amity University. Fast-track your career with quality education and industry-relevant skills.",
      backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)"
    },
    {
      title: "Accelerate Your Career with",
      subtitle: "Smart Learning Solutions",
      description: "Save time and money with our integrated degree programs. Complete your UG-PG in just 5 years and enter the workforce ahead of your peers.",
      backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)"
    },
    {
      title: "Unlock Your Potential with",
      subtitle: "Industry-Ready Education",
      description: "Bridge the gap between academia and industry with our comprehensive programs designed for modern career success and professional excellence.",
      backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)"
    },
    {
      title: "Shape Tomorrow with",
      subtitle: "Quality Higher Education",
      description: "Partner with India's leading educational institutions. Get recognized degrees, expert guidance, and placement support for a successful career.",
      backgroundImage: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);


  return (
    <div className="animate-fadeIn">
      {/* Enhanced Hero Section with Background Slider */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden"> 
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{
                background: slide.backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              {/* Animated Content */}
              <div 
                key={currentSlide}
                className="animate-slideInUp"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                  <span className="block text-blue-200 animate-pulse mt-2">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto px-4 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
                <Link
                  to="/enquire"
                  className="inline-block bg-white text-blue-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 min-w-[200px]"
                >
                  Enquire Now
                </Link>
                <Link
                  to="/services"
                  className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 min-w-[200px]"
                >
                  View Programs
                </Link>
              </div>

              {/* Slide Indicators */}
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-slideInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Experience the advantage of integrated education with industry partnerships and career-focused curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '🎓',
                title: 'Quality Education',
                description: 'Partner with Amity University for world-class education and recognized degrees.'
              },
              {
                icon: '⚡',
                title: 'Fast-Track Learning',
                description: 'Complete your UG-PG in reduced time with our integrated program structure.'
              },
              {
                icon: '💼',
                title: 'Career Ready',
                description: 'Industry-relevant curriculum with placement assistance and career guidance.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:rotate-12 hover:bg-blue-200">
                  <span className="text-xl sm:text-2xl animate-bounce">{item.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 hover:text-blue-900 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">
                Benefits of Our Partnership
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Recognized Degrees',
                    description: 'UGC approved degrees from Amity University'
                  },
                  {
                    title: 'Flexible Learning',
                    description: 'Online and hybrid learning options available'
                  },
                  {
                    title: 'Industry Connections',
                    description: 'Access to Amity\'s extensive industry network'
                  },
                  {
                    title: 'Placement Support',
                    description: 'Dedicated placement cell and career guidance'
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start transform transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 animate-pulse">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base hover:text-blue-800 transition-colors duration-300">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 sm:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slideInRight">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">Ready to Start?</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Take the first step towards your integrated education journey. Our counselors are here to guide you.
              </p>
              <Link
                to="/enquire"
                className="inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-900 transition-all duration-300 font-medium text-sm sm:text-base transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
