// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Pipeline',
  tagline: 'Generated API docs for the docs-as-code pipeline demo',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://brooklynpickles.github.io',
  baseUrl: '/docs-pipeline-site/',

  organizationName: 'brooklynpickles',
  projectName: 'docs-pipeline-site',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

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
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Docs Pipeline',
        logo: {
          alt: 'Docs Pipeline Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'productsSidebar',
            position: 'left',
            label: 'Products',
          },
          {
            href: 'https://github.com/brooklynpickles/docs-pipeline-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {label: 'Petstore', to: '/petstore/getting-started'},
              {label: 'GitHub REST API', to: '/github-rest-api/using-the-description'},
              {label: 'Stripe', to: '/stripe/tax-and-invoices'},
              {label: 'FastAPI Template', to: '/fastapi-template/items'},
            ],
          },
          {
            title: 'Source',
            items: [
              {
                label: 'docs-pipeline-site',
                href: 'https://github.com/brooklynpickles/docs-pipeline-site',
              },
            ],
          },
        ],
        copyright: `Docs generated and published by the docs-pipeline demo. Not affiliated with GitHub, Stripe, Swagger, or FastAPI.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
