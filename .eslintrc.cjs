module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"prettier"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", {"argsIgnorePattern": "^_"}],
    "no-empty-function": "error",
    "@typescript-eslint/no-empty-function": "error",
    "indent": ["error", 2],
    "prettier/prettier": ["error", { "endOfLine": "off" }]
  },
}
