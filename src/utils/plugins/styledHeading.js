const isSpace = (code) => {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
    default:
      return false;
  }
};

export const styledHeading = (md) => {
  const styledHeading = (state, startLine, endLine, silent) => {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    const char = state.src.charCodeAt(pos);

    if (char !== 0x23 /* # */ || pos >= max) {
      return false;
    }

    // count heading level
    let level = 1;
    let nextChar = state.src.charCodeAt(++pos);

    while (nextChar === 0x23 /* # */ && pos < max && level <= 6) {
      level++;
      nextChar = state.src.charCodeAt(++pos);
    }

    const match = state.src.slice(pos).match(/^_([^ ].+?) /);

    if (
      level > 6 ||
      (pos < max && isSpace(nextChar)) ||
      (pos < max && nextChar !== 95) /* _ */ ||
      !match
    ) {
      return false;
    }

    if (silent) {
      return true;
    }

    // Let's cut tails like '    ###  ' from the end of string
    max = state.skipSpacesBack(max, pos);
    const tmp = state.skipCharsBack(max, 0x23, pos); // #

    if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
      max = tmp;
    }

    state.line = startLine + 1;

    let token = state.push("heading_open", "h" + String(level), 1);
    token.markup = "########".slice(0, level);
    token.map = [startLine, state.line];
    token.attrs = [["style", `background-color: ${match[1]}`]];

    token = state.push("inline", "", 0);
    token.content = state.src.slice(pos + match[0].length, max).trim();
    token.map = [startLine, state.line];
    token.children = [];

    token = state.push("heading_close", "h" + String(level), -1);
    token.markup = "########".slice(0, level);

    return true;
  };

  md.block.ruler.after("heading", "styledHeading", styledHeading);
};
