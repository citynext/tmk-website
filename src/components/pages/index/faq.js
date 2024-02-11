import Link from 'next/link'
import { useState } from 'react'

const questions = [
    {
        question: "Qu'est-ce que le Lorem Ipsum?",
        answer: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
    },
    {
        question: "Pourquoi l'utiliser?",
        answer: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."
    },
    {
        question: "Où puis-je",
        answer: "Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles."
    },
]


export default function Faq() {
    const [expanded, setExpanded] = useState(questions.map(q => false))
    const toggle = (i) => {
        let newExpanded = [...expanded]
        newExpanded[i] = !newExpanded[i]
        setExpanded(newExpanded)
    }
    return (
        <section className='mb-60'>
            <div className="flex flex-col ">
                <h1 className="text-4xl font-bold text-center">Réponses à vos questions</h1>
                <p className="text-gray-500 my-5 text-xl text-center">Besoin d&apos;aide ? <Link href="/faq" className="text-secondary">Posez votre question ici !</Link></p>
            </div>
            <ul className='flex flex-col justify-center items-stretch max-w-[50rem] mx-auto'>
                {questions.map((q, i) => (
                    <li key={i} className="bg-white flex flex-col justify-between items-center my-5 border-2 rounded-lg border-primary">
                        <div className='flex justify-between items-center w-full pl-5'>
                            <span className=" bg-white text-xl rounded-3xl mx-5 my-3">{i}.</span>
                            <h2 className="flex-1 text-2xl">{q.question}</h2>
                            <button className={`${expanded[i] ? 'bg-third' :'text-white bg-primary'} text-xl px-5 py-3`} onClick={() => toggle(i)}>{expanded[i] ? '-' : '+'}</button>
                        </div>
                        <p className={`text-gray-500 mx-24 my-5 ${expanded[i] ? '' : 'hidden'}`}>{q.answer}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
