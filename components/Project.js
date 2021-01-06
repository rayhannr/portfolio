import Image from 'next/image'
import Badge from './Badge'

const Project = props => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-10 md:mt-16 lg:mt-20 lg:max-w-5xl lg:mx-auto">
        <div className={`max-w-xs md:max-w-sm lg:max-w-lg my-auto ${props.isReversed ? 'md:order-2' : 'md:order-1'}`}>
            <div className="shadow-xl">
                <Image
                    src={`/projects/${props.image}`}
                    className="rounded-lg"
                    height={244}
                    width={504}
                    layout="responsive" />
            </div>
        </div>
        <div className={`mt-2 md:mt-0 ${props.isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <h1 className="font-bold text-xl md:text-2xl text-gray-900 tracking-wide">{props.title}</h1>
            <p className="text-gray-600 tracking-wide mt-2">{props.description}</p>
            <div className="flex flex-row flex-wrap justify-start items-center -mt-1">
                {props.tools.map(tool => (
                    <Badge key={tool}>{tool}</Badge>
                ))}
            </div>
        </div>
    </div>
)

export default Project