/* eslint-disable import/no-unresolved */
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierConfig,
  {
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          paths: ["src"],
        },
      },
      "import/ignore": [".coffee$", ".(scss|less|css)$", "node_modules"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "class-methods-use-this": "off",
      "array-bracket-newline": "off",
      "array-element-newline": "off",
      "arrow-body-style": "error",
      "block-scoped-var": "error",
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      complexity: "error",
      "constructor-super": "error",
      camelcase: "off",
      curly: "error",
      "default-case": "off",
      "no-case-declarations": "off",
      "dot-notation": "error",
      "eol-last": "error",
      eqeqeq: "error",
      "func-names": "warn",
      "guard-for-in": "off",
      "global-require": "off",
      "implicit-arrow-linebreak": "off",
      indent: ["warn", 2, { SwitchCase: 1 }],
      "linebreak-style": "off",
      "max-classes-per-file": "off",
      "newline-per-chained-call": ["error", { ignoreChainWithDepth: 5 }],
      "new-parens": "error",
      "no-alert": "error",
      "no-duplicate-imports": "off",
      "no-nested-ternary": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-underscore-dangle": "off",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-console": "warn",
      "no-else-return": "error",
      "no-empty": "off",
      "no-plusplus": "off",
      "no-empty-functions": "off",
      "consistent-return": "off",
      "no-dynamic-require": "off",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-fallthrough": "error",
      "no-floating-decimal": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-invalid-this": "off",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "max-len": [
        "error",
        {
          ignoreRegExpLiterals: true,
          ignoreUrls: true,
          comments: 90,
          code: 1200,
        },
      ],
      "no-magic-numbers": ["off", { ignoreArrayIndexes: true }],
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0 }],
      "no-new": "error",
      "comma-dangle": "off",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "warn",
      "no-proto": "error",
      "no-return-assign": "error",
      "no-return-await": "error",
      "no-restricted-syntax": "off",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-undef": "off",
      "no-unsafe-finally": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-use-before-define": ["error", { functions: false }],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "object-shorthand": "error",
      "object-curly-newline": [
        "error",
        {
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
          ImportDeclaration: { consistent: true, multiline: true },
          ExportDeclaration: { consistent: true, multiline: true },
        },
      ],
      "padded-blocks": [
        "error",
        { blocks: "never", classes: "never", switches: "never" },
      ],
      "one-var": ["error", "never"],
      "padding-line-between-statements": "error",
      "prefer-const": "error",
      "prefer-object-spread": "warn",
      "quote-props": ["error", "as-needed"],
      radix: "error",
      "require-await": "error",
      "import/no-unresolved": [2, { commonjs: true, amd: true }],
      "import/order": [
        "error",
        {
          groups: [["builtin", "external", "internal"]],
          "newlines-between": "never",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          allowSeparatedGroups: false,
        },
      ],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          asyncArrow: "always",
          named: "never",
        },
      ],
      "use-isnan": "error",
      "wrap-iife": "error",
      yoda: "error",
    },
  },
];