import { Block, Flex } from '@cube-dev/ui-kit';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex flow="column">
      <Header />
      <Block flex="1">{children}</Block>
      <Footer />
    </Flex>
  );
}

export default Layout;
