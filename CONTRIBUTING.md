## Contributors' Guide

Welcome to our project! We're excited to have you contribute. Please follow these guidelines to ensure a smooth and efficient collaboration.

### Before Contributing

- **Follow Commit Conventions**: Please adhere to the commit conventions outlined [here](https://commitlint.js.org/concepts/commit-conventions.html).

### Branching Strategy

- **Main Branch**: We have a single main branch.
- **Development Branches**: Use feature branches for development, named as `feat/...`, `fix/...`, `chore/...`, etc.

### Automated Release Process

- **Automatic Releases**: This repository uses GitHub Actions to automatically release to NPM.
- **Nx Release**: We use the magic feature of Nx release to handle versioning. You don't need to manually handle versions. Just follow the commit message conventions, and Nx release will determine the version for each package based on the files changed by each commit. For more details, please read the [Nx release documentation](https://nx.dev/recipes/nx-release/automatically-version-with-conventional-commits#usage-with-independent-releases).
- **Version Bumping**: Nx will independently bump the version for each package based on the `conventionalCommits` configuration in `nx.json`. This determination is made based on the files changed by each commit, not by the scope of the commit message. The commit message scope will be useful for the changelog if Nx is configured to update it.
- **Dependencies**: Dependencies in package.json, which also show in the NPM "dependencies" section, will be added automatically by Nx during the build process.

### Handling Failures

- **Failure Commitlint Example**:

  ```
  ⧗   input: <your-commit-message>
  ✖   subject may not be empty [subject-empty]
  ✖   type may not be empty [type-empty]

  ✖   found 2 problems, 0 warnings
  ```

  \*This should never occur in CI because Husky is set up with commit-msg to verify your commit messages before you commit. If commitlint fails, you need to clean your git history to ensure compliance.

### Release Packages

You can view our packages [here](https://www.npmjs.com/settings/centralpattana/packages).
(We have only one admin account to prevent unexpected issues. The access token used by GitHub Actions is generated under this account. Having a single admin account is also cost-effective if you plan to switch this repo to private, as it costs per user account in the organization.)

Thank you for contributing! We appreciate your efforts to maintain the quality and consistency of this project.
