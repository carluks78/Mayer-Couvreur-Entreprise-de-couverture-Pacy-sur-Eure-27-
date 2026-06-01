import { ReactNode } from "react";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, AlertTriangle } from "lucide-react";

const GOLD = '#B59A5D';
const GOLD_LIGHT = '#D4B76A';
const BG = '#0A0A0B';
const CARD_BG = '#1C1E20';
const BORDER = 'rgba(181,154,93,0.15)';
const TEXT = '#F5F5F7';
const TEXT_MUTED = 'rgba(245,245,247,0.65)';

function FadeInUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function GoldText({ children }: { children: ReactNode }) {
  return (
    <span style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
      {children}
    </span>
  );
}

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
      style={{ backgroundColor: `rgba(181,154,93,0.1)`, color: GOLD, border: `1px solid rgba(181,154,93,0.25)` }}>
      {children}
    </span>
  );
}

const zones = [
  "Pacy-sur-Eure (27120)", "Vernon", "Giverny", "Évreux", "Louviers",
  "Gaillon", "Les Andelys", "Nonancourt", "Dreux (28)", "Chartres (28)",
  "Rouen (76)", "Elbeuf (76)", "Mantes-la-Jolie (78)",
];

export default function Contact() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: '100vh' }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
        <FadeInUp>
          <SectionBadge>Nous Contacter</SectionBadge>
          <h1 className="text-5xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Contactez <GoldText>Mayer Couverture</GoldText>
          </h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: TEXT_MUTED }}>
            Devis gratuit, réponse rapide. Appelez-nous directement pour obtenir un diagnostic et un devis personnalisé.
          </p>
        </FadeInUp>
      </section>

      {/* Bouton téléphone principal */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <motion.a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-4 w-full py-8 rounded-3xl font-extrabold text-2xl transition-all"
              style={{ backgroundColor: GOLD, color: BG, fontFamily: "'Schibsted Grotesk', sans-serif" }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={32} />
              07 84 86 07 15 — Appel Direct
            </motion.a>
            <p className="text-center mt-4 text-sm" style={{ color: TEXT_MUTED }}>
              Devis gratuit et sans engagement · Réponse immédiate
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Infos */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Téléphone */}
            <FadeInUp delay={0}>
              <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181,154,93,0.15)', color: GOLD }}>
                  <Phone size={28} />
                </div>
                <h3 className="font-extrabold text-lg mb-2" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>Téléphone</h3>
                <a href="tel:+33784860715" className="font-bold text-xl block mb-2 hover:opacity-80 transition-opacity" style={{ color: GOLD }}>
                  07 84 86 07 15
                </a>
                <p className="text-sm" style={{ color: TEXT_MUTED }}>Urgences : 24h/24 7j/7</p>
              </div>
            </FadeInUp>

            {/* Horaires */}
            <FadeInUp delay={0.1}>
              <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181,154,93,0.15)', color: GOLD }}>
                  <Clock size={28} />
                </div>
                <h3 className="font-extrabold text-lg mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>Horaires</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: TEXT_MUTED }}>Lundi — Vendredi</span>
                    <span className="font-semibold" style={{ color: TEXT }}>7h — 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: TEXT_MUTED }}>Samedi</span>
                    <span className="font-semibold" style={{ color: TEXT }}>8h — 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: TEXT_MUTED }}>Dimanche</span>
                    <span className="font-semibold text-red-400">Urgences uniquement</span>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Adresse */}
            <FadeInUp delay={0.2}>
              <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(181,154,93,0.15)', color: GOLD }}>
                  <MapPin size={28} />
                </div>
                <h3 className="font-extrabold text-lg mb-2" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>Localisation</h3>
                <p style={{ color: TEXT }}>Pacy-sur-Eure</p>
                <p style={{ color: TEXT }}>27120, Eure (27)</p>
                <p style={{ color: TEXT_MUTED }}>Normandie, France</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Urgence block */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <FadeInUp>
          <motion.a
            href="tel:+33784860715"
            className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl cursor-pointer"
            style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)' }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-red-600">
                <AlertTriangle size={24} className="text-white" />
              </div>
              <div>
                <p className="font-extrabold text-xl mb-1 text-red-400" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                  Urgence Toiture ?
                </p>
                <p style={{ color: TEXT_MUTED }}>Disponible 24h/24 et 7j/7 — intervention en moins de 4h</p>
              </div>
            </div>
            <div className="sm:ml-auto flex-shrink-0">
              <span className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-red-600 text-white">
                <Phone size={18} /> Appeler maintenant
              </span>
            </div>
          </motion.a>
        </FadeInUp>
      </section>

      {/* Zone d'intervention */}
      <section className="py-24" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInUp>
              <SectionBadge>Zone d'Intervention</SectionBadge>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                Nous Intervenons <GoldText>Partout dans l'Eure</GoldText>
              </h2>
            </FadeInUp>
          </div>
          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {zones.map((zone) => (
                <span key={zone} className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: BG, border: `1px solid ${BORDER}`, color: TEXT_MUTED }}>
                  <MapPin size={12} className="inline mr-1" style={{ color: GOLD }} />
                  {zone}
                </span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
