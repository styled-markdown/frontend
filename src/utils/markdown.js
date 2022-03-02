import MarkdownIt from "markdown-it";
import iterator from "markdown-it-for-inline";

const markdownParser = new MarkdownIt();

markdownParser.use(iterator, "custom_test", "text", (tokens, idx) => {
  // some rules to use ...
});

export { markdownParser };
