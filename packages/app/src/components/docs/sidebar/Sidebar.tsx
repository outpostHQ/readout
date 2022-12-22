import { Flex } from '@cube-dev/ui-kit';
import { memo } from 'react';
import SidebarAnchors from './SidebarAnchors';
import SidebarSearch from './SidebarSearch';
import TableOfContents from './TableOfContents';

function Sidebar({ repoOwner, repoName, TOC }: { repoOwner: string; repoName: string; TOC: any }) {
  return (
    <Flex
      flow="column"
      gap="1.25rem"
      style={{
        overflowY: 'scroll',
        position: 'sticky',
        top: '0px',
        bottom: '40px',
        height: '100vh',
        width: '240px',
        padding: '20px 20px 20px 0',
        borderRight: '1px solid #352D3B',
      }}
    >
      <SidebarSearch />
      <SidebarAnchors />
      <TableOfContents owner={repoOwner} repo={repoName} TOC={TOC} />
    </Flex>
  );
}

export default memo(Sidebar);
