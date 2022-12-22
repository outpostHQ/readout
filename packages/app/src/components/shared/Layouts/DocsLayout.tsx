import { Block, Flex } from '@cube-dev/ui-kit';
import { ReactNode } from 'react';
import { ScrollSpy } from '../../utils/scrollSpy';
import Footer from '../Footer';

function DocsLayout({ pageTitle, children }: { pageTitle: string; children: ReactNode }) {
  return (
    <Block color="#fff">
      <Flex>
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
      </Flex>
    </Block>
  );
}

export default DocsLayout;
