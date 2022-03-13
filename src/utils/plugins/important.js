export const important = (md) => {
  const tokenize = (state, silent) => {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);

    if (silent || marker !== 33) return false;

    const scanned = state.scanDelims(state.pos, true);
    let len = scanned.length;
    const char = String.fromCharCode(marker);

    if (len < 2) return false;
    if (len % 2) {
      const token = state.push("text", "", 0);
      token.content = char;
      len--;
    }

    for (let i = 0; i < len; i += 2) {
      const token = state.push("text", "", 0);
      token.content = char + char;

      if (!scanned.can_open && !scanned.can_close) {
        continue;
      }

      state.delimiters.push({
        marker: marker,
        length: 0,
        jump: i / 2,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close,
      });
    }

    state.pos += scanned.length;
    return true;
  };

  const postProcess = (state, delimiters) => {
    const loneMarkers = [];
    const max = delimiters.length;

    for (let i = 0; i < max; i++) {
      const startDelim = delimiters[i];

      if (startDelim.marker !== 33 || startDelim.end === -1) {
        continue;
      }

      const endDelim = delimiters[startDelim.end];

      let token = state.tokens[startDelim.token];
      token.type = "important_open";
      token.tag = "font";
      token.attrs = [["style", "color: red; font-weight: bold"]];
      token.nesting = 1;
      token.markup = "!!";
      token.content = "";

      token = state.tokens[endDelim.token];
      token.type = "important_close";
      token.tag = "font";
      token.nesting = -1;
      token.markup = "!!";
      token.content = "";

      if (
        state.tokens[endDelim.token - 1].type === "text" &&
        state.tokens[endDelim.token - 1].content === "!"
      ) {
        loneMarkers.push(endDelim.token - 1);
      }
    }

    while (loneMarkers.length) {
      let i = loneMarkers.pop();
      let j = i + 1;

      while (
        j < state.tokens.length &&
        state.tokens[j].type === "important_close"
      ) {
        j++;
      }

      j--;

      if (i !== j) {
        let token = state.tokens[j];
        state.tokens[j] = state.tokens[i];
        state.tokens[i] = token;
      }
    }
  };

  md.inline.ruler.before("emphasis", "mark", tokenize);
  md.inline.ruler2.before("emphasis", "mark", (state) => {
    const tokens_meta = state.tokens_meta;
    const max = (state.tokens_meta || []).length;

    postProcess(state, state.delimiters);

    for (let curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess(state, tokens_meta[curr].delimiters);
      }
    }
  });
};
