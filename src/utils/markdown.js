import MarkdownIt from "markdown-it";
import { important_plugin } from "./plugins/important";
import color from "./plugins/color";
import bgColor from "./plugins/bgColor";

const markdownParser = new MarkdownIt();

markdownParser.use(important_plugin);
markdownParser.inline.ruler.push("bgColor", bgColor);
markdownParser.inline.ruler.push("color", color);

export { markdownParser };
