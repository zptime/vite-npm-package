<template>
  <a-tree-select
    v-bind="$attrs"
    placeholder="请选择"
    style="width: 100%"
    :tree-data="departSource"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    show-search
    allow-clear
    tree-default-expand-all
    treeNodeFilterProp="title"
    :getPopupContainer="(triggerNode) => triggerNode.parentNode"
    @select="handleSelect"
  >
  </a-tree-select>
</template>

<script>
import { watchEffect } from "vue";
export default {
  name: "tTreeSelect",
  props: {
    // 数据源
    departSource: {
      type: Array,
      default: [],
    },
  },
  setup(props, context) {
    console.log("props：", props);
    console.log("context.attrs：", context.attrs); // $attrs
    console.log("context.slots：", context.slots); // $slots
    console.log("context.emit：", context.emit); // $slots
    console.log("context.expose：", context.expose); // vue3.2 新增

    watchEffect(() => {
      console.log(`value is: ` + context.attrs.value);
    });

    const handleSelect = (value, node, extra) => {
      console.log(value, node, extra);
    };

    return { handleSelect };
  },
};
</script>

<style scoped></style>
