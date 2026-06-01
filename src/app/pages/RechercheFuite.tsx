import ServicePage from "./ServicePage";

export default function RechercheFuite() {
  return (
    <ServicePage
      title="Recherche de Fuite Toiture"
      subtitle="Détection précise de fuites et infiltrations à Pacy-sur-Eure. Intervention d'urgence 7j/7, diagnostic thermique disponible."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/7f21c6e43_generated_0d3a1a1b.png"
      serviceName="Recherche de Fuite"
      section1={{
        title: "Diagnostic Expert Multi-Méthodes",
        items: [
          "Inspection visuelle intérieure et extérieure complète",
          "Caméra thermique infrarouge pour localiser les ponts thermiques",
          "Test d'étanchéité par aspersion contrôlée",
          "Endoscopie dans les zones difficilement accessibles",
          "Analyse des traces d'humidité par hygromètre professionnel",
          "Cartographie précise des zones défaillantes avec rapport écrit",
        ],
      }}
      section2={{
        title: "Causes Fréquentes d'Infiltration",
        items: [
          "Tuiles cassées ou mal positionnées après vent ou gel",
          "Noues et faîtages défaillants — zones les plus exposées",
          "Solins et raccords dégradés autour des cheminées et lucarnes",
          "Gouttières obstruées débordant sur les murs et sous-toiture",
          "Joints de faîtière décollés laissant entrer la pluie oblique",
          "Condensation interne due à un manque de ventilation de la toiture",
        ],
      }}
      advantages={[
        { title: "Urgence 7j/7 disponible", description: "Intervention rapide même le week-end et les jours fériés." },
        { title: "Diagnostic thermique infrarouge", description: "Technologie de pointe pour localiser les fuites invisibles." },
        { title: "Rapport écrit détaillé", description: "Document complet avec photos pour votre assurance et garantie." },
        { title: "Réparation dans la foulée", description: "Nous réparons directement après le diagnostic pour un gain de temps." },
        { title: "Garantie étanchéité 2 ans", description: "Après intervention, l'étanchéité est garantie 2 ans minimum." },
        { title: "Intervention sous 4h en urgence", description: "Délai garanti pour les situations d'urgence déclarées." },
      ]}
      faqs={[
        {
          question: "Ma fuite est-elle visible depuis l'intérieur, puis-je identifier l'origine ?",
          answer: "Pas toujours. L'eau peut s'infiltrer en un point et ruisseler sur plusieurs mètres avant d'apparaître à l'intérieur. Notre caméra thermique localise précisément l'origine, même lorsque la fuite n'est pas directement visible.",
        },
        {
          question: "Combien coûte une recherche de fuite ?",
          answer: "Le diagnostic de base est offert lors de l'intervention. Appelez le 07 84 86 07 15 pour connaître les tarifs. En cas de réparation dans la foulée, le diagnostic est inclus dans la prestation.",
        },
        {
          question: "Puis-je utiliser le rapport pour mon assurance ?",
          answer: "Absolument. Notre rapport écrit avec photos est reconnu par les assureurs pour déclarer un sinistre eau. Nous indiquons clairement l'origine, l'étendue des dégâts et les travaux nécessaires.",
        },
        {
          question: "La fuite peut-elle venir de mes murs plutôt que du toit ?",
          answer: "Oui. Les infiltrations peuvent provenir des façades, des fenêtres, de la terrasse ou des fondations. Notre diagnostic distingue les origines de toiture des autres causes, pour une réparation ciblée et efficace.",
        },
      ]}
    />
  );
}
