import rehypeTikzjax from "rehype-tikzjax";
export const Quartikz = (options) => {
    return {
        name: "Quartikz",
        htmlPlugins() {
            return [[rehypeTikzjax, options]];
        }
    };
};
//# sourceMappingURL=index.js.map