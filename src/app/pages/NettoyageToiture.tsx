import ServicePage from "./ServicePage";

export default function NettoyageToiture() {
  return (
    <ServicePage
      title="Nettoyage & Démousse Toiture"
      subtitle="Service professionnel de nettoyage et démoussage toiture à Pacy-sur-Eure. Traitements hydrofuges, préservation de vos matériaux."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/aa0d2bd29_generated_3d41bef6.png"
      serviceName="Nettoyage Toiture"
      section1={{
        title: "Nettoyage Professionnel Multi-Techniques",
        items: [
          "Démoussage manuel haute précision pour préserver les tuiles",
          "Traitement biocide anti-mousses et anti-algues certifié",
          "Application hydrofuge longue durée (protection 5 à 7 ans)",
          "Nettoyage basse pression adapté à chaque type de matériau",
          "Élimination des lichens, mousses et végétaux parasites",
          "Traitement des joints et faîtages pour une étanchéité parfaite",
        ],
      }}
      section2={{
        title: "Pourquoi Entretenir Régulièrement ?",
        items: [
          "La mousse retient l'humidité et détériore progressivement les tuiles",
          "Les lichens pénètrent dans les matériaux poreux et les fissurent",
          "Un nettoyage régulier augmente la durée de vie de 10 à 15 ans",
          "La toiture propre permet de détecter les anomalies en amont",
          "Les gouttières bouchées risquent de déborder et d'infiltrer les murs",
          "Un entretien préventif coûte 5x moins qu'une rénovation forcée",
        ],
      }}
      advantages={[
        { title: "Produits écologiques certifiés", description: "Traitements respectueux de l'environnement et de vos jardins." },
        { title: "Technique adaptée au matériau", description: "Basse pression, brushing ou traitement chimique selon les besoins." },
        { title: "Inspection toiture offerte", description: "Diagnostic complet de l'état général lors du nettoyage." },
        { title: "Traitement anti-repousse 5-7 ans", description: "Protection longue durée contre le retour des mousses." },
        { title: "Pas d'eau haute pression", description: "Nos techniques douces préservent l'intégrité de vos matériaux." },
        { title: "Gouttières nettoyées incluses", description: "Nettoyage des gouttières et descentes pluviales compris dans la prestation." },
      ]}
      faqs={[
        {
          question: "À quelle fréquence faut-il nettoyer sa toiture ?",
          answer: "En Normandie avec son climat humide, nous recommandons un nettoyage tous les 5 à 8 ans. Après traitement hydrofuge, la protection dure 5 à 7 ans. Nous effectuons une inspection annuelle gratuite pour nos clients fidèles.",
        },
        {
          question: "Le nettoyage haute pression est-il dangereux pour ma toiture ?",
          answer: "Oui ! La haute pression peut endommager les tuiles, déplacer les ardoises et dégrader les joints. Nous utilisons uniquement la basse pression et le brushing manuel pour préserver vos matériaux.",
        },
        {
          question: "Le traitement hydrofuge est-il efficace ?",
          answer: "Absolument. Notre traitement hydrofuge pénètre dans les pores du matériau et repousse l'eau pendant 5 à 7 ans. Il protège contre les mousses, lichens, algues et le gel en hiver.",
        },
        {
          question: "Mon jardin sera-t-il protégé durant le traitement ?",
          answer: "Oui. Nous utilisons des produits biocides certifiés non toxiques pour les végétaux. Nous bâchons aussi les plantations sensibles et rinçons les surfaces environnantes après traitement.",
        },
      ]}
    />
  );
}
