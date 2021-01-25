import {useState, useEffect} from 'react'

const appThemes = {
    dark: {
        backgroundColor: "#111827",
        contentColor: "#f3f4f6",
        contentBackgroundColor: '#0f1116',
        contentHoverColor: '#E5E7EB',
        backgroundHoverColor: '#1F2937',
        smallTextColor: '#D1D5DB',
        hoverColor: 'rgba(196, 196, 196, 0.774)'
    },
    light: {
        backgroundColor: "#f3f4f6",
        contentColor: "#111827",
        contentBackgroundColor: 'white',
        contentHoverColor: '#1F2937',
        backgroundHoverColor: '#E5E7EB',
        smallTextColor: '#4b5563',
        hoverColor: 'rgb(107, 114, 148)'
    }
}

export const useTheme = () => {
    const [theme, setTheme] = useState('dark')
    let isDark = theme !== 'light'

    const setCSSVariables = theme => {
        for (const value in theme) {
          document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
    }

    const themeChanger = () => {
        if(!isDark){
            setTheme('dark')
            setCSSVariables(appThemes.dark)
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            setCSSVariables(appThemes.light)
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const appliedTheme = localStorage.getItem('theme')
        if(appliedTheme && appliedTheme === 'light'){
            setTheme('light')
            setCSSVariables(appThemes.light)
        } else {
            setTheme('dark')
            setCSSVariables(appThemes.dark)
        }
    }, [])

    return {theme, isDark, themeChanger}
}