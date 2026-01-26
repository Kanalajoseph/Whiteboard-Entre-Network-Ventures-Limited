import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import wenLogo from "../images/wen_logo2.jpg";

const linkBase =
  "text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200";
const linkActive = "text-accent-500 font-semibold";


const services = [
  { name: 'Corporate Skills', path: '/services/corporate-skills' },
  { name: 'Education Services', path: '/services/education' },
  { name: 'Tax Consultancy', path: '/services/tax-consultancy' },
  { name: 'General Supply', path: '/services/general-supply' },
  { name: 'Construction & Real Estate', path: '/services/construction-real-estate' },
  { name: 'Loans / Car Hire', path: '/services/loans-car-hire' },
];


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleLogoClick = () => {
    const now = Date.now();
    if (now - lastClickTime > 2000) {
      setLogoClicks(1);
    } else {
      setLogoClicks(prev => prev + 1);
    }
    setLastClickTime(now);

    if (logoClicks >= 4) {
      window.location.href = '/admin/login';
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 glass-dark shadow-sm">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={handleLogoClick}>
          <img
            src={wenLogo}
            alt="WEN Logo"
            className="h-12 w-auto object-contain cursor-pointer"
          />
          <div className="hidden md:block">
            <span className="text-sm font-bold text-white leading-tight">
              Whiteboard Entre-Network<br />Ventures Limited
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            About
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`${linkBase} flex items-center gap-1`}>
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-xl shadow-xl overflow-hidden border border-white/10"
                >
                  <div className="py-2">
                    <NavLink
                      to="/services"
                      className="block px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      All Services
                    </NavLink>
                    <div className="border-t border-white/5 my-2"></div>
                    {services.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/team"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Team
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Clients
          </NavLink>

          <NavLink
            to="/cars"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Cars
          </NavLink>

          <NavLink
            to="/properties"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Properties
          </NavLink>

          <NavLink
            to="/loans"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Loans
          </NavLink>

          <NavLink
            to="/academy"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Academy
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg gradient-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/5 glass-dark overflow-hidden"
          >
            <nav className="container-custom py-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                About
              </NavLink>

              <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Services
              </div>

              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                >
                  {service.name}
                </NavLink>
              ))}

              <NavLink
                to="/team"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Team
              </NavLink>

              <NavLink
                to="/clients"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Clients
              </NavLink>

              <NavLink
                to="/cars"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Cars
              </NavLink>

              <NavLink
                to="/properties"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Properties
              </NavLink>

              <NavLink
                to="/loans"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Loans
              </NavLink>

              <NavLink
                to="/academy"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Academy
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg ${isActive ? 'bg-accent-500/10 text-accent-400 font-semibold border border-accent-500/20' : 'text-slate-300 hover:bg-white/5'} transition-colors`
                }
              >
                Contact
              </NavLink>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 mx-4 py-2.5 rounded-lg gradient-accent text-white text-center font-medium shadow-lg"
              >
                Request a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

