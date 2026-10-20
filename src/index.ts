import type { RehypeTikzjaxOptions } from 'rehype-tikzjax';
import type { QuartzTransformerPlugin } from "@quartz-community/types";

import rehypeTikzjax from "rehype-tikzjax";

type Options = RehypeTikzjaxOptions;

export const Quartikz: QuartzTransformerPlugin<Options> = (options?: Options) => {
  return {
    name: "Quartikz",
    htmlPlugins() {
      return [[rehypeTikzjax, options]]
    }
  }
}