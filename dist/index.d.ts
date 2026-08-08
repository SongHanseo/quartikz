import { TeXOptions, SvgOptions } from 'node-tikzjax';
import { QuartzTransformerPlugin } from '@quartz-community/types';

type Options = TeXOptions & SvgOptions;
declare const Quartikz: QuartzTransformerPlugin<Options>;

export { Quartikz };
