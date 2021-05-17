# 🧹 ESLint config Translated

This package provides an ESLint configuration for JavaScript projects (React.js or Node.js).
 
This ESLint config extends the following configs
```
eslint:recommended
prettier
plugin:react/recommended
plugin:react-hooks/recommended
plugin:jest/recommended
```

On top of the base config, these rules are explicitly applied
```
"no-console": "off"
"max-lines-per-function": ["error", 200]
"import/order": "error"
```

The styling follows the prettier recommendations plus this custom config
```
"singleQuote": true
"printWidth": 160
```

- `singleQuote` to improve script readability
- wider `printWidth` because in Translated every dev has at least a 24" external monitor

### 💻 Installation

To use this package, install it as a devDependency inside your project

```
yarn add --dev eslint eslint-config-translated
```

### 🪛 Configuration
Create a `.eslintrc` file with the following content

```
{
  "extends": ["eslint-config-translated"]
}
```

Add a lint script inside the `package.json`

```
"scripts": {
  "lint": "eslint src --ext .js",
  ...
}
```

### 🚀 Run the linter
```
yarn lint
```
