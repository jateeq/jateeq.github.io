import type { Config } from '@docusaurus/types';

export const prodConfig: Partial<Config> = {
  // Production-specific configuration for jateeq.github.io (user site)
  url: 'https://jateeq.github.io',
  baseUrl: '/',
  
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
