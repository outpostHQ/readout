import { Flex, Paragraph } from '@cube-dev/ui-kit';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';

type navLinks = { name: string; path: string };

const TableOfContents = ({ owner, repo, TOC }: { owner: string; repo: string; TOC: any }) => {
  const {
    navLinks,
    groups: navGroups,
  }: {
    navLinks: navLinks[];
    groups: { name: string; navLinks: navLinks[] }[];
  } = TOC;

  return (
    <Flex>
      <Accordion style={{ width: '100%' }} allowMultipleExpanded allowZeroExpanded>
        <Flex flow="column" gap="20px">
          {navGroups.map((i) => {
            return (
              <AccordionItem key={i.name}>
                <AccordionItemHeading style={{ cursor: 'pointer' }}>
                  <AccordionItemButton className="accordion-link accordion-link--icon">
                    <Flex alignItems="center" gap="10px">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? (
                            <RiArrowDownSLine size={'16px'} />
                          ) : (
                            <RiArrowRightSLine size={'16px'} />
                          )
                        }
                      </AccordionItemState>{' '}
                      <Paragraph styles={{ fontWeight: '500', color: '#ffffff' }}>
                        {i.name}
                      </Paragraph>
                    </Flex>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Flex
                    styles={{
                      borderLeft: '1px solid #352D3B',
                    }}
                    flow="column"
                    margin="0 0 0 24px"
                    gap="20px"
                  >
                    {i.navLinks.map((j) => (
                      <Link
                        key={i.name}
                        href={`/${owner}-${repo}/docs/${i.name}/${j.path.replace('.mdx', '')}`}
                        style={{
                          marginLeft: '1rem',
                          textAlign: 'left',
                          color: '#ccc',
                          textDecoration: 'none',
                        }}
                        className={`accordion-link `}
                      >
                        {j.name}
                      </Link>
                    ))}
                  </Flex>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Flex>
      </Accordion>
    </Flex>
  );
};

export default TableOfContents;
