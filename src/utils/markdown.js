import MarkdownIt from "markdown-it";
import iterator from "markdown-it-for-inline";
import important_plugin from "./plugin";

const markdownParser = new MarkdownIt();

markdownParser.use(important_plugin);
// markdownParser.use(iterator, "fontColor", "text", (tokens, idx) => {
//   // rules
// });

export { markdownParser };
