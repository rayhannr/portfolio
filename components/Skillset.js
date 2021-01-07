import Fade from 'react-reveal/Fade'

const Skillset = props => (
    <Fade duration={500} delay={props.delay} distance="30px" fraction={0.4} bottom>
        <div className="max-w-sm sm:max-w-md md:max-w-sm">
            <h2 className="text-lg font-semibold text-gray-900">{props.title}</h2>
            <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-4 gap-y-4 gap-x-3 sm:gap-x-20 md:gap-x-3 mt-3">
                {props.children}
            </div>
        </div>
    </Fade>
)

export default Skillset