export default function BlogArticle({ article }) {
    return (
        <main className="pt-32 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-semibold mb-12">{article.title}</h1>
            <div dangerouslySetInnerHTML={{__html: article.content}}></div>
        </main>
    )
}

BlogArticle.navColor = "bg-primary"

export async function getStaticProps({ params }) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/blog/' + params.id)
    if (!res.ok) {
        throw new Error('Failed to fetch article')
    }
    const article = await res.json()
    return { 
        props: { article },
        revalidate: 60
    }
}


export async function getStaticPaths() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/blog/')
    if (!res.ok) {
        throw new Error('Failed to fetch articles')
    }   
    const articles = await res.json()
    const paths = articles.map((article) => ({
        params: { id: article.id.toString() }
    }))
    return { paths, fallback: false }
}