/** @type {import('@docusaurus/types').Config} */
const config = {
  trailingSlash: false,
  title: 'Battle Talent Docs',
  tagline: 'The documentation website for creating your own Battle Talent mods.',
  url: 'https://BattleTalent.github.io',
  baseUrl: '/community-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BattleTalent',
  projectName: 'community-docs',
  
  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        // Add any search plugin options here if needed
      }
    ]
  ],

  themeConfig: {
    prism: {
      additionalLanguages: ['lua'],
    },
    navbar: {
      title: 'BT Modding Docs',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://discord.gg/YBTDhbzjC5',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://battletalent.mod.io/',
          label: 'Mod.io',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'BTModToolkit',
          items: [
            {
              href: 'https://battletalent.github.io/BTModToolkit',
              label: 'Official Docs',
            },
            {
              href: 'https://github.com/Tencent/xLua/blob/master/Assets/XLua/Doc/XLua_Tutorial_EN.md',
              label: 'xLua Tutorial',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join our Discord',
              href: 'https://discord.gg/YBTDhbzjC5',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Mod.io',
              href: 'https://battletalent.mod.io/',
            },
            {
              label: 'BT Challenges',
              href: 'https://brothersonline.gitlab.io/battle-talent-challenges/',
            }
          ],
        },
      ],
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/BattleTalent/community-docs'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Move gtag configuration here
        gtag: {
          trackingID: 'G-NCNBRXYW4S',
        },
      },
    ],
  ],
};

module.exports = config;
