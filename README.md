# GitHub Paper Coffee

<p align="center">
   <img width="400" src="https://raw.githubusercontent.com/wheredoesyourmindgo/github-paper-coffee-vscode-theme/master/images/logo.png" />
</p>

<p align="center" style="padding:16px 0;">🐙🐱🎨📜☕</p>

A fork of the VSCode Github Theme featuring the [Pen Paper Coffee](https://github.com/nylki/pen-paper-coffee-syntax) off-white background.

## Attribution

The font used in this README's title (logo) is [Kiperman](https://www.harbortype.com/fonts/kiperman/) from Harbor Type.

<a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by rawpixel.com - www.freepik.com</a>

[GitHub Theme](https://github.com/primer/github-vscode-theme) VSCode theme & [Pen Paper Coffee](https://github.com/nylki/pen-paper-coffee-syntax) Atom theme.

## README from Upstream Repo

![GitHub VS Code theme](https://user-images.githubusercontent.com/378023/78366757-ef48fb00-75fb-11ea-8d00-a8e61dbb9115.png)

### Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
2. Click on the "Install" button

### Override this theme

To quickly test something, you can also override this (or any other) theme in your personal config file. Please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

### Contribute

1. Clone and open this [repo](https://github.com/primer/github-vscode-theme) in VS Code
2. Press `F5` to open a new window with your extension loaded
3. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "GitHub Light" theme
4. Make changes to the [`/themes/light.json`](https://github.com/primer/github-vscode-theme/blob/master/themes/light.json) file.
    - **UI**: For all changes to the "outer UI", like (status bar, file navigation etc.), take a look at the [Theme Color](https://code.visualstudio.com/api/references/theme-color) reference.
    - **Syntax**: For changes to the "code highlighting", examine the syntax scopes by invoking the [`Developer: Inspect Editor Tokens and Scopes`](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector) command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) in the Extension Development Host window.
5. Commit your changes and open a PR.

Note:

- If possible use colors from [Primer's color system](https://primer.style/css/support/color-system).
- Changes to the theme files are automatically applied to the Extension Development Host window, so no reloading should be necessary.

### Publish (internal)

> Note: Publishing a new version of this theme is only meant for maintainers.

**Prerequisite**: Please follow this [guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) to install and login to `vsce`. Ask an existing maintainer how to get the "Personal Access Token".

1. Merge any PR that is ready to be published into `master`.
2. Update [CHANGELOG.md](https://github.com/primer/github-vscode-theme/blob/master/CHANGELOG.md) + commit the changes.
3. Run `vsce publish [version]`. Follow the [SemVer](https://semver.org) convention and replace `[version]` with one of the following  options:
    - `patch` for bug fixes
    - `minor` for improvements
    - `major` for breaking or bigger changes
4. Push the commits and make a [new realease](https://github.com/primer/github-vscode-theme/releases/new).
