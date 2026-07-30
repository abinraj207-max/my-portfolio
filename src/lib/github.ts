// src/lib/github.ts

const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";

export const githubProfile =
  `https://github.com/${GITHUB_USERNAME}`;

export const githubApi =
  `https://api.github.com/users/${GITHUB_USERNAME}`;

export const githubRepos =
  `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export const fetchGithubProfile = async () => {
  const response = await fetch(githubApi);

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return response.json();
};

export const fetchGithubRepos = async () => {
  const response = await fetch(githubRepos);

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
};