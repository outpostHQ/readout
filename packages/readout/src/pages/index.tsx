import { Button, Flex, TextInput } from "@cube-dev/ui-kit";
import AddGithubRepo from "../components/AddGithubRepo";

function Home() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      styles={{ minHeight: "100vh" }}
      overflow="hidden"
    >
      <AddGithubRepo />
    </Flex>
  );
}

export default Home;
