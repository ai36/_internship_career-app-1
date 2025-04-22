import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
    pluginReact.configs.flat.recommended,

    {
        files: ["**/*.{jsx,js}"],
        plugins: {
            react: pluginReact,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off", // отключает обязательный импорт React
            "react/prop-types": "off", // отключает проверку propTypes
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
]);
