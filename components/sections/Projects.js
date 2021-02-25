import Fade from 'react-reveal/Fade'
import Title from "../Title"
import Project from '../Project'
import { projectItems } from '../../constants/projectItems'

const Projects = () => (
    <div className="section">
        <Fade duration={500} distance="30px" fraction={0.4} bottom>
            <Title>Projects</Title>
        </Fade>
        <div className="-mt-3 md:-mt-12">
            {projectItems.map((item, index) => (
                <Project
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    image={item.image}
                    tools={item.tools}
                    isReversed={index % 2 === 1}
                    githubLink={item.githubLink}
                    projectLink={item.projectLink} />
            ))}
        </div>
    </div>
)

export default Projects