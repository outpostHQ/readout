import { Block, Button, Flex, Paragraph } from '@cube-dev/ui-kit';
import Link from 'next/link';
import { useContext } from 'react';
import ConfigContext from '../../context/ConfigContext';
import Container from '../utils/containers';

function Header() {
  const [values] = useContext(ConfigContext);
  return (
    <Block styles={{ borderBottom: '1px solid #3E3E3E' }} padding="1.5rem 0">
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Paragraph
            styles={{
              fontSize: '30px',
              fontWeight: 700,
              lineHeight: '32px',
              letterSpacing: '0px',
              color: '#ffffff',
            }}
          >
            <Link href="/">{values.name}</Link>
          </Paragraph>
          <Flex alignItems="center" gap="1.5rem">
            <ul>
              {values.topbarLinks.map((i) => {
                return (
                  <li key={i.name}>
                    <a href={i.url}>{i.name}</a>
                  </li>
                );
              })}
            </ul>
            <Button type="primary" to={values.topbarCtaButton.url}>
              {values.topbarCtaButton.name}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Block>
  );
}

export default Header;
