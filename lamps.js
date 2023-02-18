outlets = 7;

var out = [0, 0, 0, 0, 0, 0, 0];

function bang() {
  for (var i = 0; i < out.length; i++) {
    outlet(i, ["set", out[i]]);
  }
}

function light(pressed) {
  for (var i = 0; i < out.length; i++) {
    if (pressed == i) {
      out[i] = 1;
    } else {
      out[i] = 0;
    }
  }
  bang();
}
