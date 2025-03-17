# @kamatte-me/npm-sandbox

My NPM sandbox project.

Build ESM / CJS package with TypeScript.

## Tools

- pnpm
- Vite
- Vitest
- Biome
- Renovate
- GitHub Actions
- [Changesets](https://github.com/changesets/changesets)
- [publint](https://publint.dev/)

## Getting Started 🚀

1. Create a new GitHub repository
2. Download this repository
3. Modify the Release Workflow in [`.github/workflows/release.yml`](./.github/workflows/release.yml)
   ```diff
   - branches:
   -   - main
   + branches-ignore:
   +   - '**'
   ```
4. Modify the Changesets config in [`.changeset/config.json`](./.changeset/config.json)
   ```diff
   - { "repo": "kamatte-me/npm-sandbox" }
   + { "repo": "<your-org>/<your-repo>" }
   ```
5. Update the following package information in [`package.json`](./package.json)
   - `name`
   - `version`: `0.0.0`
   - `description`
   - `keywords`
   - `homepage`
   - `repository`
   - `license`
   - `author`
6. Update [`README.md`](./README.md)
7. Update [`LICENSE`](./LICENSE)
8. Push to GitHub
   ```shell
   git init
   git add --all
   git commit -m "first commit"
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
9. Configure GitHub repository `Settings`
   - `Actions` > `General` > `Workflow permissions`
     - Enable `Allow GitHub Actions to create and approve pull requests`
   - `Secrets and variables` > `Actions` > `New repository secret`
     - `NPM_TOKEN`: Your NPM Granular Access Token
10. Install the following GitHub Apps
    - [changeset-bot](https://github.com/apps/changeset-bot)
    - [Renovate](https://github.com/settings/installations/32087651)
    - [renovate-approve](https://github.com/settings/installations/32308587)
11. **DEVELOP YOUR LIBRARY**
12. First Release 🎉
    1. Set the `version` in [`package.json`](./package.json)
    2. Revert the [`.github/workflows/release.yml`](./.github/workflows/release.yml) changes

### After First Release

#### For each Pull Request

1. Before merging a pull request, either run `pnpm changeset` or follow the comments from changeset-bot on the pull request, decide on the release type and write the release notes.
2. Confirm that the changeset-bot has commented `🦋 Changeset detected` on the pull request before merging.
3. Merge the pull request.

#### For each release

Merge the pull request titled `Version Packages`.
