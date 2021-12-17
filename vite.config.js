import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";
import path from "path";

const resolve = (dir) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteComponents({
    //   customComponentResolvers: [AntDesignVueResolver()],
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
      packages: resolve("packages"),
    },
  },
  build: {
    lib: {
      entry: resolve("packages/button/index.js"),
      name: "TButton",
      fileName: (format) => `tbutton.${format}.js`,
    },
    // 自定义构建配置，可直接调整底层Rollup选项；Rollup有一套预设
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
