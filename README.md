# Vue 3 + Vite 发布组件

> 使用 vite 发布自定义组件到 npm

1. v1.0.4 是 tButton 按钮组件，自定义的

```js
import tButton from "vite-npm-package";
import "vite-npm-package/dist/style.css";
```

2. v2.0.0 是 tTreeSelect 树选择组件，基于 Ant Design Vue 的 TreeSelect 组件进行了二次封装

```js
import tTreeSelect from "vite-npm-package";
import "vite-npm-package/dist/style.css";
```

3. v3.0.0 是 自定义组件库尝试，tButton 和 tTreeSelect 均在其中

```html
<template>
  <div class="demo">
    本地引入
    <t-button class="block" />
    <t-tree-select
      :depart-source="departTree"
      v-model:value="departId"
      :fieldNames="fieldNames"
    />
  </div>
</template>

<script setup>
  import tAntDesign from "vite-npm-package";
  import "vite-npm-package/dist/style.css";
  const { tButton, tTreeSelect } = tAntDesign;
</script>
```
