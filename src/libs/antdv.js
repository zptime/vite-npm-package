import { TreeSelect } from "ant-design-vue";
const components = [TreeSelect];

export function setupAntd(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
