var fxList = ["_parameter_range", "---", "---"];

function bang() {
  outlet(0, fxList);
}

function selectFx(index) {
  if (index == 0 || index == 1) {
    fxOneTwo();
  } else if (index == 2 || index == 3) {
    fxThreeFour();
  } else {
    fxInput();
  }
}

function fxOneTwo() {
  var fx = [
    "_parameter_range",
    "(OFF)",
    "Direct FX1",
    "Direct FX2",
    "Direct FX3",
    "Direct FX4",
    "Direct FX5",
    "Scatter",
    "Downer",
    "Ha-Dou",
    "Ko-Da-Ma",
    "Zan-Zou",
    "To-Gu-Ro",
    "SBF",
    "Stopper",
    "Tape Echo",
    "TimeCtrlDly",
    "Super Filter",
    "WrmSaturator",
    "303 VinylSim",
    "404 VinylSim",
    "Cassette Sim",
    "Lo-fi",
    "Reverb",
    "Chorus",
    "JUNO Chorus",
    "Flanger",
    "Phaser",
    "Wah",
    "Slicer",
    "Tremolo/Pan",
    "Chromatic PS",
    "Hyper-Reso",
    "Ring Mod",
    "Crusher",
    "Overdrive",
    "Distortion",
    "Equalizer",
    "Compressor",
    "SX Reverb",
    "SX Delay",
    "Cloud Delay",
    "Back Spin",
  ];

  fxList.length = 0;
  for (var i = 0; i < fx.length; i++) {
    fxList.push(fx[i]);
  }
  bang();
}

function fxThreeFour() {
  var fx = [
    "_parameter_range",
    "(OFF)",
    "303 VinylSim",
    "404 VinylSim",
    "Cassette Sim",
    "Lo-fi",
    "Downer",
    "Compressor",
    "Equalizer",
    "Isolator",
    "Super Filter",
    "Filter+Drive",
    "WrmSaturator",
    "Overdrive",
    "Distortion",
    "Crusher",
    "Ring Mod",
    "SBF",
    "Resonator",
    "Hyper-Reso",
    "Chromatic PS",
    "Reverb",
    "Ha-Dou",
    "Zan-Zou",
    "Sync Delay",
    "TimeCtrlDly",
    "Ko-Da-Ma",
    "Tape Echo",
    "Chorus",
    "JUNO Chorus",
    "Flanger",
    "Phaser",
    "Wah",
    "Slicer",
    "Tremolo/Pan",
    "To-Gu-Ro",
    "DJFX Looper",
    "Scatter",
    "SX Reverb",
    "SX Delay",
    "Cloud Delay",
  ];
  fxList.length = 0;
  for (var i = 0; i < fx.length; i++) {
    fxList.push(fx[i]);
  }
  bang();
}

function fxInput() {
  var fx = [
    "_parameter_range",
    "(OFF)",
    "Auto Pitch",
    "Vocoder",
    "Harmony",
    "Gt Amp Sim",
    "Chorus",
    "JUNO Chorus",
    "Reverb",
    "TimeCtrlDly",
    "Chromatic PS",
    "Downer",
    "WrmSaturator",
    "303 VinylSim",
    "404 VinylSim",
    "Cassette Sim",
    "Lo-fi",
    "Equalizer",
    "Compressor",
  ];
  fxList.length = 0;
  for (var i = 0; i < fx.length; i++) {
    fxList.push(fx[i]);
  }
  bang();
}
