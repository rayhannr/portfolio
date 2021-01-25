import React, { useContext, useState, useEffect, useCallback, useRef } from 'react'

import { ThemeContext } from '../context/theme-context'

const Toggler = () => {
    const checkRef = useRef(null)
    const theme = useContext(ThemeContext)
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
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <div className="toggle-button transition ease-in duration-200" style={{ transform: !navVisible && 'translateY(-150px)' }}>
            <div 
                className={`toggle ${theme.isDark ? 'checked' : ''}`}
                onClick={() => {
                    checkRef.current.click()
                }}>
                <div className="road">
                    <div className="road-check">🌜</div>
                    <div className="road-x">🌞</div>
                </div>
                <div className="round"></div>
                <input
                    type="checkbox"
                    className="hidden-input"
                    ref={checkRef}
                    onChange={theme.themeChanger}
                    checked={theme.isDark} />
            </div>
        </div>
    )
}

export default Toggler