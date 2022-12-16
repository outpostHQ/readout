import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { bundle } from "../../lib/bundler/bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { Block, Flex } from "@cube-dev/ui-kit";
import { getMdxContent } from "../../lib/getMDXContent";
import TableOfContents from "../../components/TableOfContents";
import { getConfig } from "../../lib/getConfig";
import { extractQueryParams } from "../../utils/extractQueryParams";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { repoOwner, repoName, pageName } = extractQueryParams(context);
  const mdx = await getMdxContent(repoOwner, repoName, pageName);
  const config = await getConfig(repoOwner, repoName);

  let TOC = JSON.parse(config).navigation;
  let page = await bundle(mdx);

  return {
    props: {
      resultMDX: JSON.stringify(page),
      TOC,
      repoName,
      repoOwner,
    } as const,
  };
}

function Docs({
  resultMDX,
  TOC,
  repoName,
  repoOwner,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  if (!repoOwner || !repoName) {
    router.push("404");
  }

  let parsedPage = JSON.parse(resultMDX);

  const Component = useMemo(
    () => getMDXComponent(parsedPage.code),
    [parsedPage.code]
  );

  return (
    <Flex gap="2rem">
      <TableOfContents owner={repoOwner} repo={repoName} TOC={TOC} />
      <Flex flex="1">
        <Block
          padding="2rem 1rem"
          className="Outpost-generated"
          styles={{ maxWidth: "50rem" }}
        >
          <Component />
        </Block>
      </Flex>
    </Flex>
  );
}

export default Docs;
