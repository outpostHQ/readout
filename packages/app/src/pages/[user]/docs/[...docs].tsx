import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { Block, Flex } from '@cube-dev/ui-kit';
import { getMdxContent } from '../../../lib/getMDXContent';
import { getConfig } from '../../../lib/getConfig';
import Container from '../../../components/utils/utils';
import Sidebar from '../../../components/docs/Sidebar';
import { ScrollSpy } from '../../../components/utils/scrollSpy';
import Layout from '../../../components/shared/Layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = context.params?.user as string;
  // @ts-ignore
  const pageName = context.params?.docs?.join('/');
  const repoOwner = user.split('-')[0];
  const repoName = user.split('-')[1];

  console.log(context.params);
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
  repoName = 'staraneer',
  repoOwner = 'blog',
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  if (!repoOwner || !repoName) {
    router.push('404');
  }

  let parsedPage = JSON.parse(resultMDX);

  const Component = useMemo(() => getMDXComponent(parsedPage.code), [parsedPage.code]);

  return (
    <Layout>
      <Block color="#fff">
        <Container flow="row" display="flex">
          <Block hide={[false, false, true]}>
            <Sidebar repoName={repoName} repoOwner={repoOwner} TOC={TOC} />
          </Block>
          <Flex
            flow="column"
            className="Outpost-generated"
            flex="1"
            margin="0 0 100px 0"
            padding={['50px 40px', '50px 40px', '20px 0']}
          >
            <h1>{parsedPage.frontmatter.title}</h1>
            <Component />
          </Flex>
          <Block hide={[false, true]}>
            <ScrollSpy />
          </Block>
        </Container>
      </Block>
    </Layout>
  );
}

export default Docs;
