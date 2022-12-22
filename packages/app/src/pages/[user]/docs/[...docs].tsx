import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getMdxContent } from '../../../lib/getMDXContent';
import DocsLayout from '../../../components/shared/Layouts/DocsLayout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = context.params?.user as string;
  // @ts-ignore
  const pageName = context.params?.docs?.join('/');
  const repoOwner = user.split('-')[0];
  const repoName = user.split('-')[1];

  const page = await getMdxContent(repoOwner, repoName, pageName);
  return {
    props: {
      resultMDX: JSON.stringify(page),
      repoName,
      repoOwner,
    } as const,
  };
}

function Docs({
  resultMDX = '',
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
    <DocsLayout pageTitle={parsedPage.frontmatter.title || ''}>
      <Component />
    </DocsLayout>
  );
}

export default Docs;
