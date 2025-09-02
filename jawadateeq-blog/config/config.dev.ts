import type { Config } from '@docusaurus/types';

export const devConfig: Partial<Config> = {
  // Development-specific configuration
  url: 'http://localhost:3000',
  baseUrl: '/',
  
  // Development optimizations
  onBrokenLinks: 'warn', // Less strict for development
  onBrokenMarkdownLinks: 'warn',
  
  // Development-specific theme config
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};
