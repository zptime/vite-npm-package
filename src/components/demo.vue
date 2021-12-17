<template>
  <div class="demo">
    本地引入
    <t-button class="block" />
    <depart-tree-select
      :depart-source="departTree"
      v-model:value="departId"
      :fieldNames="fieldNames"
    />
    <br /><br />
    dist引入
    <tmc-button />
    <tmc-tree-select
      :depart-source="departTree"
      v-model:value="departId"
      :fieldNames="fieldNames"
    />
    <br /><br />

    npm包引入
    <m-button />
    <m-tree-select
      :depart-source="departTree"
      v-model:value="departId"
      :fieldNames="fieldNames"
    />
  </div>
</template>

<script setup>
// 1. 本地引入
import tButton from "packages/button/src/index.vue";
import departTreeSelect from "packages/treeSelect/src/index.vue";

// 2. 打包后引入(pnpm build)
import tmcAntDesign from "../../dist/tAntDesign.es.js";
const { tButton: tmcButton, tTreeSelect: tmcTreeSelect } = tmcAntDesign;
import "../../dist/style.css";

import tAntDesign from "vite-npm-package";
const { tButton: mButton, tTreeSelect: mTreeSelect } = tAntDesign;
import "vite-npm-package/dist/style.css";

const fieldNames = {
  children: "children",
  label: "name",
  key: "id",
  value: "id",
};

const departTree = [
  {
    id: 1,
    name: "根部门",
    departNumber: 6,
    children: [
      {
        id: 11,
        pid: 1,
        name: "一级部门1",
        departNumber: 2,
        children: [
          { id: 111, pid: 11, name: "二级部门1", departNumber: 0 },
          { id: 112, pid: 11, name: "二级部门2", departNumber: 0 },
        ],
      },
      { id: 21, pid: 1, name: "一级部门2", departNumber: 0 },
      { id: 31, pid: 1, name: "一级部门3", departNumber: 0 },
      { id: 41, pid: 1, name: "一级部门4", departNumber: 0 },
      { id: 51, pid: 1, name: "一级部门5", departNumber: 0 },
      {
        id: 61,
        pid: 1,
        name: "一级部门6",
        departNumber: 2,
        children: [
          { id: 611, pid: 61, name: "二级部门3", departNumber: 0 },
          { id: 612, pid: 61, name: "二级部门4", departNumber: 0 },
        ],
      },
    ],
  },
];

const departId = 11;
</script>

<style scoped></style>
