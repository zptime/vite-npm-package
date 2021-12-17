<template>
  <div class="demo">
    <t-button class="block" />

    <depart-tree-select
      :depart-source="departTree"
      v-model:value="departId"
      :fieldNames="fieldNames"
    />
  </div>
</template>

<script setup>
import tButton from "packages/button/src/index.vue";
// 1. 本地引入
import departTreeSelect from "packages/treeSelect/src/index.vue";

// 2. 打包后引入(pnpm build)
// import departTreeSelect from "../../dist/tTreeSelect.es.js";
// import "../../dist/style.css";

// 3. 发包到npm后使用 v2.0.0

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
