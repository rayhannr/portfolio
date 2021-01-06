import Image from 'next/image'
import Title from "../Title"
import Project from '../Project'

class ProjectItem {
    constructor(title, description, image, tools, isReversed) {
        this.title = title
        this.description = description
        this.image = image
        this.tools = tools
        this.isReversed = isReversed
    }
}

const dot = new ProjectItem(
    'converThings',
    'My very first project, a simple string converter site with no backend. It can convert plain text to binary, binary to decimal, decimal to any base, and many more.',
    'project1.jpg',
    ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    false
)
const det = new ProjectItem(
    'converThings',
    'My very first project, a simple string converter site with no backend. It can convert plain text to binary, binary to decimal, decimal to any base, and many more.',
    'project1.jpg',
    ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    true
)

const Projects = () => (
    <div className="p-8 pt-4 md:pt-10 md:px-16">
        <Title>Projects</Title>
        <div className="-mt-3 md:-mt-12 lg:-mt-14">
            <Project title={dot.title} description={dot.description} image={dot.image} tools={dot.tools} isReversed={dot.isReversed} />
            <Project title={det.title} description={det.description} image={det.image} tools={det.tools} isReversed={det.isReversed} />
        </div>
    </div>
)

export default Projects