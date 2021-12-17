import tTreeSelect from "./src/index.vue";

tTreeSelect.install = function (Vue) {
  Vue.component(tTreeSelect.name, tTreeSelect);
};

export default tTreeSelect;
