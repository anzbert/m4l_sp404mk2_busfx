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
      if (pressed == 6) {
        // always OFF on 6. otherwise button gets stuck on on
        out[i] = 0;
      } else {
        out[i] = 1;
      }
    } else {
      out[i] = 0;
    }
  }
  bang();
}
