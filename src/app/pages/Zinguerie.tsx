import ServicePage from "./ServicePage";

export default function Zinguerie() {
  return (
    <ServicePage
      title="Zinguerie & Travaux de Zinc"
      subtitle="Artisan zingueur qualifié à Pacy-sur-Eure. Gouttières, chéneaux, solins, couverture zinc — tous travaux de zinguerie."
      heroImage="https://media.base44.com/images/public/6a1cafe7507b682b717f6091/9919e4137_generated_327d4954.png"
      serviceName="Zinguerie"
      section1={{
        title: "Expertise Zinguerie Complète",
        items: [
          "Pose et remplacement de gouttières zinc, aluminium et PVC",
          "Chéneaux et descentes pluviales sur mesure",
          "Solins et raccords étanches autour des cheminées, lucarnes et Velux",
          "Couverture zinc à joint debout — technique traditionnelle haut de gamme",
          "Bavettes d'acrotère et relevés de noue en zinc naturel",
          "Capots de cheminées et chapiteaux zinc sur mesure",
        ],
      }}
      section2={{
        title: "Zinc : Matériau Noble et Durable",
        items: [
          "Durée de vie exceptionnelle : 80 à 100 ans sans entretien majeur",
          "Entretien minimal grâce à sa résistance naturelle à la corrosion",
          "Esthétique incomparable avec sa patine naturelle gris bleuté",
          "Matériau 100% recyclable — très respectueux de l'environnement",
          "Naturellement antibactérien et résistant aux intempéries normandes",
          "Compatible avec tous les styles architecturaux : contemporain et traditionnel",
        ],
      }}
      advantages={[
        { title: "Artisan zingueur certifié", description: "Formation spécialisée en zinguerie traditionnelle et moderne." },
        { title: "Zinc naturel Rheinzink", description: "Nous utilisons exclusivement du zinc de qualité allemande Rheinzink." },
        { title: "Soudure à l'étain traditionnelle", description: "Technique ancestrale pour des assemblages parfaitement étanches." },
        { title: "Garantie étanchéité 10 ans", description: "Tous nos travaux de zinguerie sont couverts 10 ans." },
        { title: "Calcul dimensionnement pluvial", description: "Dimensionnement précis selon la surface de toiture et la pluviométrie." },
        { title: "Pose gouttières cuivre disponible", description: "Matériau premium disponible sur demande pour les biens d'exception." },
      ]}
      faqs={[
        {
          question: "Quelle est la durée de vie des gouttières zinc ?",
          answer: "Les gouttières en zinc naturel durent entre 50 et 80 ans avec peu d'entretien. Bien plus durables que le PVC (15-20 ans) ou l'aluminium (30-40 ans), elles représentent un excellent investissement à long terme.",
        },
        {
          question: "Quelle différence entre zinc, PVC et aluminium pour les gouttières ?",
          answer: "Le zinc est le matériau le plus noble et durable. L'aluminium est un bon compromis qualité-prix. Le PVC est le plus économique mais le moins durable. Nous vous conseillons selon votre budget et la nature de votre bien.",
        },
        {
          question: "Peut-on poser des gouttières en hiver ?",
          answer: "La pose est possible par temps froid mais nous évitons les températures inférieures à -5°C qui fragilisent les matériaux. Le zinc doit être plié à bonne température pour éviter la fissuration.",
        },
        {
          question: "Mes gouttières sont-elles bien dimensionnées pour ma toiture ?",
          answer: "Pas nécessairement. Un mauvais dimensionnement entraîne des débordements en cas de fortes pluies. Nous calculons précisément le débit pluvial de votre toiture pour adapter le diamètre des gouttières et descentes.",
        },
      ]}
    />
  );
}
