import { Block, Flex } from '@cube-dev/ui-kit';
import { ReactNode } from 'react';
import { ConfigProvider } from '../../../context/ConfigContext';
import Sidebar from '../../docs/sidebar/Sidebar';
import Header from '../Header';
import { TOC } from '../../../data/data';
import Container from '../../utils/containers';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex flow="column">
      <ConfigProvider>
        <Header />
        <Container display="flex">
          <Sidebar TOC={TOC} repoOwner="staranbeer" repoName="blog" />
          <Block flex="1">{children}</Block>
        </Container>
      </ConfigProvider>
    </Flex>
  );
}

export default Layout;
