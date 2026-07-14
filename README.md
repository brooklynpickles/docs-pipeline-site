# docs-pipeline-site

Aggregated documentation site for the [docs-pipeline](https://github.com/brooklynpickles/docs-pipeline)
demo, built with [Docusaurus](https://docusaurus.io/) and published to GitHub Pages.

## How content gets here

Each of the four source forks runs its own docs-as-code CI (spec lint, prose
lint, AI-drafted updates from spec diffs). On every merge to that fork's
default branch, it fires a `repository_dispatch` event at this repo, which
pulls the fork's `docs/` folder into `docs/<product>/` here and commits.
That commit triggers the GitHub Pages deploy.

Source forks:

- [swagger-petstore](https://github.com/brooklynpickles/swagger-petstore) → `docs/petstore/`
- [rest-api-description](https://github.com/brooklynpickles/rest-api-description) → `docs/github-rest-api/`
- [openapi](https://github.com/brooklynpickles/openapi) (Stripe) → `docs/stripe/`
- [full-stack-fastapi-template](https://github.com/brooklynpickles/full-stack-fastapi-template) → `docs/fastapi-template/`

## Local development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

A successful build is also the validation gate: broken links or invalid MDX
(e.g. stray `{` or `<` from an AI-drafted page) fail the build rather than
reaching the published site.
