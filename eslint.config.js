import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["src/**/*.js"],
        ignores:["**/*.config.js","dist/","**/node_modules/", "**/.git"],
		plugins: {
			js,
		},
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            parserOptions: {}
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
		},
	},
]);
