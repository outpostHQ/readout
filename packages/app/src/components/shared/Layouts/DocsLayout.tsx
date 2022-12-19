import { Block, Flex } from '@cube-dev/ui-kit';
import { ReactNode } from 'react';
import Sidebar from '../../docs/Sidebar';
import { ScrollSpy } from '../../utils/scrollSpy';
import Container from '../../utils/utils';
import Footer from '../Footer';
import Layout from './Layout';

function DocsLayout({
  pageTitle,
  repoName,
  repoOwner,
  TOC,
  children,
}: {
  pageTitle: string;
  repoName: string;
  repoOwner: string;
  TOC: string;
  children: ReactNode;
}) {
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
            gap="2.5rem"
            margin="0 0 0 0"
            padding={['50px 50px 0 50px 40px', '50px 50px 0 50px 40px', '20px 0']}
          >
            <h1>{pageTitle}</h1>
            {children}
            <Footer />
          </Flex>
          <Block hide={[false, true]}>
            <ScrollSpy />
          </Block>
        </Container>
      </Block>
    </Layout>
  );
}

export default DocsLayout;
