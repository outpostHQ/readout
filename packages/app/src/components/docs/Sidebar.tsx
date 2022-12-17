import { Block } from "@cube-dev/ui-kit";
import TableOfContents from "../TableOfContents";
import SidebarSearch from "./SidebarSearch";

function Sidebar({
  repoOwner,
  repoName,
  TOC,
}: {
  repoOwner: string;
  repoName: string;
  TOC: any;
}) {
  return (
    <Block
      style={{
        overflowY: "scroll",
        position: "sticky",
        top: "0px",
        bottom: "40px",
        height: "100vh",
        width: "240px",
        padding: "20px 20px 20px 0",
        borderRight: "1px solid #352D3B",
      }}
    >
      <SidebarSearch />
      <TableOfContents owner={repoOwner} repo={repoName} TOC={TOC} />
    </Block>
  );
}

export default Sidebar;
