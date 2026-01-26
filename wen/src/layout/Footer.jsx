import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-transparent text-white">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center shadow-lg shadow-accent-600/20">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-display font-bold text-lg">WEN</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Multi-service solutions across education, tax consultancy, general supply,
              construction & real estate, and more.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/services/education">
                  Education Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/services/tax-consultancy">
                  Tax Consultancy
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/services/general-supply">
                  General Supply
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/services/construction-real-estate">
                  Construction & Real Estate
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/services/loans-car-hire">
                  Loans / Car Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/clients">
                  Clients & Partners
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-accent-400 transition-colors" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 font-bold text-accent-400 transition-colors" to="/academy">
                  WEN Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+260973414769" className="text-slate-400 hover:text-accent-400 transition-colors">
                  +260 973 414 769
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:whiteboard289@gmail.com" className="text-slate-400 hover:text-accent-400 transition-colors break-all">
                  whiteboard289@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  Lusaka, Zambia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Whiteboard Entre-Network Ventures Limited. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

