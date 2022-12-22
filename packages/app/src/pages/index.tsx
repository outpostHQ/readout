import { Flex } from '@cube-dev/ui-kit';
import AddGithubRepo from '../components/AddGithubRepo';

function Home() {
  return (
    <Flex
      height="100vh"
      width="100vw"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
    >
      <AddGithubRepo />
    </Flex>
  );
}

export default Home;
