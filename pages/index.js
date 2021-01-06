import Head from 'next/head'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skill from '../components/sections/Skill'
import Projects from '../components/sections/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rayhan Naufal Ramadhan - Portfolio</title>
        <link rel="icon" href="/R.png" />
      </Head>
      <Hero />
      <div className="content">
        <About />
        <Skill />
        <Projects />
      </div>
    </>
  )
}
