import { createContext, Dispatch, ReactNode, SetStateAction, useReducer, useState } from 'react';

const defaultContext = {
  name: 'Readout',
  customDomain: 'https://xyz.forneu.com',
  logo: {
    light: '/logo/light.svg',
    dark: '/logo/dark.svg',
    href: 'https://readout.com',
  },
  favicon: '/favicon.svg',
  colors: {
    primary: '#2AB673',
    light: '#55D799',
    dark: '#117866',
    ultraLight: '#CCEFE9',
    ultraDark: '#0D5E4F',
    background: {
      dark: '#171717',
    },
    anchors: {
      from: '#117866',
      to: '#2AB673',
    },
  },
  topbarLinks: [
    {
      name: 'Community',
      url: 'https://readout.com/community',
    },
  ],
  topbarCtaButton: {
    name: 'SignUp',
    url: 'https://readout.com/start',
  },
  anchors: [
    {
      name: 'API Reference V1',
      url: 'v1/api-reference',
      version: 'v1',
    },
    {
      name: 'API Reference V2',
      url: 'v2/api-reference',
      version: 'v2',
    },
    {
      name: 'Anchor Without a Version',
      url: 'example-anchor',
    },
  ],
  navigation: [
    {
      group: 'Getting Started',
      pages: ['quickstart', 'development'],
    },
    {
      group: 'Settings',
      pages: ['settings/customization', 'settings/page', 'settings/versioning'],
    },
    {
      group: 'Components',
      pages: ['components/overview', 'components/text', 'components/image', 'components/list'],
    },
  ],
  footerSocials: {
    github: 'https://github.com/outposthq',
    discord: 'https://discord.gg/url',
    twitter: 'https://twitter.com/outpostjs',
  },
  analytics: {
    fathom: {
      siteId: 'YSVUHTYY',
    },
  },
};

const ConfigContext = createContext<
  [typeof defaultContext, Dispatch<SetStateAction<typeof defaultContext>>]
>([defaultContext, () => {}]);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState(defaultContext);
  return <ConfigContext.Provider value={[values, setValues]}>{children}</ConfigContext.Provider>;
}

export default ConfigContext;
