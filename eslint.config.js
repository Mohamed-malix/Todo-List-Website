import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "dist/", "**/node_modules/", "**/.git"],
    plugins: {
      js,
    },
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {},
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
    extends: ["js/recommended"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "error",
      curly: ["error", "all"],
      "no-mixed-operators": "error",
      "no-unexpected-multiline": "error",
      "no-confusing-arrow": ["error", { allowParens: false }],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: false },
      ],
      "unicorn/template-indent": [
        "error",
        {
          tags: ["outdent", "dedent", "sql", "styled"],
          functions: ["dedent", "stripIndent"],
          selectors: [],
          comments: ["indent"],
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "any",
          },
        },
      ],
      "vue/html-self-closing": ["error", { html: { void: "any" } }],
    },
  },
  eslintConfigPrettier,
]);
