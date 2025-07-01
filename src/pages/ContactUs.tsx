import { useState } from 'react';
import { toast } from 'sonner';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    await addDoc(collection(db, "contactForms"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject,
      message: formData.message,
      submittedAt: Timestamp.now()
    });

    toast.success('Thank you for contacting us! We will get back to you within 24 hours.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    toast.error('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: ['support@offdx.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 87770 76176'],
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Koramangala, Bangalore-560095', 'Dhanbad, Jharkhand'],
      description: 'Come say hello at our office'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: ['Available 24/7', 'Quick Response'],
      description: 'Chat with our support team'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Program Information',
    'Admission Process',
    'Technical Support',
    'Partnership Opportunities',
    'Other'
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-slideInUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Have questions about our programs or need assistance? We're here to help you on your educational journey.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-bounce">{info.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">{info.title}</h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-gray-700 font-medium">{detail}</p>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 animate-slideInLeft">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="Your full name"
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
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="transform transition-all duration-300 focus-within:scale-105">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-vertical hover:border-blue-300"
                  placeholder="Tell us how we can help you..."
                />
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
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="space-y-6 sm:space-y-8 animate-slideInRight">
            {/* Office Hours */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">Monday - Friday</span>
                  <span className="text-gray-600 text-sm sm:text-base">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">Saturday</span>
                  <span className="text-gray-600 text-sm sm:text-base">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">Sunday</span>
                  <span className="text-gray-600 text-sm sm:text-base">Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-md">
                <p className="text-xs sm:text-sm text-blue-800">
                  <strong>Note:</strong> Emergency support is available 24/7 for enrolled students.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white border-2 border-blue-100 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">How quickly will I receive a response?</h4>
                  <p className="text-xs sm:text-sm text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Can I schedule a campus visit?</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Yes! Contact us to schedule a personalized campus tour and consultation.</p>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Do you offer virtual consultations?</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Absolutely. We provide video consultations for students who cannot visit in person.</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">
                Stay updated with the latest news, events, and educational opportunities.
              </p>
<div className="flex space-x-3 sm:space-x-4">
  {[
    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61558173667127" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/edu.offdx" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/offdx" },
    { icon: <FaXTwitter />, url: "https://twitter.com/YourProfile" },
  ].map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
      aria-label={`Link to ${item.url}`}
    >
      {item.icon}
    </a>
  ))}
</div>

            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 lg:mt-16 animate-slideInUp">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6 text-center">Find Us</h2>
            <div className="bg-gray-100 rounded-lg h-48 sm:h-64 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 animate-pulse">🗺️</div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Interactive Map</p>
                <p className="text-xs sm:text-sm text-gray-500">Koramangala, Bangalore</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Address:</strong> OffDX Education Center, Koramangala, Bangalore-560095
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
