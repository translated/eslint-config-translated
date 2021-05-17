# 🧹 ESLint config Translated

This package provides the ESLint configuration for JavaScript projects, either NodeJS or ReactJS, in Translated organization.

You can check eslint plugins used directly from the [plugins](https://github.com/translated/eslint-config-translated/blob/main/index.js) section.

## Rules

The following rules are explicitly applied on top of the base configuration exported from plugins:
- `"no-console": "off"`: services currently log using the native `console.log` and `console.error` without using 3rd party logging libraries
- `"max-lines-per-function": ["error", 200]`: good indicator of a too complex function
- `"import/order": "error"`: for improved readability
- `"singleQuote": true`: for improved readability
- `"printWidth": 160`: for improved readability, assuming company developers are supposed to use at least a 24" display

## 💻 Installation

Install package as a `devDependency`:
```bash
yarn add --dev eslint-config-translated
```

### 🪛 Configuration

Create a `.eslintrc` file with the following content:
```json
{
  "extends": ["eslint-config-translated"]
}
```

### 🚀 Run the linter

Find codebase errors:
```bash
yarn eslint .
```

Fix codebase errors:
```bash
yarn eslint --fix .
```
