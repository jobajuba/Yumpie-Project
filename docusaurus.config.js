// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yumpie',
  tagline: 'Once you have integrated, you will never have to worry about counter productivity or scaling again. The Yumpie growing ecosystem maintains a single global state as the network scales, ensuring composability between ecosystem projects. Never work with redundant storage or fragmented systems configurations.',
  url: 'https://yostudent.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Jobajuba', // Usually your GitHub org/user name.
  projectName: 'yumpie_docs2.0', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jobajuba/yumpie_docs2.0',
        },
        blog: false,
        /*blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/jobajuba/yumpie_docs2.0',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Yumpie',
        logo: {
          alt: 'My Site Logo',
          src: 'img/yum.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },    
          {
            href: 'https://yumpie.app/',
            label: 'Return to Yumpie',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',        
        copyright: `Copyright © ${new Date().getFullYear()} Yumpie`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
