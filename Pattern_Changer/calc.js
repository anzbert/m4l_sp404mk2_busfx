var output = 0;

function list() {
  var cell = arrayfromargs(arguments); // cell = [x, y, cell value]
  if (cell[2] != 0) {
    output = (cell[0] + cell[1] * 4);
    bang();
  }
}

function bang() {
  outlet(0, output);
}
