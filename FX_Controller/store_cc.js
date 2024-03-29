outlets = 6;

var KNOBS = 6;

var treasure = new JitterMatrix(1, "char", 7, 6);
treasure.setall(63);

var out = [63, 63, 63, 63, 63, 63];

function bang() {
  for (var i = 0; i < KNOBS; i++) {
    outlet(i, ["set", out[i]]);
  }
}

function store(effect, knob, value) {
  // post(effect, knob, value, "\n");
  if (effect == 0) return;

  treasure.setcell2d(effect, knob, value);
}

function restore(effect) {
  for (var knob = 0; knob < KNOBS; knob++) {
    if (effect == 6) {
      out[knob] = 63;
    } else {
      out[knob] = treasure.getcell(effect, knob)[0];

      // post("found on knob", knob, ": ", treasure.getcell(effect, knob)[0]);
    }
  }

  // post("\n");

  bang();
}

function resetEffect(effect) {
  if (effect == 6) return;

  for (var knob = 0; knob < KNOBS; knob++) {
    treasure.setcell2d(effect, knob, 63);
  }

  restore(effect);
}

function resetAll() {
  treasure.setall(63);
  restore(0);
}
