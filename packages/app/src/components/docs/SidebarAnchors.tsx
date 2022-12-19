import { Flex, Paragraph } from '@cube-dev/ui-kit';
import Link from 'next/link';
import React, { useContext } from 'react';
import ConfigContext from '../../context/ConfigContext';

function SidebarAnchors() {
  const [{ anchors }] = useContext(ConfigContext);
  return (
    <Flex flow="column" gap="1rem">
      {anchors.map((i) => {
        return (
          <Link style={{ paddingLeft: '20px' }} href={i.url} color="#ffffff" key={i.name}>
            {i.name}
          </Link>
        );
      })}
    </Flex>
  );
}

export default SidebarAnchors;
