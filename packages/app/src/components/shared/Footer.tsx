import { Block, Flex } from '@cube-dev/ui-kit';
import { useContext, useState } from 'react';
import ConfigContext from '../../context/ConfigContext';
import Container from '../utils/containers';
import { RiGithubLine, RiDiscordLine, RiTwitterLine } from 'react-icons/ri';
function Footer() {
  const [{ footerSocials }] = useContext(ConfigContext);
  return (
    <Block styles={{ borderTop: '1px solid #3E3E3E', color: '#ffffff' }} padding="1.5rem 0">
      <Container>
        <Flex gap="1.5rem" justifyContent="flex-end">
          {footerSocials.discord && (
            <a href={footerSocials.discord}>
              <RiDiscordLine size={28} />
            </a>
          )}
          {footerSocials.twitter && (
            <a href={footerSocials.twitter}>
              <RiTwitterLine size={28} />
            </a>
          )}
          {footerSocials.github && (
            <a href={footerSocials.github}>
              <RiGithubLine size={28} />
            </a>
          )}
        </Flex>
      </Container>
    </Block>
  );
}

export default Footer;
