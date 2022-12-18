import { Flex } from '@cube-dev/ui-kit';
import { useContext } from 'react';
import AddGithubRepo from '../components/AddGithubRepo';
import ConfigContext from '../context/ConfigContext';

function Home() {
  const [values, setValues] = useContext(ConfigContext);

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
