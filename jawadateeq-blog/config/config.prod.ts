import type { Config } from '@docusaurus/types';

export const prodConfig: Partial<Config> = {
  // Production-specific configuration
  url: 'https://jateeq.github.io',
  baseUrl: '/console/',
  
  // Production optimizations
  onBrokenLinks: 'throw', // Strict for production
  onBrokenMarkdownLinks: 'warn',
  
  // Production-specific theme config
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};
