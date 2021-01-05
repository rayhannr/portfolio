import Game from './Game/Game'

const Hero = () => (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 md:py-10 md:px-16">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug lg:leading-normal">Hi!</h1>
            <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug lg:leading-normal">I'm Rayhan Naufal Ramadhan</h1>
            <p className="text-gray-900">Frontend developer and Computer Science student</p>
        </div>
        <div className="w-full lg:w-2/5 mt-5 lg:mt-0">
            <Game />
        </div>
    </div>
)

export default Hero