import { storiesOf } from "@storybook/vue";

import MyButton from "./../components/MyButton.vue";

storiesOf("MyButton", module).add("simple", () => ({
  component: { MyButton },
  template: `<MyButton>KEEP IT SIMPLE</MyButton>`
}));
