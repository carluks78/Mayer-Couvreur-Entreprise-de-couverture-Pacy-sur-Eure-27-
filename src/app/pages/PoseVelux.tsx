import ServicePage from "./ServicePage";

export default function PoseVelux() {
  return (
    <ServicePage
      title="Pose & Installation Velux"
      subtitle="Installateur Velux certifié à Pacy-sur-Eure. Fenêtres de toit, pose et remplacement, finitions parfaites garanties."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png"
      serviceName="Pose Velux"
      section1={{
        title: "Installation Velux Certifiée",
        items: [
          "Tous modèles Velux, Fakro, Roto — pose et remplacement",
          "Raccordement étanche garanti avec solin d'étanchéité adapté",
          "Finitions intérieures soignées : tablette, embrasure, habillage",
          "Volets roulants, stores et moustiquaires posés",
          "Intégration parfaite dans la couverture existante",
          "Conseil personnalisé sur le positionnement optimal pour la luminosité",
        ],
      }}
      section2={{
        title: "Gammes et Options",
        items: [
          "Fenêtres fixes ou ouvrantes : rotation, projection, à rotation mixte",
          "Velux électriques télécommandés et connectés (compatible domotique)",
          "Volets roulants et stores intégrés motorisés",
          "Double ou triple vitrage thermique et acoustique",
          "Verre anti-chaleur pour les orientations sud et ouest",
          "Fenêtres de toiture pour sorties en toiture et accès toiture",
        ],
      }}
      advantages={[
        { title: "Installateur certifié Velux", description: "Agrément officiel Velux pour une pose selon les standards du fabricant." },
        { title: "Garantie fabricant conservée", description: "Notre certification préserve la garantie constructeur de 10 ans." },
        { title: "Étanchéité garantie 10 ans", description: "Le raccordement étanche de nos poses est garanti une décennie." },
        { title: "Finitions intérieures comprises", description: "Embrasures, tableaux et tablettes inclus dans notre prestation." },
        { title: "Aide MaPrimeRénov possible", description: "Double vitrage éligible aux aides à la rénovation énergétique." },
        { title: "Pose en 1 journée", description: "Intervention rapide et propre — votre Velux posé en une journée." },
      ]}
      faqs={[
        {
          question: "Quelle taille de Velux choisir pour ma chambre ?",
          answer: "La règle est d'avoir une surface vitrée minimum égale à 1/6 de la surface de la pièce. Nous vous conseillons sur place lors du devis gratuit, en tenant compte de l'orientation, l'usage et les contraintes de charpente.",
        },
        {
          question: "Ma toiture peut-elle accueillir un Velux ?",
          answer: "La grande majorité des toitures peuvent recevoir un Velux, quelle que soit la pente (de 15° à 90°). Seules quelques configurations atypiques nécessitent des adaptations. Nous évaluons cela lors de notre visite gratuite.",
        },
        {
          question: "La pose d'un Velux crée-t-elle une fuite ?",
          answer: "Non, si la pose est réalisée par un artisan certifié. Notre solin d'étanchéité adapté et notre technique de raccordement garantissent une étanchéité parfaite pendant 10 ans, même par temps de tempête.",
        },
        {
          question: "Combien coûte la pose d'un Velux ?",
          answer: "Le tarif dépend du modèle, de la taille et des options choisies. Appelez le 07 84 86 07 15 pour un devis gratuit. Comptez généralement entre 800€ et 2500€ pose comprise, selon les caractéristiques.",
        },
      ]}
    />
  );
}
