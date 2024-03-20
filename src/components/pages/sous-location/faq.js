import _Faq from "@/components/reusable/faq";

const questions = [
  {
    question: "Quelle est l'idée fondamentale qui anime Take My Keys ?",
    answer: "Notre service est totalement gratuit : nous gérons la sous-location de votre logement et nous nous finançons exclusivement par le biais des services facturés aux sous-locataires. En tant que client de Take My Keys, aucune commission ne vous sera prélevée et ce quel que soit le taux d'occupation. Vous êtes assuré de recevoir l'intégralité de votre loyer.",
  },
  {
    question: "Comment ça fonctione ?",
    answer: "Nous garantissons le paiement total du loyer et les frais de fonctionnement (électricité, gaz, internet…)  et prenons en charge toute la gestion du logement de manière gratuite, légale et sécurisée. Nous proposons l'appartement sur des plateformes de location à court terme telles que Airbnb ou Booking afin d'accueillir des professionnels et des touristes."
  },
  {
    question: "Qui peut bénéficier des services de Take My Keys ?",
    answer: "Take My Keys est destiné aux individus qui ont des projets de déplacement les contraignant à s'absenter de leur logement pendant plus de 2 semaines. Notre service s'adresse donc aussi bien aux locataires qu'aux propriétaires résidant dans Paris intra-muros."
  }
]

export default function Faq() {
  return <_Faq data={questions} />;
}
