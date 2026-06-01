import { useState, ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, ChevronDown, ChevronUp, CheckCircle, Home } from "lucide-react";

const GOLD = '#B59A5D';
const GOLD_LIGHT = '#D4B76A';
const BG = '#0A0A0B';
const CARD_BG = '#1C1E20';
const BORDER = 'rgba(181,154,93,0.15)';
const TEXT = '#F5F5F7';
const TEXT_MUTED = 'rgba(245,245,247,0.65)';

function GoldText({ children }: { children: ReactNode }) {
  return (
    <span style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
      {children}
    </span>
  );
}

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

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
      style={{ backgroundColor: `rgba(181,154,93,0.1)`, color: GOLD, border: `1px solid rgba(181,154,93,0.25)` }}>
      {children}
    </span>
  );
}

interface Advantage {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Section {
  title: string;
  items: string[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  serviceName: string;
  section1: Section;
  section2: Section;
  advantages: Advantage[];
  faqs: FAQ[];
  isUrgence?: boolean;
}

export default function ServicePage({
  title,
  subtitle,
  heroImage,
  serviceName,
  section1,
  section2,
  advantages,
  faqs,
  isUrgence,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: BG, color: TEXT }}>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BG} 0%, rgba(10,10,11,0.7) 40%, rgba(10,10,11,0.3) 100%)` }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-20 pt-32 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-sm" style={{ color: TEXT_MUTED }}>
            <Link to="/" className="hover:text-[#B59A5D] transition-colors flex items-center gap-1">
              <Home size={14} /> Accueil
            </Link>
            <span>/</span>
            <span style={{ color: GOLD }}>{serviceName}</span>
          </nav>

          {isUrgence && (
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-bold animate-pulse">
              🔴 URGENCE — Disponible 24h/24 7j/7
            </div>
          )}

          <motion.h1
            className="mb-4"
            style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GoldText>{title}</GoldText>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-lg mb-8 leading-relaxed"
            style={{ color: TEXT_MUTED }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: GOLD, color: BG }}
            >
              <Phone size={16} /> Devis Gratuit — 07 84 86 07 15
            </a>
            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ border: `2px solid ${GOLD}`, color: GOLD }}
            >
              <Phone size={16} /> Appeler Maintenant
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {['Garantie Décennale', 'Artisan Qualifié', 'Devis Gratuit', 'Intervention Rapide'].map((badge) => (
              <span key={badge} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: TEXT, border: '1px solid rgba(255,255,255,0.15)' }}>
                ✓ {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTIONS CONTENU */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInUp>
              <div className="p-8 rounded-2xl h-full" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
                <h2 className="text-2xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: TEXT }}>
                  {section1.title}
                </h2>
                <ul className="space-y-4">
                  {section1.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                      <span style={{ color: TEXT_MUTED }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <div className="p-8 rounded-2xl h-full" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
                <h2 className="text-2xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: TEXT }}>
                  {section2.title}
                </h2>
                <ul className="space-y-4">
                  {section2.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                      <span style={{ color: TEXT_MUTED }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-24" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <FadeInUp>
              <SectionBadge>Nos Atouts</SectionBadge>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                Pourquoi Choisir <GoldText>Mayer Couverture ?</GoldText>
              </h2>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <FadeInUp key={i} delay={i * 0.07}>
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
                  whileHover={{ y: -4, borderColor: GOLD }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(181,154,93,0.15)' }}>
                    <CheckCircle size={20} style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: TEXT }}>
                    {adv.title}
                  </h3>
                  <p className="text-sm" style={{ color: TEXT_MUTED }}>{adv.description}</p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp>
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                Questions <GoldText>Fréquentes</GoldText>
              </h2>
            </FadeInUp>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeInUp key={i} delay={i * 0.06}>
                <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${openFaq === i ? GOLD : BORDER}` }}>
                  <button
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    style={{ backgroundColor: openFaq === i ? 'rgba(181,154,93,0.08)' : BG }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold pr-4" style={{ color: TEXT, fontFamily: "'Schibsted Grotesk', sans-serif" }}>{faq.question}</span>
                    {openFaq === i ? <ChevronUp size={18} style={{ color: GOLD }} /> : <ChevronDown size={18} style={{ color: GOLD }} />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-2" style={{ backgroundColor: 'rgba(181,154,93,0.04)', color: TEXT_MUTED }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 sm:px-6 text-center" style={{ backgroundColor: CARD_BG }}>
        <FadeInUp>
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Besoin d'un <GoldText>Devis Gratuit ?</GoldText>
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-lg" style={{ color: TEXT_MUTED }}>
            Artisan couvreur certifié à Pacy-sur-Eure. Intervention rapide dans tout l'Eure (27). Appelez-nous !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 hover:opacity-90"
              style={{ backgroundColor: GOLD, color: BG }}
            >
              <Phone size={20} /> Devis Gratuit — 07 84 86 07 15
            </a>
            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
              style={{ border: `2px solid ${GOLD}`, color: GOLD }}
            >
              <Phone size={20} /> Appel Immédiat
            </a>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
