import { useState, useEffect } from 'react'

export const useScroll = () => {

    // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
    const [scroll, setScroll] = useState({
        x: typeof document !== 'undefined' && document.body.getBoundingClientRect().left,
        y: typeof document !== 'undefined' && document.body.getBoundingClientRect().top,
        direction: ''
    })

    const listener = e => {
        // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
        setScroll(prev => ({
            x: document.body.getBoundingClientRect().left,
            y: -document.body.getBoundingClientRect().top,
            // Here we’re comparing the previous state to the current state to get the scroll direction
            direction: prev.y > -document.body.getBoundingClientRect().top ? 'up' : 'down'
        }))
        
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', listener)
            return () => window.removeEventListener('scroll', listener)
        }
    }, [scroll])

    return scroll
}