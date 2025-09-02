import type { Config } from '@docusaurus/types';

export const customDomainConfig: Partial<Config> = {
  // Custom domain configuration for jawadateeq.com
  url: 'https://jawadateeq.com',
  baseUrl: '/',
  
  // Production optimizations
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Custom domain specific theme config
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};
