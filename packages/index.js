import tButton from "./button";
import tTreeSelect from "./treeSelect";

const components = [tButton, tTreeSelect];

// 如果想通过CDN方式引入，需要编写install函数
// 注册组件
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  tButton,
  tTreeSelect,
};
