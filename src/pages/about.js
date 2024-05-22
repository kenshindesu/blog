import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from '/images/about.jpg'

export default function About() {
    return  (
        <Container>
            <Meta pageTitle="アバウト"
             pageDesc="About development activities"
             pageImg={eyecatch.src}
             pageImgW={eyecatch.width}
             pageImgH={eyecatch.height}
              />
            
            <Hero title="About" subtitle="[ソーシャル]" />
        
        <figure>
            <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            />
        </figure>
            <TwoColumn>
                <TwoColumnMain>           
        <PostBody>
            <p>ああああああああああああああああああああああああああ
                ああああああああああああああああああああああああああああ
                ああああああああああああああああああああああああああ
            </p>
            <h2>aaaaaaaaaaaaaaaaa</h2>
            <p>asjiowhiwiwiwhdiwhdi</p>
            <h3>くぇｒちゅいおｋｊｈｂｖｃ</h3>
         </PostBody>
         </TwoColumnMain>
         <TwoColumnSidebar>
        <Contact />
        </TwoColumnSidebar>
        </TwoColumn>
     </Container>
    )
}