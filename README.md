# @kamatte-me/npm-sandbox

My NPM sandbox project.

Build ESM / CJS package with TypeScript.

## Tools

- pnpm
- Vite
- Vitest
- ESLint
- Prettier
- Renovate
- GitHub Actions
- [Changesets](https://github.com/changesets/changesets)
- [publint](https://publint.dev/)

## Getting Started 🚀

1. Create a new GitHub repository
2. Download this repository
3. Modify the Changesets config in [`.changeset/config.json`](./.changeset/config.json)
   ```diff
   - { "repo": "kamatte-me/npm-sandbox" }
   + { "repo": "<your-org>/<your-repo>" }
   ```
4. Update the following package information in [`package.json`](./package.json)
   - `name`
   - `version`: `0.0.0`
   - `description`
   - `keywords`
   - `homepage`
   - `repository`
   - `license`
   - `author`
5. Update [`README.md`](./README.md)
6. Update [`LICENSE`](./LICENSE)
7. Push to GitHub
   ```shell
   git init
   git add --all
   git commit -m "first commit"
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
8. Configure GitHub repository `Settings`
   - `Actions` > `General` > `Workflow permissions`
     - Enable `Read and write permissions`
     - Enable `Allow GitHub Actions to create and approve pull requests`
   - `Secrets and variables` > `Actions` > `New repository secret`
     - `NPM_TOKEN`: Your NPM Granular Access Token
9. Install the following GitHub Apps
   - [changeset-bot](https://github.com/apps/changeset-bot)
   - [Renovate](https://github.com/settings/installations/32087651)
   - [renovate-approve](https://github.com/settings/installations/32308587)
10. **DEVELOP YOUR LIBRARY**
    10.1. Before merging a pull request, either run `pnpm changeset` or follow the comments from changeset-bot on the PR, decide on the release type and write the release notes.
    10.2. Confirm that the changeset-bot has commented `🦋 Changeset detected` on the pull request before merging.
    10.3. Merge the pull request.
11. First Publish 🎉
    - Merge the pull request titled `Version Packages`.
