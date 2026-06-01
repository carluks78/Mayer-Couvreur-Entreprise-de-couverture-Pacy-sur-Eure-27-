import ServicePage from "./ServicePage";

export default function UrgenceToiture() {
  return (
    <ServicePage
      title="Urgence Toiture 24h/24 7j/7"
      subtitle="Couvreur d'urgence à Pacy-sur-Eure. Bâchage, sécurisation, réparation immédiate — intervention en moins de 4h dans l'Eure (27)."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/69f7dbef8_generated_0d3b57d7.png"
      serviceName="Urgence Toiture"
      isUrgence
      section1={{
        title: "Intervention d'Urgence Immédiate",
        items: [
          "Tempête et vents violents — tuiles envolées, faîtage emporté",
          "Infiltrations soudaines et dégâts des eaux actifs",
          "Chute d'arbre sur la toiture — sécurisation urgente",
          "Toiture endommagée après accident ou incendie",
          "Effondrement partiel de charpente — sécurisation immédiate",
          "Ouverture toiture ou zinguerie arrachée par le vent",
        ],
      }}
      section2={{
        title: "Notre Protocole d'Urgence",
        items: [
          "Appel au 07 84 86 07 15 — décroché 24h/24, 7j/7",
          "Départ de l'équipe sous 30 minutes après votre appel",
          "Sécurisation par bâchage professionnel haute résistance",
          "Diagnostic complet de l'étendue des dommages",
          "Devis sur place pour la réparation définitive",
          "Rapport de sinistre détaillé pour votre assureur",
        ],
      }}
      advantages={[
        { title: "Disponible 24h/24 7j/7", description: "Aucune exception : week-end, jours fériés, nuits — nous répondons." },
        { title: "Départ sous 30 minutes", description: "Notre équipe d'urgence est prête à intervenir à tout moment." },
        { title: "Bâchage professionnel", description: "Bâches haute résistance pour protéger votre bien immédiatement." },
        { title: "Rapport sinistre pour assurance", description: "Document détaillé reconnu par tous les assureurs français." },
        { title: "Intervention Eure (27) + limitrophes", description: "Toute l'Eure, Dreux, Rouen, Mantes — nous arrivons vite." },
        { title: "Tarif urgence transparent", description: "Tarification claire annoncée dès l'appel, sans surprise." },
      ]}
      faqs={[
        {
          question: "Appelez-vous vraiment à n'importe quelle heure ?",
          answer: "Oui, absolument. Notre permanence téléphonique au 07 84 86 07 15 répond 24h/24 et 7j/7, y compris la nuit, les week-ends et les jours fériés. Une toiture endommagée ne peut pas attendre.",
        },
        {
          question: "Le bâchage est-il suffisant pour protéger ma maison ?",
          answer: "En attendant la réparation définitive, oui. Nous utilisons des bâches professionnelles fixées solidement, résistantes aux intempéries normandes. Elles protègent efficacement votre bien pendant plusieurs semaines si nécessaire.",
        },
        {
          question: "Mon assurance couvre-t-elle les dommages ?",
          answer: "En général, les dégâts causés par la tempête sont couverts par votre assurance habitation (multirisque). Nous rédigeons un rapport de sinistre détaillé avec photos pour faciliter votre déclaration. Contactez votre assureur dans les 5 jours.",
        },
        {
          question: "Intervenez-vous hors de l'Eure (27) ?",
          answer: "Oui, nous intervenons également dans les départements limitrophes : Eure-et-Loir (28), Seine-Maritime (76), Yvelines (78) et Val-d'Oise (95). Appelez-nous pour confirmer notre délai d'intervention jusqu'à vous.",
        },
      ]}
    />
  );
}
