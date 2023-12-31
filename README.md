# Astro+PartyKit Starter Kit

```sh
npm create astro@latest -- --template hola-soy-milk/astro-party
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/hola-soy-milk/astro-party)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/hola-soy-milk/astro-party)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/hola-soy-milk/astro-party?devcontainer_path=.devcontainer/basics/devcontainer.json)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hola-soy-milk/astro-party)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhola-soy-milk%2Fnext.js%2Fastro-party)


This theme is forked off the [Astro Basics Theme](https://github.com/withastro/astro/tree/latest/examples/basics) with a built-in PartyKit integration.

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![Screenshot of the Astro + PartyKit theme](https://github.com/hola-soy-milk/astro-party/assets/656318/ded71bbc-5567-4a10-8259-4dbdeb9f6c6c)



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── party/
│   └── index.ts
├── src/
│   ├── components/
│   │   └── Card.astro
│   │   └── Party.svelte
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Your PartyKit server implementation is in `party/index.ts`.

Your PartyKit client implementation is in `src/components/Party.svelte`.

## 🎈 Running Locally

### Start Up a Local PartyKit Server

    npx partykit dev

### Start Up Astro

    npm start

## Deploying to Production

The `PARTY_URL` environment variable needs to be set in order to work live.

Find our more about [deploying PartyKit servers in their docs](https://docs.partykit.io/guides/deploying-your-partykit-server/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## 🎈 Want to learn more about PartyKit?

Feel free to check [PartyKit's documentation](https://docs.partykit.io/) or jump into their [Discord server](https://discord.gg/KDZb7J4uxJ).
