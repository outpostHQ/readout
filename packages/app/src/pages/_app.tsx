import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { BreakpointsProvider, Root, SSRProvider } from '@cube-dev/ui-kit';
import Layout from '../components/shared/Layouts/Layout';
import '@code-hike/mdx/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root bodyStyles={{ 'background-color': '#121312' }}>
      <SSRProvider>
        <BreakpointsProvider value={[1140, 900, 500]}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BreakpointsProvider>
      </SSRProvider>
    </Root>
  );
}
