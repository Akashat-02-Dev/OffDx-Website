import ProgramCard from '../components/ProgramCard';

export default function Services() {
  const programs = [
    {
      title: "Bachelor's Programs",
      description: "Comprehensive undergraduate programs across various disciplines with strong foundation and practical exposure.",
      duration: "3-4 Years",
      highlights: [
        "Industry-relevant curriculum",
        "Hands-on practical training",
        "Internship opportunities",
        "Career counseling support",
        "Flexible learning options"
      ]
    },
    {
      title: "Master's Programs",
      description: "Advanced postgraduate programs designed to develop specialized skills and leadership capabilities.",
      duration: "2 Years",
      highlights: [
        "Specialized domain expertise",
        "Research-oriented approach",
        "Industry mentorship",
        "Global exposure opportunities",
        "Advanced placement support"
      ]
    },
    {
      title: "UG-PG Integrated Programs",
      description: "Fast-track your education with our integrated programs that combine undergraduate and postgraduate studies.",
      duration: "5 Years",
      highlights: [
        "Save 1 year of study time",
        "Seamless academic progression",
        "Comprehensive skill development",
        "Enhanced career prospects",
        "Cost-effective education"
      ]
    }
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slideInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">Our Programs</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose from our comprehensive range of programs designed to meet your career aspirations and academic goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProgramCard
                title={program.title}
                description={program.description}
                duration={program.duration}
                highlights={program.highlights}
              />
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-blue-50 rounded-lg p-6 sm:p-8 animate-slideInUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: '📚',
                title: 'Academic Counseling',
                description: 'Personalized guidance for program selection and career planning'
              },
              {
                icon: '💼',
                title: 'Placement Assistance',
                description: 'Dedicated support for internships and job placements'
              },
              {
                icon: '🎓',
                title: 'Skill Development',
                description: 'Additional certifications and skill enhancement programs'
              },
              {
                icon: '🌐',
                title: 'Online Learning',
                description: 'Flexible online and hybrid learning options available'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="text-center p-3 sm:p-4 transform transition-all duration-300 hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-all duration-300 hover:rotate-12 hover:bg-blue-700">
                  <span className="text-white text-base sm:text-lg animate-pulse">{service.icon}</span>
                </div>
                <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base hover:text-blue-900 transition-colors duration-300">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
