import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rayhan Naufal Ramadhan - Portfolio</title>
        <link rel="icon" href="/R.png" />
      </Head>
      <Hero />
      <div className="h-screen"></div>
    </>
  )
}
