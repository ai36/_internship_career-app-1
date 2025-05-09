import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [pluginReact()],

    html: {
        favicon: 'public/favicon.svg',
        tags: [
            {
                tag: "html",
                attrs: { lang: "ru" },
            },
        ],
        title: "Career App",
    },

    source: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },

    output: {
        distPath: {
            root: "dist",
        },
    },
});
