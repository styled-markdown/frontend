export default function bgColor(state, silent) {
  const start = state.pos;
  const max = state.posMax;
  const marker = state.src.charCodeAt(start);
  const char = String.fromCharCode(marker);

  if (silent || marker !== 37 /* % */) return false;

  const scanned = state.scanDelims(state.pos, true);

  if (scanned.length < 2) return false;

  const text = state.src.substring(start, max);
  const regex = /%%(.+?)_(.+?)%%/;
  const match = text.match(regex);

  console.log(match);
  if (!match) return false;

  let token = state.push("bgColor_open", "span", 1);
  token.attrs = [["style", `background-color: ${match[1]}`]];
  token.markup = char + char;
  token.content = "";

  token = state.push("text", "", 0);
  token.content = `${match[2]}`;

  token = state.push("bgColor_close", "span", -1);
  token.markup = char + char;
  token.content = "";

  state.pos += match[0].length;
  return true;
}
