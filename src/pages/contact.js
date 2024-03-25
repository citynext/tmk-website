import { useState } from "react";


export default function Contact() {
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setError("")
        setMessage("")
        setLoading(true)
        const input = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        }
        console.log(process.env.NEXT_PUBLIC_API_URL + '/contact/')
        fetch(process.env.NEXT_PUBLIC_API_URL + '/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        }).then(res => {
            if (res.ok) {
                setMessage("Votre message a bien été envoyé")
            } else {
                setError("Une erreur est survenue, veuillez réessayer")
            }
        }).catch(() => {
            setError("Une erreur est survenue, veuillez réessayer")
        }).finally(() => {
            setLoading(false)
        })
        e.preventDefault();
    }

    return (
        <main className='pt-32'>
            <h1 className="text-4xl font-semibold lg:mb-16 text-center">Contactez-nous</h1>
            <div className='flex flex-col md:flex-row justify-center p-4 gap-4 md:gap-8 md:p-8'>

                <div className="flex-1 flex flex-col items-end">
                    <iframe 
                        title="Siège Take My Keys"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5247.894514118173!2d2.307340791573014!3d48.87828199742399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb8223c18ed%3A0x1144769557471933!2s58%20Rue%20de%20Monceau%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1711363357521!5m2!1sfr!2sfr"
                        className='w-full h-full'
                        style={{border: 0}}
                        allowFullScreen 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='flex-1'>
                    <h2 className="text-xl font-bold mb-4">Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <label htmlFor="name" className="block mb-2">Nom:</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" />

                        <label htmlFor="email" className="block mb-2">Email:</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" />
                        
                        <label htmlFor="phone" className="block mb-2">Téléphone:</label>
                        <input type="phone" id="phone" name="phone" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" />

                        <label htmlFor="message" className="block mb-2">Message:</label>
                        <textarea id="message" rows={6} name="message" required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"></textarea>
                        {message && <p className="text-green-500">{message}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        <button disabled={loading} type="submit" className="px-4 py-2 bg-primary disabled:bg-primary-90 text-white rounded-md">Envoyer</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

Contact.navColor = 'bg-primary';