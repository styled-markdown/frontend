export default function color(state, silent) {
  const start = state.pos;
  const max = state.posMax;
  const marker = state.src.charCodeAt(start);
  const char = String.fromCharCode(marker);

  if (silent || marker !== 37 /* % */) return false;

  const text = state.src.substring(start, max);
  const regex = /%(.+?)_(.+?)%/;
  const match = text.match(regex);

  if (!match) return false;

  let token = state.push("color_open", "span", 1);
  token.attrs = [["style", `color: ${match[1]}`]];
  token.markup = char;
  token.content = "";

  token = state.push("text", "", 0);
  token.content = `${match[2]}`;

  token = state.push("color_close", "span", -1);
  token.markup = char;
  token.content = "";

  state.pos += match[0].length;
  return true;
}
