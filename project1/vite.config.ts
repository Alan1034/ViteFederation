/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-09-02 16:57:46
 * @LastEditTime: 2024-09-02 17:05:47
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: https://github.com/originjs/vite-plugin-federation/blob/main/README-zh.md
 * @FilePath: \ViteFederation\project1\vite.config.ts
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      federation({
        name: "project1",
        filename: "remoteEntry.js",
        exposes: {
          "./Content": "./src/components/Content.vue",
        },
        shared: {
          vue: {
            // 这里写配置
            //本地模块和远程模块共享的依赖。本地模块需配置所有使用到的远端模块的依赖；远端模块需要配置对外提供的组件的依赖。
          },
        },
      }),
    ],
  };
});
