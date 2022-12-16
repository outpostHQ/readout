import "../../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Root>
    // <SSRProvider>
    <Component {...pageProps} />
    // </SSRProvider>
    // </Root>
  );
}
