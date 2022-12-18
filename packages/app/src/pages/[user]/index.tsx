import { Block, Flex } from '@cube-dev/ui-kit';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Sidebar from '../../components/docs/Sidebar';
import Layout from '../../components/shared/Layout';
import { ScrollSpy } from '../../components/utils/scrollSpy';
import Container from '../../components/utils/utils';
import { getConfig } from '../../lib/getConfig';
import { getMdxContent } from '../../lib/getMDXContent';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = context.params?.user as string;
  const username = user.split('-')[0];
  const repo = user.split('-')[1];
  const page = await getMdxContent(username, repo);
  const config = await getConfig(username, repo);

  console.log(username, repo);
  let TOC = JSON.parse(config).navigation;
  return {
    props: {
      resultMDX: JSON.stringify(page),
      TOC,
      username,
      repo,
    } as const,
  };
}

function Docs({
  resultMDX = '',
  TOC,
  username,
  repo,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  if (!username || !repo) {
    router.push('404');
  }

  let parsedPage = JSON.parse(resultMDX);

  const Component = useMemo(() => getMDXComponent(parsedPage.code), [parsedPage.code]);

  return (
    <Layout>
      <Block color="#fff">
        <Container flow="row" display="flex">
          <Block hide={[false, false, true]}>
            <Sidebar repoName={repo} repoOwner={username} TOC={TOC} />
          </Block>
          <Flex
            flow="column"
            gap="2.5rem"
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
