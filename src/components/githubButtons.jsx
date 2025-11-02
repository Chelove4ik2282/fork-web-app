import GitHubButton from 'react-github-btn';

export default function GitHubButtons() {
  return (
    <div className="flex gap-4">
      <GitHubButton href="https://github.com/Chelove4ik2282/Chelove4ik2282" data-icon="octicon-star" data-size="large" data-show-count="true">
        Star
      </GitHubButton>

      <GitHubButton href="https://github.com/Chelove4ik2282/Chelove4ik2282" data-icon="octicon-repo-forked" data-size="large" data-show-count="true">
        Fork
      </GitHubButton>

      <GitHubButton href="https://github.com/Chelove4ik2282/Chelove4ik2282" data-icon="octicon-eye" data-size="large" data-show-count="true">
        Watch
      </GitHubButton>
    </div>
  );
}
