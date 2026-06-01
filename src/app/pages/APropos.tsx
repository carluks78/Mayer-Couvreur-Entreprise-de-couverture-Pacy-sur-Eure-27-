import { ReactNode } from "react";
import { motion } from "motion/react";
import { Shield, Lightbulb, Award, Heart, Users, Star, Home, Clock } from "lucide-react";
import { Link } from "react-router";

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

const timeline = [
  { year: "2009", event: "Création de Mayer Couverture à Pacy-sur-Eure" },
  { year: "2012", event: "Obtention de la certification RGE" },
  { year: "2015", event: "50ème chantier réalisé dans l'Eure" },
  { year: "2018", event: "Équipe portée à 5 artisans couvreurs certifiés" },
  { year: "2021", event: "500ème réalisation — milestone historique" },
  { year: "2024", event: "Leader couverture Eure (27) — 4.9/5 sur 127 avis" },
];

const values = [
  { icon: <Award size={24} />, title: "Excellence Artisanale", desc: "Chaque détail compte. Nos artisans formés aux Compagnons du Devoir appliquent des techniques traditionnelles et modernes pour un résultat irréprochable." },
  { icon: <Shield size={24} />, title: "Transparence", desc: "Devis clairs et détaillés, sans surprise. Nous expliquons chaque poste de coût et vous informons à chaque étape du chantier." },
  { icon: <Lightbulb size={24} />, title: "Innovation", desc: "Nous investissons en permanence dans les nouvelles techniques et matériaux pour vous offrir les meilleures solutions durables et performantes." },
  { icon: <Heart size={24} />, title: "Engagement Local", desc: "Enracinés dans l'Eure depuis 15 ans, nous privilégions les fournisseurs locaux et contribuons à l'économie normande." },
];

export default function APropos() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 30% 50%, rgba(181,154,93,0.12) 0%, transparent 60%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <SectionBadge>Notre Histoire</SectionBadge>
              <h1 className="text-5xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", lineHeight: 1.1 }}>
                Mayer Couverture <GoldText>depuis 2009</GoldText>
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
                Fondée il y a plus de 15 ans dans le cœur de l'Eure, Mayer Couverture est née d'une passion pour l'artisanat traditionnel et d'un engagement envers l'excellence. Notre fondateur, fort d'une formation chez les Compagnons du Devoir, a bâti cette entreprise sur des valeurs simples : qualité irréprochable, honnêteté et respect du client.
              </p>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>
                Aujourd'hui, notre équipe de 5 artisans certifiés intervient dans tout l'Eure (27) et les régions limitrophes, avec la même exigence et le même attachement au travail bien fait qui nous ont fait grandir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Garantie Décennale', 'Artisan RGE', 'Qualibat', 'Compagnons du Devoir'].map((cert) => (
                  <span key={cert} className="text-sm px-4 py-2 rounded-full font-semibold"
                    style={{ backgroundColor: 'rgba(181,154,93,0.1)', color: GOLD, border: `1px solid rgba(181,154,93,0.25)` }}>
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <div className="relative">
                <img
                  src="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/2ae972c8e_generated_98c9b8c0.png"
                  alt="Artisan couvreur Mayer Couverture"
                  className="w-full rounded-2xl object-cover"
                  style={{ height: '500px' }}
                />
                <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl shadow-2xl" style={{ backgroundColor: GOLD, color: BG }}>
                  <p className="text-3xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>15+</p>
                  <p className="text-sm font-semibold">années d'expertise</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock size={24} />, value: "15+", label: "Années d'expérience" },
              { icon: <Home size={24} />, value: "500+", label: "Toitures réalisées" },
              { icon: <Star size={24} />, value: "98%", label: "Satisfaction client" },
              { icon: <Users size={24} />, value: "5", label: "Artisans certifiés" },
            ].map((stat, i) => (
              <FadeInUp key={i} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}>
                  <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(181,154,93,0.12)', color: GOLD }}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-extrabold mb-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: GOLD }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: TEXT_MUTED }}>{stat.label}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp>
              <SectionBadge>Nos Valeurs</SectionBadge>
              <h2 className="text-4xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                Ce Qui Nous <GoldText>Distingue</GoldText>
              </h2>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <FadeInUp key={i} delay={i * 0.08}>
                <motion.div
                  className="p-6 rounded-2xl h-full"
                  style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
                  whileHover={{ y: -4, borderColor: GOLD }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(181,154,93,0.12)', color: GOLD }}>
                    {val.icon}
                  </div>
                  <h3 className="font-extrabold mb-3" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: TEXT }}>{val.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{val.desc}</p>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <FadeInUp>
              <SectionBadge>Notre Parcours</SectionBadge>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                15 Ans d'<GoldText>Excellence</GoldText>
              </h2>
            </FadeInUp>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeInUp key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-6 pl-0">
                    <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-sm" style={{ backgroundColor: GOLD, color: BG, fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                      {item.year}
                    </div>
                    <div className="flex-1 pt-4">
                      <p className="font-semibold" style={{ color: TEXT }}>{item.event}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 text-center">
        <FadeInUp>
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Confiez-Nous <GoldText>Votre Toiture</GoldText>
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-lg" style={{ color: TEXT_MUTED }}>
            15 ans d'expertise à votre service. Devis gratuit, intervention rapide, qualité garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33784860715"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
              style={{ backgroundColor: GOLD, color: BG }}
            >
              📞 07 84 86 07 15 — Devis Gratuit
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
              style={{ border: `2px solid ${GOLD}`, color: GOLD }}
            >
              Nous Contacter
            </Link>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
