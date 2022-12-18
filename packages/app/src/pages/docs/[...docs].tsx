import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { bundle } from '../../lib/bundler/bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { Block, Flex } from '@cube-dev/ui-kit';
import { getMdxContent } from '../../lib/getMDXContent';
import { getConfig } from '../../lib/getConfig';
import { extractQueryParams } from '../../utils/extractQueryParams';
import Container from '../../components/utils/utils';
import Sidebar from '../../components/docs/Sidebar';
import { ScrollSpy } from '../../components/utils/scrollSpy';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { repoOwner, repoName, pageName } = extractQueryParams(context);
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
          <Component />
        </Flex>
        <Block hide={[false, true]}>
          <ScrollSpy />
        </Block>
      </Container>
    </Block>
  );
}

export default Docs;
