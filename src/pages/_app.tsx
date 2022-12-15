import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Root, SSRProvider } from "@cube-dev/ui-kit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </Root>
  );
}
