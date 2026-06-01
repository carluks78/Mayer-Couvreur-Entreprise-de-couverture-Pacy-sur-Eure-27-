import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  Phone, Shield, Award, Star, ChevronDown, ChevronUp,
  Wrench, Home, Droplets, Search, Zap, Sun, AlertTriangle,
  CheckCircle, MapPin, Clock
} from "lucide-react";

const GOLD = '#B59A5D';
const GOLD_LIGHT = '#D4B76A';
const BG = '#0A0A0B';
const CARD_BG = '#1C1E20';
const BORDER = 'rgba(181,154,93,0.15)';
const TEXT = '#F5F5F7';
const TEXT_MUTED = 'rgba(245,245,247,0.65)';

function GoldSeparator() {
  return (
    <div className="h-px w-full my-2" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
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

function GoldText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={className} style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const servicesData = [
  {
    icon: <Wrench size={28} />,
    label: "Réparation Toiture",
    path: "/reparation-toiture",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/69f7dbef8_generated_0d3b57d7.png",
    desc: "Tuiles, ardoises, faîtages — réparation rapide et durable.",
  },
  {
    icon: <Home size={28} />,
    label: "Rénovation Toiture",
    path: "/renovation-toiture",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/76314d4e7_generated_991c3f90.png",
    desc: "Remplacement complet ou partiel, tous matériaux nobles.",
  },
  {
    icon: <Droplets size={28} />,
    label: "Nettoyage Toiture",
    path: "/nettoyage-toiture",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png",
    desc: "Démoussage, traitement biocide, hydrofuge longue durée.",
  },
  {
    icon: <Search size={28} />,
    label: "Recherche de Fuite",
    path: "/recherche-fuite",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/7f21c6e43_generated_0d3a1a1b.png",
    desc: "Diagnostic thermique infrarouge, intervention 7j/7.",
  },
  {
    icon: <Zap size={28} />,
    label: "Zinguerie",
    path: "/zinguerie",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/9919e4137_generated_327d4954.png",
    desc: "Gouttières, chéneaux, solins, couverture zinc à joint debout.",
  },
  {
    icon: <Sun size={28} />,
    label: "Pose Velux",
    path: "/pose-velux",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png",
    desc: "Installateur certifié, finitions parfaites, étanchéité garantie.",
  },
  {
    icon: <AlertTriangle size={28} />,
    label: "Urgence Toiture",
    path: "/urgence-toiture",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/69f7dbef8_generated_0d3b57d7.png",
    desc: "Intervention en moins de 4h, 24h/24 et 7j/7.",
    isUrgence: true,
  },
];

const realisations = [
  {
    title: "Rénovation Ardoise — Paris 16ème",
    type: "Rénovation",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/76314d4e7_generated_991c3f90.png",
  },
  {
    title: "Zinguerie Zinc — Versailles",
    type: "Zinguerie",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/9919e4137_generated_327d4954.png",
  },
  {
    title: "Pose Velux — Boulogne",
    type: "Velux",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png",
  },
  {
    title: "Toiture Complète — Neuilly",
    type: "Rénovation",
    image: "https://media.base44.com/images/public/6a1cafe7507b682b717f6091/15d54b76e_generated_73ed439c.png",
  },
];

const testimonials = [
  {
    name: "Marie L.",
    city: "Pacy-sur-Eure",
    stars: 5,
    text: "Intervention rapide suite à une fuite urgente. Équipe professionnelle, travail soigné. Je recommande vivement Mayer Couverture !",
  },
  {
    name: "Pierre D.",
    city: "Vernon",
    stars: 5,
    text: "Rénovation complète de notre toiture en ardoise. Résultat impeccable, dans les délais et le budget prévu. Vraie expertise artisanale.",
  },
  {
    name: "Sophie M.",
    city: "Évreux",
    stars: 5,
    text: "Pose de 3 Velux avec finitions parfaites. Devis transparent, équipe ponctuelle. Notre maison est transformée avec cette luminosité !",
  },
];

const zones = [
  {
    title: "Secteur Pacy-sur-Eure",
    badge: "Principal",
    cities: ["Pacy-sur-Eure", "Ézy-sur-Eure", "Ménilles", "Heudreville-sur-Eure", "La Croix-Saint-Leufroy", "Hardencourt-Cocherel", "Bouafles", "Saint-Pierre-la-Garenne"],
  },
  {
    title: "Secteur Vernon & Giverny",
    cities: ["Vernon", "Giverny", "Gasny", "Saint-Marcel", "Pressagny-l'Orgueilleux", "Douains", "Venables", "Fontaine-sous-Jouy"],
  },
  {
    title: "Secteur Évreux & Louviers",
    cities: ["Évreux", "Louviers", "Gaillon", "Val-de-Reuil", "Pont-de-l'Arche", "Les Andelys", "Fleury-sur-Andelle"],
  },
  {
    title: "Départements Limitrophes",
    cities: ["Dreux (28)", "Chartres (28)", "Rouen (76)", "Elbeuf (76)", "Mantes-la-Jolie (78)", "Houdan (78)"],
  },
];

const faqs = [
  {
    q: "Intervenez-vous en urgence ?",
    a: "Oui, nous intervenons 24h/24 et 7j/7 pour toutes les urgences toiture dans l'Eure (27). Appelez le 07 84 86 07 15.",
  },
  {
    q: "Quelle garantie sur vos travaux ?",
    a: "Tous nos travaux bénéficient de la garantie décennale obligatoire, ainsi que d'une garantie de parfait achèvement d'un an.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Appelez-nous au 07 84 86 07 15 ou utilisez le formulaire de contact. Devis gratuit et sans engagement sous 24h.",
  },
  {
    q: "Quelles zones couvrez-vous ?",
    a: "Nous intervenons principalement à Pacy-sur-Eure et dans tout l'Eure (27) : Vernon, Évreux, Louviers, Gaillon, Les Andelys et communes limitrophes.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: BG, color: TEXT }}>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')" }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${BG} 0%, rgba(10,10,11,0.85) 50%, rgba(10,10,11,0.4) 100%)` }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `rgba(181,154,93,0.15)`, color: GOLD, border: `1px solid rgba(181,154,93,0.3)` }}>
              Couvreur Expert — Pacy-sur-Eure (27)
            </span>
          </motion.div>

          <motion.h1
            className="mb-6"
            style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, fontWeight: 900 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span style={{ color: TEXT }}>L'Art de la Couverture</span>
            <br />
            <GoldText>d'Excellence</GoldText>
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
            style={{ color: TEXT_MUTED }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Artisans couvreurs certifiés à Pacy-sur-Eure. Réparation, rénovation, urgence toiture — intervention rapide dans tout l'Eure (27) et régions limitrophes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 hover:-translate-y-1"
              style={{ backgroundColor: GOLD, color: BG }}
            >
              <Phone size={18} /> Devis Gratuit — 07 84 86 07 15
            </a>
            <a
              href="tel:+33784860715"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:-translate-y-1"
              style={{ border: `2px solid ${GOLD}`, color: GOLD }}
            >
              <Phone size={18} /> Appeler Maintenant
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['Garantie Décennale', 'Couvreur Eure (27)', 'Devis Gratuit', 'Intervention Rapide'].map((badge) => (
              <span key={badge} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: TEXT, border: '1px solid rgba(255,255,255,0.15)' }}>
                ✓ {badge}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { target: 15, suffix: "+", label: "Années d'expérience" },
              { target: 500, suffix: "+", label: "Toitures réalisées" },
              { target: 98, suffix: "%", label: "Satisfaction client" },
              { target: 24, suffix: "h", label: "Intervention d'urgence" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl" style={{ backgroundColor: 'rgba(28,30,32,0.8)', backdropFilter: 'blur(20px)', border: BORDER }}>
                <div className="text-3xl font-extrabold mb-1" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: GOLD }}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs" style={{ color: TEXT_MUTED }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeInUp>
            <SectionBadge>Nos Services</SectionBadge>
            <h2 className="text-4xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              Des Solutions Complètes <GoldText>pour Votre Toiture</GoldText>
            </h2>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, i) => (
            <FadeInUp key={service.path} delay={i * 0.05}>
              <Link to={service.path} className="group block h-full">
                <motion.div
                  className="h-full rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
                  whileHover={{ y: -4, borderColor: GOLD }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {service.isUrgence && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        24h/24 - 7j/7
                      </div>
                    )}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.7) 0%, transparent 60%)' }} />
                  </div>
                  <div className="p-5">
                    <div className="mb-3" style={{ color: service.isUrgence ? '#ef4444' : GOLD }}>
                      {service.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-[#F5F5F7]" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                      {service.label}
                    </h3>
                    <p className="text-sm" style={{ color: TEXT_MUTED }}>{service.desc}</p>
                    <div className="mt-3 text-xs font-semibold" style={{ color: service.isUrgence ? '#ef4444' : GOLD }}>
                      En savoir plus →
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* À PROPOS APERÇU */}
      <section className="py-24" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div className="relative">
                <img
                  src="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/2ae972c8e_generated_98c9b8c0.png"
                  alt="Artisan couvreur Mayer Couverture"
                  className="w-full rounded-2xl object-cover"
                  style={{ height: '480px' }}
                />
                <div
                  className="absolute -bottom-6 -right-6 px-5 py-3 rounded-xl"
                  style={{ backgroundColor: GOLD, color: BG }}
                >
                  <p className="font-extrabold text-lg" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>15+</p>
                  <p className="text-xs font-semibold">Années d'expertise</p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <SectionBadge>À Propos</SectionBadge>
              <h2 className="text-3xl font-extrabold mb-6" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                Artisans Couvreurs <GoldText>de Confiance</GoldText>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: TEXT_MUTED }}>
                Fondée il y a plus de 15 ans dans le cœur de l'Eure, Mayer Couverture est née d'une passion pour l'artisanat traditionnel et d'un engagement envers l'excellence.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Shield size={20} />, title: "Garantie Décennale", desc: "Protection 10 ans" },
                  { icon: <Award size={20} />, title: "Artisans Certifiés RGE", desc: "15 ans d'expérience" },
                  { icon: <Star size={20} />, title: "98% de satisfaction", desc: "127 avis clients" },
                  { icon: <CheckCircle size={20} />, title: "Savoir-Faire Artisanal", desc: "Compagnons du Devoir" },
                ].map((feat, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ backgroundColor: 'rgba(181,154,93,0.06)', border: `1px solid ${BORDER}` }}>
                    <div style={{ color: GOLD }}>{feat.icon}</div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: TEXT }}>{feat.title}</p>
                      <p className="text-xs" style={{ color: TEXT_MUTED }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                style={{ color: GOLD }}
              >
                En savoir plus sur Mayer Couverture →
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeInUp>
            <SectionBadge>Nos Réalisations</SectionBadge>
            <h2 className="text-4xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              Nos Derniers <GoldText>Chantiers</GoldText>
            </h2>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realisations.map((r, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: '260px' }}
                whileHover={{ y: -4 }}
              >
                <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,11,0.85) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: 'rgba(181,154,93,0.25)', color: GOLD }}>
                    {r.type}
                  </span>
                  <h3 className="font-bold text-white text-sm" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>{r.title}</h3>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ border: `2px solid ${GOLD}`, color: GOLD }}
          >
            Voir toutes nos réalisations →
          </Link>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <FadeInUp>
              <SectionBadge>Avis Clients</SectionBadge>
              <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
                Ce Que Disent <GoldText>Nos Clients</GoldText>
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={GOLD} color={GOLD} />
                  ))}
                </div>
                <span className="font-bold text-xl" style={{ color: GOLD }}>4.9/5</span>
                <span style={{ color: TEXT_MUTED }}>— 127 avis</span>
              </div>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl h-full" style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={16} fill={GOLD} color={GOLD} />
                    ))}
                  </div>
                  <p className="mb-5 leading-relaxed" style={{ color: TEXT_MUTED }}>"{t.text}"</p>
                  <div>
                    <p className="font-semibold" style={{ color: TEXT }}>{t.name}</p>
                    <p className="text-sm flex items-center gap-1" style={{ color: TEXT_MUTED }}>
                      <MapPin size={12} /> {t.city}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/avis" className="inline-flex items-center gap-2 font-semibold" style={{ color: GOLD }}>
              Voir tous les avis →
            </Link>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeInUp>
            <SectionBadge>Zone d'Intervention</SectionBadge>
            <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
              Eure (27) et <GoldText>Régions Limitrophes</GoldText>
            </h2>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <div className="p-6 rounded-2xl h-full" style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={18} style={{ color: GOLD }} />
                  <h3 className="font-bold text-sm" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: TEXT }}>
                    {zone.title}
                  </h3>
                  {zone.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(181,154,93,0.15)', color: GOLD }}>
                      {zone.badge}
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5">
                  {zone.cities.map((city) => (
                    <li key={city} className="text-sm" style={{ color: TEXT_MUTED }}>• {city}</li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: CARD_BG }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
                    <span className="font-semibold pr-4" style={{ color: TEXT, fontFamily: "'Schibsted Grotesk', sans-serif" }}>{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={18} style={{ color: GOLD }} /> : <ChevronDown size={18} style={{ color: GOLD }} />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-2" style={{ backgroundColor: 'rgba(181,154,93,0.04)', color: TEXT_MUTED }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 sm:px-6 text-center" style={{ background: `linear-gradient(135deg, ${BG} 0%, rgba(181,154,93,0.06) 50%, ${BG} 100%)` }}>
        <FadeInUp>
          <SectionBadge>Devis Gratuit</SectionBadge>
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}>
            Besoin d'un <GoldText>Expert Couvreur ?</GoldText>
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-lg" style={{ color: TEXT_MUTED }}>
            Obtenez votre devis gratuit en quelques minutes. Couvreur à Pacy-sur-Eure, intervention rapide dans tout l'Eure (27).
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
