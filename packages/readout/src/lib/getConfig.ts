import { Octokit } from "octokit";

export async function getConfig(owner: string, repoName: string) {
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT });
  const { data }: any = await octokit.rest.repos.getContent({
    owner: owner,
    repo: repoName,
    path: "readout.config.json",
  });
  return Buffer.from(data.content, "base64").toString("ascii");
}
