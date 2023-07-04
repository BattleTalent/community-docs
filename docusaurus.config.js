/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  trailingSlash: false,
  title: 'Battle Talent Docs',
  tagline: 'The documentation website for creating your own Battle Talent mods.',
  url: 'https://unbelievableflavour.github.io',
  baseUrl: '/battle-talent-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UnbelievableFlavour',
  projectName: 'battle-talent-docs',
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
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
              href: 'https://fonzieyang.github.io/BTModToolkit',
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
          editUrl:
            'https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
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
