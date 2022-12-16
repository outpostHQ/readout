import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { bundle } from "../lib/bundler/bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { Block, Flex } from "@cube-dev/ui-kit";
import { getMdxContent } from "../lib/getMDXContent";
import TableOfContents from "../components/TableOfContents";
import { getConfig } from "../lib/getConfig";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let repoOwner = "";
  let repoName = "";
  let pageName = "index";

  if (context?.params?.docs?.length === 2) {
    repoOwner = context?.params?.docs[0];
    repoName = context?.params?.docs[1];
  }

  if (context?.params?.docs != null && context?.params?.docs?.length > 2) {
    repoOwner = context?.params?.docs[0];
    repoName = context?.params?.docs[1];
    if (typeof context?.params?.docs === "string") {
      pageName = context?.params?.docs[2];
    } else {
      pageName = context?.params?.docs.slice(2).join("/");
    }
  }

  const mdx = await getMdxContent(repoOwner, repoName, pageName);
  const config = await getConfig(repoOwner, repoName);

  let TOC = JSON.parse(config).navigation;
  let page = await bundle(mdx);

  return {
    props: {
      homePage: JSON.stringify(page),
      TOC,
      repoName,
      repoOwner,
    } as const,
  };
}

function Docs({
  homePage,
  TOC,
  repoName,
  repoOwner,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  if (!repoOwner || !repoName) {
    router.push("404");
  }

  let parsedName = JSON.parse(homePage);

  const Component = useMemo(
    () => getMDXComponent(parsedName.code),
    [parsedName.code]
  );

  return (
    <Flex gap="2rem">
      <TableOfContents owner={repoOwner} repo={repoName} TOC={TOC} />
      <Flex flex="1">
        <Block className="Outpost-generated" styles={{ maxWidth: "50rem" }}>
          <Component />
        </Block>
      </Flex>
    </Flex>
  );
}

export default Docs;

// https://github.com/staranbeer/blog
