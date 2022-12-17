import { Block, Button, Flex, TextInput } from "@cube-dev/ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";

function AddGithubRepo() {
  const [githubUserName, setGithubUserName] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [valid, setValid] = useState(true);

  const router = useRouter();
  function handleSubmit(githubUserName: string, githubRepo: string) {
    if (!githubRepo || !githubUserName) {
      return setValid(false);
    }

    router.push(`${githubUserName}/${githubRepo}`);

    setGithubUserName("");
    setGithubRepo("");
  }

  return (
    <Flex gap="1rem" flow="column">
      <TextInput
        labelStyles={{ color: "#fff" }}
        value={githubUserName}
        onChange={setGithubUserName}
        label="Github Username"
        placeholder="staranbeer"
      />
      <TextInput
        labelStyles={{ color: "#fff" }}
        value={githubRepo}
        onChange={setGithubRepo}
        label="Github Repository Name"
        placeholder="blog"
      />
      <Button
        margin="1rem 0 0 0"
        onPress={() => handleSubmit(githubUserName, githubRepo)}
        type="primary"
      >
        Submit
      </Button>
      {!valid && <Block color="#ff0000">please enter a valid repo</Block>}
    </Flex>
  );
}

export default AddGithubRepo;
