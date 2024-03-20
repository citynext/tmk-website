import _Faq from "@/components/reusable/faq";

const questions = [
  { 
    question: "Combien puis-je gagner en louant mon appartement avec Take My Keys ?",
    answer: "Le montant exact des gains dépend des caractéristiques spécifiques de votre propriété. Cependant, nous pouvons vous garantir une augmentation de vos revenus ! Dès notre première interaction, notre équipe chez Take My Keys vous fournira une estimation des gains potentiels. Cette estimation est offerte gratuitement et à titre indicatif, afin de vous aider à évaluer les avantages des services de conciergerie et de gestion locative de Take My Keys pour votre investissement immobilier locatif.<br />Chez Take My Keys, nous optimisons la visibilité de votre propriété en ligne, en sélectionnant toujours les meilleures plateformes pour la promouvoir (comme Airbnb, HomeAway et Booking.com), et nous ajustons dynamiquement vos tarifs. Cela signifie que le prix de location de votre propriété variera en fonction de divers facteurs tels que les jours de la semaine, la disponibilité des propriétés voisines à louer à ce moment-là, les événements locaux, etc. Tous ces éléments garantissent que vos tarifs sont aussi compétitifs que possible, tant pour vous que pour vos clients. En conséquence, nous sommes en mesure d'augmenter de manière significative votre taux d'occupation, ainsi que votre revenu moyen par nuit, pouvant améliorer vos revenus locatifs annuels jusqu'à +25 % en moyenne.<br />Pour obtenir votre estimation gratuite, il vous suffit de nous contacter via notre formulaire d'estimation de revenus ; cela ne prend que 2 minutes !"
  },
  {
    question: "À qui s'adresse le service de conciergerie Take My Keys ?",
    answer: "Take My Keys s'adresse aux propriétaires dont les biens sont partiellement ou totalement vacants pendant une année. Ces propriétés doivent être disponibles à la location pour de courts séjours, être en conformité avec toutes les réglementations, être bien entretenues, entièrement équipées et meublées. En confiant votre propriété à Take My Keys, vous bénéficierez d'une tranquillité d'esprit accrue, d'une réduction des tracas à gérer, et votre propriété sera plus rentable. Take My Keys prend en charge toutes les tâches pour vous. Pour en avoir la certitude, nous vous encourageons à consulter notre liste de services de gestion locative. Chacun des 15 services présentés est inclus par défaut dans notre offre de Gestion Complète. De plus, votre présence sur place n'est plus nécessaire : avec la gestion complète, nos concierges se chargent des actions sur le terrain en votre nom, telles que l'accueil des voyageurs, la gestion des départs, l'assistance et le dépannage, sans frais supplémentaires pour vous."
  },
  {
    question: "Quel est le processus de sélection des locataires ?",
    answer: "Nous attachons une grande importance à la sélection des locataires. Sur les plateformes de location courte durée, nous nous assurons que vos futurs locataires possèdent des évaluations positives. Si ces visiteurs n'ont pas d'évaluations, nous les contactons par téléphone pour confirmer qu'ils correspondent aux spécificités de votre résidence. Chaque visiteur est tenu de verser une caution pour son séjour. Bien entendu, votre concierge privé est attentif à vos préférences pour garantir que le profil des locataires soit en adéquation avec vos attentes. De notre côté, notre expérience nous permet de pré-vérifier les profils afin de minimiser les imprévus et de vous assurer une gestion locative sereine grâce au professionnalisme de nos conciergeries."
  }
]

export default function Faq() {
  return <_Faq data={questions} />;
}
