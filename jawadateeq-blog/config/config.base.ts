import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Base configuration shared between all environments
export const baseConfig: Config = {
  title: 'Jawad Ateeq',
  tagline: 'Thoughts, stories, and reflections',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub pages deployment config.
  organizationName: 'jawadateeq', // Usually your GitHub org/user name.
  projectName: 'console', // Usually your repo name.

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs for blog-only site
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Jawad Ateeq - Blog',
          blogDescription: 'Personal thoughts, stories, and reflections',
          postsPerPage: 'ALL',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Jawad Ateeq',
      hideOnScroll: true,
      items: [
        {
          to: '/',
          label: 'Posts',
          position: 'left',
        },
        {
          to: '/stories',
          label: 'Stories',
          position: 'left',
        },
        {
          href: 'https://github.com/jawadateeq',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Jawad Ateeq. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};
