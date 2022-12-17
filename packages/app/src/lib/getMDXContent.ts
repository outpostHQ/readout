import { Octokit } from "octokit";

async function getMdxContent(
  owner: string,
  repoName: string,
  page: string = "index",
  path: string = "docs"
) {
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT });
  let route = `/${path}/${page}.mdx`;
  const { data }: any = await octokit.rest.repos.getContent({
    owner: owner,
    repo: repoName,
    path: route,
  });
  if (Array.isArray(data)) {
    return Buffer.from(data[0].content!, "base64").toString("ascii");
  } else {
    return Buffer.from(data?.content, "base64").toString("ascii");
  }
}

export { getMdxContent };
