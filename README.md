# Quartikz

Build-time TikZ renderer for Quartz 5

This plugin renders TikZ code blocks into SVG diagrams during the build process. 
It must be inserted before any plugins that manipulate code blocks, such as the [Quartz Syntax Highlighting](https://github.com/quartz-community/syntax-highlighting) plugin.

Built with [`rehype-tikzjax`](https://github.com/SongHanseo/rehype-tikzjax), which relies on [`prinsss/node-tikzjax`](https://github.com/prinsss/node-tikzjax). Plugin options are directly inherited from `node-tikzjax`.

## Limitations
Because `node-tikzjax` does not support concurrent rendering, this plugin renders TikZ diagrams consecutively. It might become a bottleneck during the build step if your project contains a massive amount of diagrams.

If you prefer client-side rendering instead of build-time rendering, try [`corpetty/quartz-tikz`](https://github.com/corpetty/quartz-tikz).
