import { Block, Flex } from "@cube-dev/ui-kit";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

type navLinks = { name: string; path: string };

const TableOfContents = ({
  owner,
  repo,
  TOC,
}: {
  owner: string;
  repo: string;
  TOC: any;
}) => {
  const {
    navLinks,
    groups: navGroups,
  }: {
    navLinks: navLinks[];
    groups: { name: string; navLinks: navLinks[] }[];
  } = TOC;
  return (
    <Flex
      height="max-content"
      styles={{ position: "sticky", top: "1rem" }}
      width="16rem"
      flow="column"
      gap="0.5rem"
      padding="0 1rem"
    >
      <Flex gap="0.5rem" flow="column">
        {navLinks.map((i) => {
          return (
            <Link
              key={i.name}
              href={`${owner}/${repo}/${i.path.replace(".mdx", "")}`}
            >
              {i.name}
            </Link>
          );
        })}
      </Flex>
      <Accordion
        allowMultipleExpanded
        allowZeroExpanded
        style={{ width: "100%" }}
      >
        <Flex gap="1rem" flow="column" width="100%">
          {navGroups.map((i) => {
            return (
              <AccordionItem key={i.name}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#f2f2f2",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Group {i.name} {">"}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{ marginTop: "1rem" }}>
                  <Flex flow="column" gap="0.5rem">
                    {i.navLinks.map((j) => (
                      <Block padding="0 0 0 2rem" key={j.name}>
                        <Link
                          href={`/${owner}/${repo}/${i.name}/${j.path.replace(
                            ".mdx",
                            ""
                          )}`}
                        >
                          {j.name}
                        </Link>
                      </Block>
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
