import { Container } from "./Container";
import ProjectTile from "./ProjectTile";

const projectsArr = [
    {
        repoOwner: 'ajshrmaofficial',
        repository: 'guftgu',
        description: '',
        liveLink: '',
        repoLink: 'https://github.com/ajshrmaofficial/guftgu'
    },
    {
        repoOwner: 'ajshrmaofficial',
        repository: 'code-pencil',
        description: '',
        liveLink: 'https://codepencil-ajayshrma.vercel.app',
        repoLink: 'https://github.com/ajshrmaofficial/code-pencil'
    },
    {
        repoOwner: 'ajshrmaofficial',
        repository: 'flyingKing',
        description: '',
        liveLink: '',
        repoLink: 'https://github.com/ajshrmaofficial/flyingKing'
    },
    {
        repoOwner: 'ajshrmaofficial',
        repository: 'musify',
        description: '',
        liveLink: 'https://musify-ajayshrma.vercel.app',
        repoLink: 'https://github.com/ajshrmaofficial/musify'
    },
    {
        repoOwner: 'ajshrmaofficial',
        repository: 'Spring-Cart',
        description: '',
        liveLink: '',
        repoLink: 'https://github.com/ajshrmaofficial/Spring-Cart'
    },
    {
        repoOwner: 'ajshrmaofficial',
        repository: 'The-Dear-Diary',
        description: '',
        liveLink: '',
        repoLink: 'https://github.com/ajshrmaofficial/The-Dear-Diary'
    },
]

function Projects() {
    return(
        <Container name="projects" wrap>
            {projectsArr.map(project=>(
                <ProjectTile {...project} key={project.repository}/>
            ))}
        </Container>
    )
}

export default Projects;
