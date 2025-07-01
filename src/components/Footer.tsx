import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">OffDX</h3>
            <p className="text-blue-100 mb-4">
              Empowering students through quality education in partnership with Amity University. 
              Your gateway to integrated UG-PG programs and career success.
            </p>
            <div className="space-y-2 text-blue-100">
              <p><a href='mailto:abhijitdwivedi@offdx.com'>📧 support@offdx.com</a></p>
              <p>📞 +91 87770 76176</p>
              <p>📍 Koramangala, Bangalore</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/enquire" className="text-blue-100 hover:text-white transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-blue-100 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2025 OffDX. All rights reserved. In partnership with Amity University.</p>
        </div>
      </div>
    </footer>
  );
}
