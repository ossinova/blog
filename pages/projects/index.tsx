import Container from '@/components/Container';
import ProjectStyles from '@/components/ProjectStyles';
import { getGithubRepos } from 'utils/github';
import Link from 'next/link';
import formatDate from '@/utils/formatDate';


type Project = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: Date;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
};

type ProjectsProps = {
    projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <Container title="Projects" description="List of my GitHub Projects">
        <ProjectStyles>
            <main className="projects">
                <h1>My GitHub Projects</h1>
                <p>A collection of my recent projects</p>
                <hr />
                <div className="project">
                    {projects.map(project => (
                        <div key={project.id}>
                            <div className="project postTeaser">
                            <h2 className="blogListHeading">
                                <Link href={`${project.html_url}`} aria-label={project.name}>
                                {project.name}
                                </Link>
                            </h2>
                            <div
                                className="postDetails"
                                aria-label={`${project.created_at} • ${project.stargazers_count} stars • ${project.forks_count} forks`}
                            >
                                <div className="blogListDetails">
                                <time dateTime={formatDate(project.created_at, 'numeric')}>{formatDate(project.created_at, 'numeric')}</time>
                                <span className="divider1">•</span>{' '}
                                <span className="likes">{project.stargazers_count} stars</span>
                                <span className="divider1">•</span>{' '}
                                <span className="likes">{project.forks_count} forks</span>
                                </div>
                            </div>
                            <p className="teaser">{project.description}</p>
                            </div>
                            </div>
                    ))}
                </div>
            </main>
        </ProjectStyles>
    </Container>
);
};
  
export async function getStaticProps() {
    // Access the GitHub username from environment variables
    const githubUsername = process.env.NEXT_PUBLIC_GITHUB_PROJECTS_USERNAME!;
    console.log("GitHub Username: ", githubUsername);
    // Fetch data from GitHub API
    const projects = await getGithubRepos(githubUsername);
    return { props: { projects } };
}

export default Projects;