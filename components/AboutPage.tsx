import type { Settings } from 'lib/sanity.queries'
import Image from "next/image";
import Link from "next/link";

import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'

import Footer from './Footer'
import Navbar from './Navbar'


export interface AboutPageProps {
    preview?: boolean
    loading?: boolean
    settings: Settings
}

export default function AboutPage(props: AboutPageProps) {
    const { preview, loading, settings} = props
  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
        <Container>
          <Navbar/>
            <Container>
            <h1 className="mt-2 mb-3 text-3xl font-bold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl">
                About
            </h1>
            <div className="text-center">
                <p className="text-lg">So, you think this is another portfolio websites, right?</p>
            </div>

            <div className="gap-5 mt-6 mb-16 lg:mx-60 mx-12 md:mt-16 md:mb-16 md:gap-16">
                <div></div>
                <div className='relative overflow-hidden items-center aspect-square odd:translate-y-10 odd:md:translate-y-16'>
                    <Image
                            src="/images/about.jpg"
                            alt="Kevin"
                            fill
                            sizes="(min-width: 480px) 480px, 100vw"
                            className="object-cover"
                            />
                </div>
                <div></div>
            </div>
            

            <div className="mx-auto prose text-center dark:prose-invert mt-14 lg:px-52">
                <p>
                  You are (not) right. This is not another typical portfolio website.
                </p> <br></br>
                <p>
                  Jurnal Visual Kevin was born with the idea of creating a platform for me to share my thoughts. I believe that every picture, every poems, every
                  artwork has their own stories to tell. And this platform is the medium to tell those stories. Through this platform, I want to start a journey to dive into the corner of my mind,
                  to the edges of norms, to question everything, and to bring my ideas and yours to fruition.
                  </p> <br></br>
                  </div>
            </Container>
        </Container>
        <Footer/>
      </Layout>
    </>
    
  );
}