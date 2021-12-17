import tButton from "./src/index.vue";

tButton.install = function (Vue) {
  Vue.component(tButton.name, tButton);
};

export default tButton;
