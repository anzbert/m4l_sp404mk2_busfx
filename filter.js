inlets = 2;

var output = [0, 0, 1];

function bang() {
  outlet(0, output);
}

function filter2Grid(pitch, vel) {
  if (vel > 0 && pitch <= 15) {
    // output = pitch;

    output[0] = pitch % 4;
    output[1] = pitch / 4;
    bang();
  }
}
