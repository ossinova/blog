// Define a type for your repositories

type Owner = {
    login: string;
    // ... other owner properties if needed
};

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: Date;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    fork: boolean; // Add this line
    owner: Owner;
  };
  
  export async function getGithubRepos(username: string): Promise<Repo[]> {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos: Repo[] = await response.json();
    // Filter out the specific repo and other people's repos
  const filteredRepos = repos.filter(repo => 
    repo.name !== username && repo.owner.login === username && repo.fork === false
  );

  return filteredRepos;
}