export default {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
  },
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": ["prettier", "react", "react-hooks"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "printWidth": 160
      },
    ],
    "no-console": "off",
    "no-unused-vars": "off",
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};