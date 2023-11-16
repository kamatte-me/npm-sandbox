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
- [auto](https://github.com/intuit/auto)

## Getting Started 🚀

1. Create a new GitHub repository
2. Download this repository
3. Create an empty commit and then push
   ```sh
   git init
   git commit --allow-empty --allow-empty-message -m ""
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
4. Create an initial GitHub release ([for auto](https://github.com/intuit/auto/issues/2021#issuecomment-906116717))
   - Tag & Release Title: `v0.0.0`
5. Modify the Release Workflow in [`.github/workflows/release.yml`](./.github/workflows/release.yml)
   ```diff
   - - run: pnpm auto shipit
   + - run: pnpm auto shipit --dry-run
   ```
6. Update the following package information in [`package.json`](./package.json)
   - `name`
   - `version`: `0.0.0`
   - `description`
   - `keywords`
   - `homepage`
   - `repository`
   - `license`
   - `author`
7. Update [`README.md`](./README.md)
8. Update [`LICENSE`](./LICENSE)
9. Remove [`CHANGELOG.md`](./CHANGELOG.md)
10. Push to GitHub
    ```
    git add --all
    git commit -m "first commit"
    git push
    ```
11. Generate new tokens
    - GitHub [Personal Access Token (classic)](https://github.com/settings/tokens/new)
      - Select scopes
        - `repo`
    - NPM Granular Access Token
      - Permissions: `Read and write`
12. Configure GitHub repository `Settings`
    - `Actions` > `General` > `Workflow permissions`
      - Enable `Read and write permissions`
      - Enable `Allow GitHub Actions to create and approve pull requests`
    - `Secrets and variables` > `Actions` > `New repository secret`
      - `GH_ADMIN_TOKEN`: Your GitHub Personal Access Token
      - `NPM_TOKEN`: Your NPM Granular Access Token
    - `Branches` > `Add rule`
      - For the `main` branch:
        - Enable `Require a pull request before merging`
          - Enable `Require approvals`
          - Enable `Dismiss stale pull request approvals when new commits are pushed`
        - Enable `Require status checks to pass before merging`
          - `Status checks that are required.`
            - `test`
            - `lint`
            - `typecheck`
            - `build`
      - For the `next` branch:
        - Use the same settings as the main branch
        - Enable `Allow deletions`
13. Install the following GitHub Apps
    - [Renovate](https://github.com/settings/installations/32087651)
    - [renovate-approve](https://github.com/settings/installations/32308587)
14. Create labels for auto
    ```sh
    GH_TOKEN=<Your GitHub Personal Access Token> pnpm auto create-labels
    ```
15. **DEVELOP YOUR LIBRARY**
    - Familiarize yourself with the [auto](https://intuit.github.io/auto/) release workflow release workflow
16. Publish 🎉
    ```sh
    1. Revert the release workflow changes
    2. PR and Merge the reverted changes into the `main` branch
    ```
