import { RehypeTikzjaxOptions } from 'rehype-tikzjax';
import { QuartzTransformerPlugin } from '@quartz-community/types';

type Options = RehypeTikzjaxOptions;
declare const Quartikz: QuartzTransformerPlugin<Options>;

export { Quartikz };
