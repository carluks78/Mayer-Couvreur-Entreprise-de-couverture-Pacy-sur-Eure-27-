import { ReactNode } from "react";
import { motion } from "motion/react";
import { Star, MapPin, ThumbsUp } from "lucide-react";

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

const reviews = [
  {
    name: "Marie L.",
    city: "Pacy-sur-Eure",
    stars: 5,
    date: "Novembre 2024",
    service: "Urgence Toiture",
    text: "Intervention rapide suite à une fuite urgente. Équipe professionnelle, travail soigné. Je recommande vivement Mayer Couverture ! Le diagnostic a été précis et la réparation définitive a été faite le lendemain matin. Très satisfaite.",
  },
  {
    name: "Pierre D.",
    city: "Vernon",
    stars: 5,
    date: "Octobre 2024",
    service: "Rénovation Toiture",
    text: "Rénovation complète de notre toiture en ardoise. Résultat impeccable, dans les délais et le budget prévu. Vraie expertise artisanale. L'équipe est propre, respectueuse et très professionnelle. Je recommande sans hésitation.",
  },
  {
    name: "Sophie M.",
    city: "Évreux",
    stars: 5,
    date: "Septembre 2024",
    service: "Pose Velux",
    text: "Pose de 3 Velux avec finitions parfaites. Devis transparent, équipe ponctuelle. Notre maison est transformée avec cette luminosité ! Travail soigné, aucune trace lors du chantier. Merci à toute l'équipe.",
  },
  {
    name: "Jean-Claude R.",
    city: "Louviers",
    stars: 5,
    date: "Août 2024",
    service: "Nettoyage Toiture",
    text: "Nettoyage et démoussage complet de notre longère normande. Résultat spectaculaire, prix très correct. Équipe sérieuse et efficace. La toiture semble rajeunir de 20 ans ! Traitement hydrofuge appliqué avec soin.",
  },
  {
    name: "Isabelle T.",
    city: "Gaillon",
    stars: 5,
    date: "Juillet 2024",
    service: "Urgence Toiture",
    text: "Réparation urgente après la tempête. Bâchage le soir même, réparation définitive le lendemain. Parfait, merci ! L'équipe est arrivée en moins de 2 heures. Rapport de sinistre fourni pour mon assurance, impeccable.",
  },
  {
    name: "François B.",
    city: "Les Andelys",
    stars: 4,
    date: "Juin 2024",
    service: "Zinguerie",
    text: "Bon travail de zinguerie, gouttières zinc posées proprement. Légèrement de retard sur le planning mais résultat final excellent. Les gouttières sont parfaitement alignées et le travail de soudure est soigné. Je reviendrai.",
  },
];

export default function Avis() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: '100vh' }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
        <FadeInUp>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: `rgba(181,154,93,0.1)`, color: GOLD, border: `1px solid rgba(181,154,93,0.25)` }}>
            Avis Clients
          </span>
          <h1 className="text-5xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Avis <GoldText>Clients</GoldText>
          </h1>
          <p className="max-w-xl mx-auto text-lg mb-10" style={{ color: TEXT_MUTED }}>
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur nos prestations de couverture dans l'Eure (27).
          </p>
        </FadeInUp>

        {/* Stats globales */}
        <FadeInUp delay={0.15}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 px-10 py-8 rounded-3xl mx-auto"
            style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
            <div className="text-center">
              <div className="text-5xl font-extrabold mb-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: GOLD }}>4.9</div>
              <div className="flex gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={GOLD} color={GOLD} />)}
              </div>
              <div className="text-sm" style={{ color: TEXT_MUTED }}>Note moyenne</div>
            </div>
            <div className="h-px sm:h-16 w-16 sm:w-px" style={{ backgroundColor: BORDER }} />
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: GOLD }}>127</div>
              <div className="text-sm" style={{ color: TEXT_MUTED }}>Avis Google</div>
            </div>
            <div className="h-px sm:h-16 w-16 sm:w-px" style={{ backgroundColor: BORDER }} />
            <div className="text-center">
              <div className="text-4xl font-extrabold mb-1 flex items-center gap-2" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: GOLD }}>
                <ThumbsUp size={28} style={{ color: GOLD }} /> 98%
              </div>
              <div className="text-sm" style={{ color: TEXT_MUTED }}>Recommandé</div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Avis */}
      <section className="pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <motion.div
                className="p-6 rounded-2xl h-full flex flex-col"
                style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
                whileHover={{ y: -4, borderColor: GOLD }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} size={16} fill={review.stars > j ? GOLD : 'transparent'} color={GOLD} />
                    ))}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(181,154,93,0.1)', color: GOLD }}>
                    {review.service}
                  </span>
                </div>
                <p className="flex-1 mb-5 leading-relaxed" style={{ color: TEXT_MUTED }}>"{review.text}"</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: TEXT }}>{review.name}</p>
                    <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: TEXT_MUTED }}>
                      <MapPin size={11} /> {review.city}
                    </p>
                  </div>
                  <span className="text-xs" style={{ color: TEXT_MUTED }}>{review.date}</span>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 text-center" style={{ backgroundColor: CARD_BG }}>
        <FadeInUp>
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Rejoignez Nos <GoldText>Clients Satisfaits</GoldText>
          </h2>
          <p className="mb-8 text-lg" style={{ color: TEXT_MUTED }}>
            Devis gratuit, intervention rapide, satisfaction garantie.
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
