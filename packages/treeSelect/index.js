import tTreeSelect from "./src/index";

tTreeSelect.install = function (Vue) {
  Vue.component(tTreeSelect.name, tTreeSelect);
};

export default tTreeSelect;
