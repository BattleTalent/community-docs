# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Requirements:
This project requires Node.js version 18.17 or later.
To easily switch you could use `nvm`.
```console
nvm install 22.13
nvm use 22.13
```

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Compile errors

If you receiving the following error:
```
Error: error:0308010C:digital envelope routines::unsupported
    at String.replace (<anonymous>)
```

Run the following command.
```console
npm_config_yes=true npx yarn-audit-fix
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<YOUR_GIT_USERNAME> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
