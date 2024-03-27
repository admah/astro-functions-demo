# Astro Demo w/ Wrangler Config

This demo shows you how to use a wrangler.toml file in an Astro project. This currently only works in local mode via `wrangler pages dev`, but will soon work for deployed sites as well.

Begin by running `npm run preview`. Go to `http://localhost:8787/api/hello` to see the environment variable from `wrangler.toml` returned.

To see how this is implemented, go to `pages/api/hello.ts`. The environment variable was also defined first in `env.d.ts`. 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run preview`         | Preview your build locally, before deploying     |

## 👀 Want to learn more?

- Read the [in-flight docs](https://admah-add-pages-wrangler-con.cloudflare-docs-7ou.pages.dev/pages/functions/wrangler-configuration/) to see what is possible via wrangler.toml

- For more information on using bindings in an Astro project read the [Pages docs](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#use-bindings-in-your-astro-application).

