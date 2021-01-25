import React, { useContext, useState, useEffect, useCallback } from 'react'
import Toggle from 'react-toggle'

import { ThemeContext } from '../context/theme-context'

const Toggler = () => {
    const [navVisible, setNavVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(typeof window !== 'undefined' && window.pageYOffset)

    const handleScroll = useCallback(() => {
        const currentScrollPos = typeof window !== 'undefined' && window.pageYOffset
        const visible = prevScrollPos > currentScrollPos

        if (currentScrollPos > 250) {
            setNavVisible(visible)
        }

        setPrevScrollPos(currentScrollPos)
    }, [prevScrollPos])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    const theme = useContext(ThemeContext)

    return (
        <div className="toggle-button transition ease-in duration-200" style={{ transform: !navVisible && 'translateY(-150px)' }}>
            <Toggle 
                className="react-toggle"
                checked={theme.isDark} 
                onChange={theme.themeChanger}
                icons={{
                    checked: "🌜",
                    unchecked: "🌞"
                }} />
        </div>
    )
}

export default Toggler