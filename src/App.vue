<template>
  <!-- 发包前使用 -->
  <demo />
  <!-- 发包后使用 -->
  <npm-demo />
</template>

<script setup>
import demo from "@/components/demo.vue";
import npmDemo from "@/components/npmDemo.vue";
</script>

<style>
.demo {
  margin: 60px;
}
.block {
  margin-bottom: 20px;
}
</style>
