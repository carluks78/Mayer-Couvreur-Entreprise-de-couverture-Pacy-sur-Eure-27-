import { useState, ReactNode } from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const GOLD = '#B59A5D';
const GOLD_LIGHT = '#D4B76A';
const BG = '#0A0A0B';
const CARD_BG = '#1C1E20';
const BORDER = 'rgba(181,154,93,0.15)';
const TEXT = '#F5F5F7';
const TEXT_MUTED = 'rgba(245,245,247,0.65)';

const projects = [
  {
    title: "Rénovation Complète Ardoise",
    location: "Pacy-sur-Eure",
    type: "Rénovation",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/76314d4e7_generated_991c3f90.png",
    description: "Remplacement complet de la couverture ardoise naturelle avec isolation thermique intégrée.",
  },
  {
    title: "Zinguerie Zinc à Joint Debout",
    location: "Vernon",
    type: "Zinguerie",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/9919e4137_generated_327d4954.png",
    description: "Pose d'une couverture zinc à joint debout sur extension contemporaine.",
  },
  {
    title: "Pose 3 Velux Fakro",
    location: "Évreux",
    type: "Velux",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png",
    description: "Installation de 3 fenêtres de toit Fakro avec volets roulants électriques.",
  },
  {
    title: "Rénovation Tuile Terre Cuite",
    location: "Louviers",
    type: "Rénovation",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/15d54b76e_generated_73ed439c.png",
    description: "Réfection complète d'une longère normande avec tuile terre cuite traditionnelle.",
  },
  {
    title: "Réparation Après Tempête",
    location: "Gaillon",
    type: "Réparation",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/69f7dbef8_generated_0d3b57d7.png",
    description: "Intervention d'urgence après la tempête Ciaran. Bâchage, réparation définitive en 48h.",
  },
  {
    title: "Démoussage Traitement Hydrofuge",
    location: "Les Andelys",
    type: "Nettoyage",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png",
    description: "Nettoyage professionnel et traitement hydrofuge longue durée sur maison bourgeoise.",
  },
];

const filters = ["Tous", "Rénovation", "Réparation", "Zinguerie", "Velux", "Nettoyage"];

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

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous" ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: '100vh' }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center" style={{ background: `linear-gradient(180deg, rgba(181,154,93,0.05) 0%, transparent 100%)` }}>
        <FadeInUp>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: `rgba(181,154,93,0.1)`, color: GOLD, border: `1px solid rgba(181,154,93,0.25)` }}>
            Portfolio
          </span>
          <h1 className="text-5xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Nos <GoldText>Réalisations</GoldText>
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: TEXT_MUTED }}>
            Découvrez nos derniers chantiers de couverture dans l'Eure (27) et les régions limitrophes. Chaque projet témoigne de notre engagement pour l'excellence artisanale.
          </p>
        </FadeInUp>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                backgroundColor: activeFilter === filter ? GOLD : 'transparent',
                color: activeFilter === filter ? BG : TEXT_MUTED,
                border: `1px solid ${activeFilter === filter ? GOLD : BORDER}`,
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <FadeInUp key={project.title} delay={i * 0.08}>
              <motion.div
                className="rounded-2xl overflow-hidden h-full"
                style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
                whileHover={{ y: -6, borderColor: GOLD }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.6) 0%, transparent 60%)' }} />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: 'rgba(181,154,93,0.2)', color: GOLD, backdropFilter: 'blur(8px)' }}>
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-lg mb-2" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: TEXT }}>
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm mb-3" style={{ color: GOLD }}>
                    <MapPin size={14} /> {project.location}
                  </p>
                  <p className="text-sm" style={{ color: TEXT_MUTED }}>{project.description}</p>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: TEXT_MUTED }}>
            Aucun projet dans cette catégorie pour le moment.
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 text-center" style={{ backgroundColor: CARD_BG }}>
        <FadeInUp>
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Votre Projet de <GoldText>Toiture</GoldText> ?
          </h2>
          <p className="mb-8 text-lg" style={{ color: TEXT_MUTED }}>
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>
          <a
            href="tel:+33784860715"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            style={{ backgroundColor: GOLD, color: BG }}
          >
            📞 07 84 86 07 15 — Devis Gratuit
          </a>
        </FadeInUp>
      </section>
    </div>
  );
}
