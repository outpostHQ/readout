import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getMdxContent } from '../../../lib/getMDXContent';
import { getConfig } from '../../../lib/getConfig';
import DocsLayout from '../../../components/shared/Layouts/DocsLayout';
import { Block } from '@cube-dev/ui-kit';
import Sidebar from '../../../components/docs/Sidebar';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = context.params?.user as string;
  // @ts-ignore
  const pageName = context.params?.docs?.join('/');
  const repoOwner = user.split('-')[0];
  const repoName = user.split('-')[1];

  const page = await getMdxContent(repoOwner, repoName, pageName);
  const config = await getConfig(repoOwner, repoName);
  let TOC = JSON.parse(config).navigation;
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
  resultMDX = '',
  TOC,
  repoName,
  repoOwner,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  if (!repoOwner || !repoName) {
    router.push('404');
  }

  let parsedPage = JSON.parse(resultMDX);
  const Component = useMemo(() => getMDXComponent(parsedPage.code), [parsedPage.code]);

  return (
    <DocsLayout
      pageTitle={parsedPage.frontmatter.title}
      TOC={TOC}
      repoOwner={repoOwner}
      repoName={repoName}
    >
      <Component />
    </DocsLayout>
  );
}

export default Docs;
