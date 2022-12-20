import { Block } from "@cube-dev/ui-kit";
import { tasty } from "@cube-dev/ui-kit";

const Container = tasty(Block, {
  styles: {
    maxWidth: "1140px",
    padding: ["0", "0 20px", "0 20px"],
    margin: "0 auto",
  },
});

export default Container;
