import { getPostBySlug } from '/lib/api'
import Contact from 'components/contact'

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}){
    return (
    <Container>
        <h1>{title}</h1>
    </Container>
    )
}


export async function getStaticProps() {
    const resPromise = client.get({
        endpoint: 'blogs',
    })

    try {
        const res = await resPromise
        console.log(res)
    } catch(err){
        console.log(err)
    }
    return {
        props: {},
    }
}