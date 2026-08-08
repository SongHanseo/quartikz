import type { TeXOptions, SvgOptions } from 'node-tikzjax';
import type { QuartzTransformerPlugin } from "@quartz-community/types";

import rehypeTikzjax from "rehype-tikzjax";

type Options = TeXOptions & SvgOptions;

export const Quartikz: QuartzTransformerPlugin<Options> = (options?: Options) => {
  return {
    name: "Quartikz",
    htmlPlugins() {
      return [[rehypeTikzjax, options]]
    }
  }
}