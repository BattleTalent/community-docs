![Build Status](https://gitlab.com/pages/docusaurus/badges/master/pipeline.svg)

---

Example [Docusaurus](https://docusaurus.io/) website using GitLab Pages.

Learn more about GitLab Pages at https://about.gitlab.com/features/pages and the official
documentation https://docs.gitlab.com/ee/user/project/pages/.

---

## GitLab CI/CD

This project's static Pages are built by [GitLab CI/CD](https://about.gitlab.com/product/continuous-integration/),
following the steps defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```yaml
image: node:15.12-alpine3.13

stages:
  - test
  - deploy

test:
  stage: test
  script:
  - cd website
  - yarn install
  - yarn build
  except:
    - master

pages:
  stage: deploy
  script:
  - cd website
  - yarn install
  - yarn build
  - mv ./build ../public
  artifacts:
    paths:
    - public
  only:
    - master
```

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project.
1. Install Docusaurus:

   ```sh
   cd website
   yarn install
   ```

1. Preview your project:

   ```sh
   yarn start
   ```

   Your site can be accessed under http://localhost:3000.

1. Add content.
1. Generate the website (optional):

   ```sh
   yarn build
   ```

   The website will be built under `website/build/`.

Read more at the [Docusaurus documentation](https://docusaurus.io).

## GitLab User or Group Pages

If you have forked this project, in order to use it as your user/group website
served on the root path, you will need to:

1. Change the path of your project to `namespace.gitlab.io`, where `namespace` is
   your `username` or `groupname`. This can be done by navigating to your
   project's **Settings > General** page under the Advanced section.
1. Open `website/siteConfig.js` and change:
   1. The `url` to be `https://namespace.gitlab.io` or your
      [custom domain](https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/index.html) of choice.
   1. The `baseUrl` to be '/'.

If you have forked this project, and want to use it under a subpath, you will
need to:

1. Open `website/docusaurus.config.js` and change:
   1. The `url` to be `https://namespace.gitlab.io` or your
      [custom domain](https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/index.html) of choice.
   1. The `baseUrl` to be the same as the name of your project.

Read more about the [types of GitLab Pages](https://docs.gitlab.com/ce/user/project/pages/getting_started_part_one.html).

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings > General > Advanced** and remove the forking relationship, which
won't be necessary unless you want to contribute back to the GitLab upstream project.

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.
