import { Block, Flex, Paragraph, TextInput } from "@cube-dev/ui-kit";
import { RiCommandLine, RiSearchLine } from "react-icons/ri";

const SidebarSearch = () => {
  return (
    <Block>
      <TextInput
        aria-label="Search"
        styles={{
          InputArea: { border: "1px solid #352D3B", borderRadius: "0.5rem" },
        }}
        inputStyles={{
          color: "#ffffff",
          borderRadius: "8px",
          boxShadow: {
            "": "none",
            focused: "none",
            active: "none",
            hovered: "none",
          },
          fill: "#121312",
        }}
        style={{
          color: "#ffffff",
        }}
        theme="danger"
        placeholder="Search"
        prefix={<RiSearchLine color="#ffffff" size="16px" />}
        suffix={<PostFixComponent />}
      />
    </Block>
  );
};

const PostFixComponent = () => {
  return (
    <Flex
      padding="3px 6px"
      style={{ borderRadius: "6px", position: "relative", right: "8px" }}
      alignItems="center"
      border="1px solid #352D3B"
    >
      <RiCommandLine color="#ffffff" />
      <Paragraph
        style={{ fontSize: "14px" }}
        fontWeight="500"
        color="#ffffff"
        margin="0 0 0 3px"
      >
        K
      </Paragraph>
    </Flex>
  );
};

export default SidebarSearch;
