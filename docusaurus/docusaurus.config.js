// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {wikilinksConfig} from './wikilinks.config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saverio Ferrara',
  tagline: '👋 Hey Everyone!',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://fsferrara.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fsferrara', // Usually your GitHub org/user name.
  projectName: 'fsferrara.github.io', // Usually your repo name.
  deploymentBranch: 'master',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: '../digital-garden',
          routeBasePath: '/notes',
          remarkPlugins: [
            wikilinksConfig,
            remarkMath
          ],
          rehypePlugins: [
            rehypeKatex
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          path: '../blog',
          routeBasePath: '/blog',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'fsferrara',
        logo: {
          alt: 'Saverio Ferrara Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'digitalGardenSidebar',
            position: 'left',
            label: 'Notes',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          // {
          //   href: 'https://github.com/fsferrara',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      // announcementBar: {
      //   id: 'open_to_work',
      //   content:
      //     'Open to work 👨🏻‍💻 <a href="/about"> Contact me!</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Software Engineer',
            items: [
              {
                label: 'About Me',
                to: '/about/',
              },
              {
                label: 'Timeline',
                to: '/timeline/',
              },
            ],
          },
          {
            title: 'Digital Garden',
            items: [
              {
                label: 'Notes',
                href: '/notes/',
              },
              {
                label: 'Blog Tags',
                href: '/blog/tags/',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Cookie Policy',
                href: '/legal/cookie-policy/',
              },
              {
                label: 'Terms and Conditions',
                href: '/legal/terms-and-conditions/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ❤️ Saverio Ferrara`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'T4NZRFX141',
  
        // Public API key: it is safe to commit it
        apiKey: 'eb5073f7bdf638e725f7dc908770ae76',
  
        indexName: 'fsferraraio',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      mermaid: {
        options: {
          fontFamily: 'var(--font-family-monospace)',
        },
      },
    }),
};

export default config;
