import ServicePage from "./ServicePage";

export default function RenovationToiture() {
  return (
    <ServicePage
      title="Rénovation Toiture Complète"
      subtitle="Rénovation et remplacement de toiture à Pacy-sur-Eure. Ardoise, tuile, zinc — tous matériaux, expertise garantie."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/76314d4e7_generated_991c3f90.png"
      serviceName="Rénovation Toiture"
      section1={{
        title: "Rénovation Partielle ou Complète",
        items: [
          "Remplacement de la charpente si nécessaire avec bois certifié",
          "Nouveaux matériaux nobles : ardoise naturelle, tuile terre cuite, zinc",
          "Isolation thermique intégrée pour des économies d'énergie",
          "Traitement préventif anti-mousse et hydrofuge",
          "Réfection complète de la zinguerie (gouttières, chéneaux, solins)",
          "Reprise des points singuliers : noues, faîtages, arêtiers",
        ],
      }}
      section2={{
        title: "Matériaux Nobles et Durables",
        items: [
          "Ardoise naturelle d'Angers : durée de vie 30 à 50 ans minimum",
          "Tuile terre cuite traditionnelle : esthétique et robustesse éprouvées",
          "Zinc naturel à joint debout : élégance et longévité incomparables",
          "Bac acier laqué : solution moderne et économique",
          "Isolation par l'extérieur ITEx pour un résultat thermique optimal",
          "Sous-toiture respirante haute performance",
        ],
      }}
      advantages={[
        { title: "Étude personnalisée gratuite", description: "Audit complet de votre toiture avant tout engagement." },
        { title: "Aide MaPrimeRénov disponible", description: "Nous vous accompagnons dans les démarches de subventions." },
        { title: "Isolation thermique incluse", description: "Profitez d'une rénovation globale pour des économies durables." },
        { title: "Garantie décennale", description: "Protection complète sur 10 ans après la fin des travaux." },
        { title: "Matériaux locaux privilégiés", description: "Approvisionnement régional pour des matériaux tracés et qualitatifs." },
        { title: "Suivi chantier quotidien", description: "Rapport photographique journalier envoyé par SMS ou email." },
      ]}
      faqs={[
        {
          question: "Quelle est la durée d'une rénovation de toiture ?",
          answer: "Selon la taille et la complexité du chantier, une rénovation complète dure de 3 jours à 3 semaines. Nous vous communiquons un planning précis lors du devis. Votre maison reste habitable pendant les travaux.",
        },
        {
          question: "Puis-je bénéficier des aides financières ?",
          answer: "Oui ! En tant qu'artisan RGE certifié, nous vous permettons d'accéder à MaPrimeRénov, aux Certificats d'Économies d'Énergie (CEE) et aux aides locales. Nous vous accompagnons dans toutes les démarches.",
        },
        {
          question: "Quelle différence entre ardoise et tuile ?",
          answer: "L'ardoise naturelle offre une esthétique haut de gamme et une longévité exceptionnelle (50+ ans). La tuile terre cuite est plus traditionnelle, chaleureuse et économique. Nous vous conseillons selon votre bien et budget.",
        },
        {
          question: "Ma toiture peut-elle être rénovée en hiver ?",
          answer: "Nous pouvons travailler par temps couvert, mais nous évitons les périodes de gel intense. Nous planifions les chantiers de rénovation selon la météo pour garantir la qualité des finitions.",
        },
      ]}
    />
  );
}
