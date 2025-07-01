import { useState } from 'react';
import { toast } from 'sonner';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";


export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    program: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const qualifications = [
    'High School (12th)',
    'Diploma',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Other'
  ];

  const programs = [
    'Bachelor\'s Program',
    'Master\'s Program',
    'UG-PG Integrated Program'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await addDoc(collection(db, "enquiries"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      program: formData.program,
      submittedAt: Timestamp.now()
    });

    toast.success('Thank you for your enquiry! Our team will contact you within 24 hours.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      qualification: '',
      program: ''
    });
  } catch (error) {
    console.error('Error submitting enquiry form:', error);
    toast.error('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="py-8 sm:py-12 lg:py-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slideInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">Enquire Now</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Take the first step towards your educational journey. Fill out the form below and our counselors will get in touch with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 animate-slideInLeft">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="transform transition-all duration-300 focus-within:scale-105">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="transform transition-all duration-300 focus-within:scale-105">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="transform transition-all duration-300 focus-within:scale-105">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="transform transition-all duration-300 focus-within:scale-105">
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Qualification *
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                >
                  <option value="">Select your qualification</option>
                  {qualifications.map((qual) => (
                    <option key={qual} value={qual}>{qual}</option>
                  ))}
                </select>
              </div>

              <div className="transform transition-all duration-300">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Program Interested In *
                </label>
                <div className="space-y-3">
                  {programs.map((program) => (
                    <label key={program} className="flex items-center hover:bg-blue-50 p-2 rounded-md transition-colors duration-300 cursor-pointer">
                      <input
                        type="radio"
                        name="program"
                        value={program}
                        checked={formData.program === program}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 transition-all duration-300"
                      />
                      <span className="ml-3 text-gray-700 text-sm sm:text-base">{program}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Enquiry'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-slideInRight">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-blue-600 mr-3 mt-1 text-lg sm:text-xl">📧</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-sm sm:text-base">support@offdx.com</p>
                  </div>
                </div>
                
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-blue-600 mr-3 mt-1 text-lg sm:text-xl">📞</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">Phone</p>
                    <p className="text-gray-600 text-sm sm:text-base">+91 87770 76176</p>
                  </div>
                </div>
                
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-blue-600 mr-3 mt-1 text-lg sm:text-xl">📍</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">Address</p>
                    <p className="text-gray-600 text-sm sm:text-base">Koramangala, Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-pulse">1</span>
                  <p className="text-gray-700 text-sm sm:text-base">Our counselor will contact you within 24 hours</p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-pulse" style={{ animationDelay: '0.5s' }}>2</span>
                  <p className="text-gray-700 text-sm sm:text-base">Personalized program consultation</p>
                </div>
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-pulse" style={{ animationDelay: '1s' }}>3</span>
                  <p className="text-gray-700 text-sm sm:text-base">Guidance on admission process and requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
