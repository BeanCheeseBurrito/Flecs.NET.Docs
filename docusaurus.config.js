// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flecs.NET',
  tagline: 'A high-level C# wrapper for flecs',
  favicon: 'https://www.flecs.dev/explorer/img/flecs_logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Flecs.NET.Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BeanCheeseBurrito', // Usually your GitHub org/user name.
  projectName: 'Flecs.NET.Docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BeanCheeseBurrito/Flecs.NET.Docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/logo.png',
      navbar: {
        title: 'Flecs.NET',
        logo: {
          alt: 'Flecs Logo',
          src: '/img/logo_small_dark.png',
          srcDark: '/img/logo_small.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentation',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://www.flecs.dev/explorer/',
            label: 'Explorer',
            position: 'left',
          },
          {
            href: 'https://github.com/BeanCheeseBurrito/Flecs.NET',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/BEzP5Rgrrp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BeanCheeseBurrito/Flecs.NET',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BeanCheeseBurrito. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['csharp'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
