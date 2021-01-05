import Game from './Game/Game'
import Fade from 'react-reveal/Fade'

import { useScroll } from '../hooks/scroll-hook'

const Hero = () => {
    const scroll = useScroll()
    const offset = scroll.y

    return (
        <div
            className="hero px-8 pb-12 pt-36 md:pt-28 lg:pt-24 md:px-16"
            style={{
                backgroundPositionX: 'center',
                backgroundPositionY: 'bottom',
                backgroundSize: 'cover'
            }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center relative" style={{ bottom: typeof window !== 'undefined' && window.innerWidth >= 1024 ? offset / 3 : 'unset' }}>
                <Fade duration={200} distance="30px" bottom>
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <h1 className="text-gray-900 text-2xl font-architect font-medium">Hi! I'm</h1>
                        <h1 className="text-gray-900 font-extrabold text-3xl md:text-4xl lg:text-5xl md:leading-snug lg:leading-none">Rayhan Naufal Ramadhan</h1>
                        <p className="text-gray-500 mt-2 md:mt-1 lg:mt-2 tracking-wide md:tracking-wider">Frontend developer and Computer Science student</p>
                    </div>
                </Fade>
                <Fade duration={200} delay={100} distance="30px" bottom>
                    <div className="w-full lg:w-2/5 mt-5 lg:mt-0">
                        <Game />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Hero