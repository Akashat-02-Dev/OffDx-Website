import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  highlights: string[];
}

export default function ProgramCard({ title, description, duration, highlights }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
      <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-900 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{description}</p>
      
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full transform transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-105">
          Duration: {duration}
        </span>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Key Highlights:</h4>
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li 
              key={index} 
              className="text-xs sm:text-sm text-gray-600 flex items-start transform transition-all duration-300 hover:translate-x-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-blue-600 mr-2 animate-pulse">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/enquire"
        className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-all duration-300 text-center block font-medium text-sm sm:text-base transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
      >
        Enquire Now
      </Link>
    </div>
  );
}
