import _Hero from "@/components/reusable/hero";
import heroImg from "@/../public/images/sous-location/hero.png";


export default function Hero() {
  return (
    <_Hero bgImg={heroImg}>
        <div className="">
            <h1 className="">Sous-louer son appartement</h1>
            <h1>Maximisez vos gains avec TAKE MY KEYS pour les Locataires</h1>
            <p className="">Confiez-nous votre appartement en toute confiance et commencez à récolter dès maintenant</p>
        </div>
    </_Hero>
  );
}