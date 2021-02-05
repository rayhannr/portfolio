import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Badge from './Badge'
import GithubLink from './GithubLink'
import ProjectLink from './ProjectLink'

const Project = props => (
    <Fade duration={500} distance="30px" fraction={0.4} delay={100} bottom>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 mt-10 md:mt-16 lg:mt-20 lg:max-w-5xl">
            <div className={`max-w-xs md:max-w-smd lg:max-w-lg ${props.isReversed ? 'md:order-2' : 'md:order-1'}`}>
                <div className="shadow-xl rounded-lg bg-gray-100">
                    <Image
                        src={`/projects/${props.image}`}
                        className="rounded-lg"
                        height={244}
                        width={504}
                        layout="responsive" />
                </div>
            </div>

            <div className={`mt-2 md:mt-0 ${props.isReversed ? 'md:order-1' : 'md:order-2'}`}>
                <h1 className="font-bold text-xl md:text-2xl text-content tracking-wide">{props.title}</h1>
                <h6 className="text-sm text-gray-400 tracking-wide mt-1">{props.date}</h6>
                <p className="text-small-content tracking-wide mt-3 leading-6">{props.description}</p>
                <div className="flex flex-row flex-wrap justify-start items-center -mt-1">
                    {props.tools.map(tool => (
                        <Badge key={tool}>{tool}</Badge>
                    ))}
                </div>
                <div className="flex flex-row items-center mt-4">
                    {props.githubLink && <GithubLink link={props.githubLink} />}
                    <ProjectLink link={props.projectLink} />
                </div>
            </div>

        </div>
    </Fade>
)

export default Project