import ServicePage from "./ServicePage";

export default function ReparationToiture() {
  return (
    <ServicePage
      title="Réparation Toiture Pacy-sur-Eure"
      subtitle="Couvreur expert en réparation de toiture à Pacy-sur-Eure et dans tout l'Eure (27). Intervention rapide, diagnostic gratuit."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/69f7dbef8_generated_0d3b57d7.png"
      serviceName="Réparation Toiture"
      section1={{
        title: "Diagnostic et Réparation d'Urgence",
        items: [
          "Tuiles cassées ou déplacées après tempête ou vieillissement",
          "Faîtage endommagé laissant pénétrer l'eau",
          "Mousses et lichens détériorant les matériaux",
          "Infiltrations d'eau et dégâts des eaux",
          "Ardoises fêlées ou glissées nécessitant un remplacement",
          "Solins et raccords défaillants autour des cheminées et fenêtres",
        ],
      }}
      section2={{
        title: "Notre Processus d'Intervention",
        items: [
          "Inspection visuelle complète de votre toiture par drone si nécessaire",
          "Rapport détaillé avec photos avant/après de chaque anomalie",
          "Réparation qualitative avec des matériaux certifiés NF",
          "Vérification de l'étanchéité complète après intervention",
          "Nettoyage du chantier et évacuation des déchets",
          "Compte-rendu d'intervention remis au client",
        ],
      }}
      advantages={[
        { title: "Intervention sous 48h", description: "Réactivité maximale pour protéger votre habitation rapidement." },
        { title: "Diagnostic visuel offert", description: "Évaluation gratuite et sans engagement de l'état de votre toiture." },
        { title: "Matériaux certifiés NF", description: "Utilisation exclusive de matériaux de qualité homologués." },
        { title: "Garantie travaux 10 ans", description: "Tous nos travaux de réparation bénéficient de la garantie décennale." },
        { title: "Photos avant/après", description: "Transparence totale avec un suivi photo complet du chantier." },
        { title: "Devis transparent", description: "Devis gratuit, détaillé et sans surprise. Aucun coût caché." },
      ]}
      faqs={[
        {
          question: "Combien coûte une réparation de toiture ?",
          answer: "Le coût varie selon l'étendue des dommages et les matériaux utilisés. Appelez-nous au 07 84 86 07 15 pour un devis gratuit et personnalisé. Nous vous garantissons la transparence des prix.",
        },
        {
          question: "Intervenez-vous après une tempête ?",
          answer: "Oui, nous intervenons en urgence après les tempêtes pour sécuriser votre toiture. Bâchage immédiat si nécessaire, puis réparation définitive dans les meilleurs délais. Nous rédigeons aussi les rapports pour les assurances.",
        },
        {
          question: "Réparez-vous tous types de toitures ?",
          answer: "Oui, nous intervenons sur tous types de couvertures : ardoise, tuile terre cuite, tuile béton, zinc, bac acier. Nos artisans sont qualifiés pour tous les matériaux traditionnels et modernes.",
        },
        {
          question: "Faites-vous des réparations d'urgence ?",
          answer: "Absolument ! Nous disposons d'une équipe d'urgence disponible 24h/24 et 7j/7. Appelez le 07 84 86 07 15 pour une intervention immédiate dans l'Eure (27) et les départements limitrophes.",
        },
      ]}
    />
  );
}
