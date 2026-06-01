import { Link } from "react-router";
import { Phone, MapPin } from "lucide-react";

const services = [
  { label: "Réparation Toiture", path: "/reparation-toiture" },
  { label: "Rénovation Toiture", path: "/renovation-toiture" },
  { label: "Nettoyage Toiture", path: "/nettoyage-toiture" },
  { label: "Recherche de Fuite", path: "/recherche-fuite" },
  { label: "Zinguerie", path: "/zinguerie" },
  { label: "Pose Velux", path: "/pose-velux" },
  { label: "Urgence Toiture", path: "/urgence-toiture" },
];

const zones = [
  "Pacy-sur-Eure", "Vernon", "Évreux", "Louviers",
  "Gaillon", "Les Andelys", "Nonancourt", "Dreux",
  "Chartres", "Rouen",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0B' }}>
      {/* Gold separator */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #B59A5D, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Slogan */}
          <div className="lg:col-span-1">
            <Link to="/" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              <span className="text-2xl font-extrabold" style={{ color: '#B59A5D' }}>MAYER</span>
              <span className="text-2xl font-extrabold text-white ml-1.5">COUVERTURE</span>
            </Link>
            <p className="mt-4 text-sm" style={{ color: 'rgba(245,245,247,0.6)' }}>
              L'Art de la Couverture d'Excellence
            </p>
            <p className="mt-3 text-sm" style={{ color: 'rgba(245,245,247,0.5)' }}>
              Artisans couvreurs certifiés depuis plus de 15 ans à Pacy-sur-Eure, Eure (27), Normandie.
            </p>
            <div className="mt-4 flex gap-3 flex-wrap">
              {['Garantie Décennale', 'RGE', 'Qualibat'].map((cert) => (
                <span key={cert} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'rgba(181,154,93,0.12)', color: '#B59A5D', border: '1px solid rgba(181,154,93,0.2)' }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: '#B59A5D', fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-sm transition-colors hover:text-[#B59A5D]"
                    style={{ color: 'rgba(245,245,247,0.7)' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: '#B59A5D', fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              Zone d'Intervention
            </h3>
            <ul className="space-y-2.5">
              {zones.map((zone) => (
                <li key={zone} className="text-sm" style={{ color: 'rgba(245,245,247,0.7)' }}>
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: '#B59A5D', fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+33784860715"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(181,154,93,0.15)' }}>
                  <Phone size={14} style={{ color: '#B59A5D' }} />
                </div>
                <span className="text-sm font-semibold group-hover:text-[#B59A5D] transition-colors" style={{ color: '#F5F5F7' }}>
                  07 84 86 07 15
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(181,154,93,0.15)' }}>
                  <MapPin size={14} style={{ color: '#B59A5D' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'rgba(245,245,247,0.7)' }}>Pacy-sur-Eure 27120</p>
                  <p className="text-sm" style={{ color: 'rgba(245,245,247,0.7)' }}>Eure (27) — Normandie</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(181,154,93,0.1)' }}>
          <p className="text-center text-sm" style={{ color: 'rgba(245,245,247,0.4)' }}>
            © 2024 Mayer Couverture. Tous droits réservés. — Couvreur Pacy-sur-Eure (27)
          </p>
        </div>
      </div>
    </footer>
  );
}
