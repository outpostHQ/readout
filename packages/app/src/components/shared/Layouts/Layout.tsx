import { Block, Flex } from '@cube-dev/ui-kit';
import { ReactNode } from 'react';
import { ConfigProvider } from '../../../context/ConfigContext';
import Footer from '../Footer';
import Header from '../Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex flow="column">
      <ConfigProvider>
        <Header />
        <Block flex="1">{children}</Block>
        <Footer />
      </ConfigProvider>
    </Flex>
  );
}

export default Layout;
