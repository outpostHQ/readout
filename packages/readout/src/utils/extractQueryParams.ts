import { GetServerSidePropsContext } from "next";

export function extractQueryParams(context: GetServerSidePropsContext) {
  let repoOwner = "";
  let repoName = "";
  let pageName = "index";

  if (context?.params?.docs?.length === 2) {
    repoOwner = context?.params?.docs[0];
    repoName = context?.params?.docs[1];
  }

  if (context?.params?.docs != null && context?.params?.docs?.length > 2) {
    repoOwner = context?.params?.docs[0];
    repoName = context?.params?.docs[1];
    if (typeof context?.params?.docs === "string") {
      pageName = context?.params?.docs[3];
    } else {
      pageName = context?.params?.docs.slice(3).join("/");
    }
  }
  return { repoOwner, repoName, pageName };
}
