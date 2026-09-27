# Onyxium docs

Minimal [Starlight](https://starlight.astro.build/) documentation site.

## Local development

Use Node.js 24 and Bun 1.3.12.

```sh
bun install
bun run dev
```

Edit `src/content/docs/index.md`. Documentation content is TODO.

## Cloudflare Pages

The GitHub Actions workflow builds pull requests and publishes pushes to `main` to Cloudflare Pages. It can also be run manually from `main`.

TODO: Create a GitHub repository with this folder as its root.

TODO: Create a **Direct Upload** Pages project named `onyxium-docs`, with production branch `main`. For example, authenticate locally and run:

```sh
bunx wrangler login
bunx wrangler pages project create onyxium-docs --production-branch main
```

TODO: Add these GitHub repository secrets under **Settings → Secrets and variables → Actions**:

| Secret | Value |
| --- | --- |
| `CLOUDFLARE_ACCOUNT_ID` | The account containing the Pages project |
| `CLOUDFLARE_API_TOKEN` | An API token with **Account → Cloudflare Pages → Edit**, scoped to that account |

Push to `main` to publish. Pull requests only build and require no Cloudflare secrets.

TODO: Set the production `site` URL in `astro.config.mjs`.

See [Cloudflare's GitHub Actions guide](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/).

## License

[MIT](LICENSE).
