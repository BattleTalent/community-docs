/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'xLua Battletalent Docs',
  tagline: 'Documentation for battle talent scripting',
  url: 'https://brothersonline.gitlab.io',
  baseUrl: '/xlua-battletalent-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BrothersOnline', // Usually your GitHub org/user name.
  projectName: 'xlua-battletalent-docs', // Usually your repo name.
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
    }]
  ],
  themeConfig: {
    prism: {
      additionalLanguages: ['lua'],
    },
    navbar: {
      title: 'xLua Battletalent Docs',
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
              href: 'https://docs.google.com/spreadsheets/d/1z3dAbbIpCERFYRC-NOEZxo7R3kv008184Jws9MFz2NI/edit#gid=0',
              label: 'Mod Toolkit Doc Excel',
            },
            {
              href: 'http://jjyy.guru/BTModToolkit/',
              label: 'Mod Toolkit Documentation',
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
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'G-NCNBRXYW4S',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
