import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  return { props: { name: "taran" } };
}

function Docs({ name }: InferGetServerSidePropsType<GetServerSideProps>) {

  const router = useRouter();

  const [owner, setOwner] = useState<string>("");
  const [repo, setRepo] = useState<string>("");

  useEffect(() => {
    if (router.query.docs) {
      setOwner(router.query.docs[0]);
      setRepo(router.query.docs[1]);
    }
    console.log(owner, repo);
  }, []);

  return <div>{name}</div>;
}

export default Docs;

// https://github.com/staranbeer/blog
