import Button from "@/components/form/button";
import Link from "next/link";

export default function NotAccepted({ rent, estimation, form }) {
    return (
        <div className="w-full flex flex-col items-center px-12 py-24 pt-42">
            <h1 className="text-secondary text-center text-3xl font-semibold max-w-[30rem]">Nous ne sommes pas encore présent dans la ville de <span className="whitespace-nowrap">{form.city}</span></h1>
            <p className="my-12 max-w-[50rem] text-center text-lg">Nous sommes navrés, notre service n'est pas encore présent dans votre ville. Nous vous remercions pour l'intérêt que vous portez à notre service, et nous tâcherons de revenir vers vous dès que nous serons présent dans votre ville</p>
            <p className="text-center text-lg">En attendant, vous pouvez toujours nous contacter pour plus d'informations</p>
            <Link className="mt-12" href="/"><Button>Contactez-nous</Button></Link>
        </div>
    )
}

NotAccepted.getLayout = function getLayout(page) {
    return page;
};