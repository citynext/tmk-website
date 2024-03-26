import Image from "next/image"
import anonymous from "public/images/anonymous.jpeg"

export default function Blog({ articles }) {
    return (
        <main className="pt-32 min-h-screen">
            <h1>Blog</h1>
            <p>Welcome to my blog!</p>
            <ul className="grid grid-cols-3 m-12 gap-12">
                {articles.map((article, index) => (
                    <li key={index} className="border">
                        <Image src={process.env.NEXT_PUBLIC_API_URL + '/media/' + article.cover ?? anonymous} width={300} height={200} alt={article.id} />
                        <a href={`/blog/${article.id}`}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </main>
    )
}

Blog.navColor = "bg-primary"

export async function getStaticProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/blog/')
    if (!res.ok) {
        throw new Error('Failed to fetch articles')
    }
    const articles = await res.json()
    return { 
        props: { articles },
        revalidate: 60
    }
}