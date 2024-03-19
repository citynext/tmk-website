import Image from "next/image";
import hair1 from "@/../public/images/backgrounds/hair1.svg"
import hair2 from "@/../public/images/backgrounds/hair2.svg"
import Locataire from "@/components/pages/formulaire/result/locataire";
import NotAccepted from "@/components/pages/formulaire/result/not-accepted";
import Proprietaire from "@/components/pages/formulaire/result/proprietaire";

export default function Result(props) {
  const { estimation, rent, status, form, error } = props;
  let child = null;
  if (status === 422 && error === "NOT_ACCEPTED") {
    child =  <NotAccepted {...props} />;
  }
  else if (form.isOwner) {
    child = <Proprietaire {...props} />;
  }
  else {
    child = <Locataire {...props} />;
  }

  return (
    <main className="bg-third bg-opacity-30 min-h-screen">
      <Image src={hair1} alt="Background Image" className="absolute top-0 left-0 -z-[50]" />
      <Image src={hair2} alt="Background Image" className="absolute bottom-0 right-0 -z-[50]" />
      {child}
    </main>
  )
  
}

Result.getLayout = function getLayout(page) {
  return page;
};

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/estimation?id=" + context.query.id)
  const result = await res.json()
  return { props: {status: res.status, ...result }}
}