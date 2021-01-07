import Title from "../Title"
import Project from '../Project'

class ProjectItem {
    constructor(title, description, image, tools, isReversed, projectLink, githubLink) {
        this.title = title
        this.description = description
        this.image = image
        this.tools = tools
        this.isReversed = isReversed
        this.projectLink = projectLink
        this.githubLink = githubLink
    }
}

const projectItems = [
    new ProjectItem(
        'converThings',
        'My very first project, a simple string converter site with no backend. It can convert plain text to binary, binary to decimal, decimal to any base, and many more.',
        'project1.jpg',
        ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        false,
        'https://rayhannr.github.io/converthings',
        'https://github.com/rayhannr/converthings'
    )
]

const Projects = () => (
    <div className="p-8 pt-4 md:pt-10 md:px-16">
        <Title>Projects</Title>
        <div className="-mt-3 md:-mt-12">
            {projectItems.map(item => (
                <Project 
                    key={item.title} 
                    title={item.title} 
                    description={item.description} 
                    image={item.image}
                    tools={item.tools}
                    isReversed={item.isReversed}
                    githubLink={item.githubLink}
                    projectLink={item.projectLink} />
            ))}
        </div>
    </div>
)

export default Projects