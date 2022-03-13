import MarkdownIt from "markdown-it";

import { important } from "./plugins/important";
import { styledHeading } from "./plugins/styledHeading";
import color from "./plugins/color";
import bgColor from "./plugins/bgColor";

const markdownParser = new MarkdownIt();

markdownParser.use(important);
markdownParser.use(styledHeading);
markdownParser.inline.ruler.push("bgColor", bgColor);
markdownParser.inline.ruler.push("color", color);

export { markdownParser };
