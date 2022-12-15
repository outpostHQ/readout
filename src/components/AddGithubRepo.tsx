import { Block, Button, Flex, TextInput } from "@cube-dev/ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";

function AddGithubRepo() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const router = useRouter();
  function handleSubmit(value: string) {
    const githubRegex = "^https:\\/\\/[^\\/:]+[\\/:]([^\\/:]+)\\/(.+)";
    const chunks = value.match(githubRegex);

    if (!value) {
      return setValid(false);
    }

    if (value.startsWith("https://github.com")) {
      const chunks = value.match(githubRegex);
      if (chunks && chunks.length === 3) {
        router.push(`${chunks[1]}/${chunks[2]}`);
        return setValid(true);
      }
    }

    setValue("");
  }

  return (
    <Flex gap="1rem" flow="column">
      <TextInput
        value={value}
        onChange={setValue}
        label="Add github repo"
        placeholder="http://github.com/staranbeer/blog"
      />
      <Button onPress={() => handleSubmit(value)} type="primary">
        Submit
      </Button>
      {!valid && <Block color="#ff0000">please enter a valid repo</Block>}
    </Flex>
  );
}

export default AddGithubRepo;
