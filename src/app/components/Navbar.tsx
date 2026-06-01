import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { label: "Réparation Toiture", path: "/reparation-toiture" },
  { label: "Rénovation Toiture", path: "/renovation-toiture" },
  { label: "Nettoyage Toiture", path: "/nettoyage-toiture" },
  { label: "Recherche de Fuite", path: "/recherche-fuite" },
  { label: "Zinguerie", path: "/zinguerie" },
  { label: "Pose Velux", path: "/pose-velux" },
  { label: "Urgence Toiture", path: "/urgence-toiture" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLink = "text-[#F5F5F7] hover:text-[#B59A5D] transition-colors duration-200 text-sm font-medium";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#0A0A0B', borderBottom: '1px solid rgba(181,154,93,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.5" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            <span className="text-xl font-extrabold" style={{ color: '#B59A5D' }}>MAYER</span>
            <span className="text-xl font-extrabold text-white ml-1.5">COUVERTURE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={navLink}>Accueil</Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`${navLink} flex items-center gap-1`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-52 rounded-xl py-2 shadow-2xl z-50"
                  style={{ backgroundColor: '#1C1E20', border: '1px solid rgba(181,154,93,0.2)' }}
                >
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-4 py-2.5 text-sm text-[#F5F5F7] hover:text-[#B59A5D] hover:bg-[rgba(181,154,93,0.08)] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/realisations" className={navLink}>Réalisations</Link>
            <Link to="/avis" className={navLink}>Avis</Link>
            <Link to="/a-propos" className={navLink}>À Propos</Link>
            <Link to="/contact" className={navLink}>Contact</Link>
          </div>

          {/* CTA Button */}
          <a
            href="tel:+33784860715"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: '#B59A5D', color: '#0A0A0B' }}
          >
            <Phone size={14} />
            07 84 86 07 15
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#0A0A0B', borderTop: '1px solid rgba(181,154,93,0.1)' }}>
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block py-3 text-[#F5F5F7] hover:text-[#B59A5D] transition-colors font-medium">Accueil</Link>

            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-[#F5F5F7] hover:text-[#B59A5D] transition-colors font-medium"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block py-2 text-sm text-[#F5F5F7]/80 hover:text-[#B59A5D] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/realisations" className="block py-3 text-[#F5F5F7] hover:text-[#B59A5D] transition-colors font-medium">Réalisations</Link>
            <Link to="/avis" className="block py-3 text-[#F5F5F7] hover:text-[#B59A5D] transition-colors font-medium">Avis</Link>
            <Link to="/a-propos" className="block py-3 text-[#F5F5F7] hover:text-[#B59A5D] transition-colors font-medium">À Propos</Link>
            <Link to="/contact" className="block py-3 text-[#F5F5F7] hover:text-[#B59A5D] transition-colors font-medium">Contact</Link>

            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 mt-4 py-3 rounded-full font-semibold"
              style={{ backgroundColor: '#B59A5D', color: '#0A0A0B' }}
            >
              <Phone size={16} />
              07 84 86 07 15
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
