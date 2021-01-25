import Head from 'next/head'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skill from '../components/sections/Skill'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Toggler from '../components/Toggler'

import { useTheme } from '../hooks/theme-hook'
import { ThemeContext } from '../context/theme-context'

export default function Home() {
  const { theme, isDark, themeChanger } = useTheme()
  return (
    <ThemeContext.Provider value={{ theme: theme, isDark: isDark, themeChanger: themeChanger }}>
      <Head>
        <title>Rayhan Naufal Ramadhan - Portfolio</title>
        <link rel="icon" href="/R.png" />
        <meta name="theme-color" content={isDark ? '#111827' : '#f3f4f6'} />
      </Head>
      <Toggler />
      <div className="all">
        <Hero />
        <div className="content">
          <div className="lg:max-w-7xl lg:mx-auto">
            <About />
            <Skill />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
