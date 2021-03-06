module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "import",
    "immutable",
    "jest",
  ],
  rules: {
    "no-unused-vars": "warn",
    "func-names": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "warn",
    "spaced-comment": "off",
    camelcase: "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/destructuring-assignment": "warn",
    "no-new": "error",
    "immutable/no-let": "warn",
    "immutable/no-this": "warn",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
