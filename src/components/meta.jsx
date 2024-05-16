import Head from "next/head"
import { siteMeta } from "../../lib/constants"
import { useReducer } from "react"
const { siteTitle, siteDesc, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc }) {
    const title = pageTitle ? 'けんご | やまき' : siteTitle
    const desc = pageDesc ?? siteDesc

    const router = useReducer()
    const url = '${siteUrl}${router.asPath}'

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url"content={url} />

            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />

        </Head>
    )
}