var data = {
  "(Off)": {},

  "Filter+Drive": {
    0: {
      name: "Cutoff",
      unit: "Hz",
      min: 0,
      max: 16000,
      default: 919,
    },
    1: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 1,
    },
    2: {
      name: "Drive",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    3: {
      name: "Flt Type",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["LPF", "HPF"],
    },
    4: {
      name: "Low Freq",
      unit: "Hz",
      min: 0,
      max: 16000,
      default: 573,
    },
    5: {
      name: "Low Gain",
      unit: "dB",
      min: -24,
      max: 24,
      default: 0,
    },
  },
  Resonator: {
    0: {
      name: "Root",
      unit: "note",
      min: 0,
      max: 127,
      default: 40,
    },
    1: {
      name: "Bright",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    2: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 100,
      default: 38,
    },
    3: {
      name: "Chord",
      unit: "enum",
      min: 0,
      max: 15,
      default: 0,
      enum: [
        "Root",
        "Oct",
        "UpDn",
        "P5",
        "m3",
        "m5",
        "m7",
        "m7oct",
        "m0",
        "m11",
        "M3",
        "M5",
        "M7",
        "M7oct",
        "M9",
        "M11",
      ],
    },
    4: {
      name: "Panning",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    5: {
      name: "Env Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 48,
    },
  },
  "Sync Delay": {
    0: {
      name: "Time",
      unit: "enum",
      min: 0,
      max: 15,
      default: 5,
      enum: [
        "1/32",
        "1/16T",
        "1/32D",
        "1/16",
        "1/8T",
        "1/16D",
        "1/8",
        "1/4T",
        "1/8D",
        "1/4",
        "1/2T",
        "1/4D",
        "1/2",
        "1/1T",
        "1/2D",
        "1/1",
      ],
    },
    1: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 100,
      default: 49,
    },
    2: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    3: {
      name: "L Damp F",
      unit: "Hz",
      min: 0,
      max: 800,
      default: 0,
    },
    4: {
      name: "H Damp F",
      unit: "Hz",
      min: 0,
      max: 16000,
      default: 16000,
    },
  },
  Isolator: {
    0: {
      name: "Low",
      unit: "dB",
      min: -52,
      max: 12,
      default: -52,
    },
    1: {
      name: "Mid",
      unit: "dB",
      min: -52,
      max: 12,
      default: 9,
    },
    2: {
      name: "High",
      unit: "dB",
      min: -52,
      max: 12,
      default: -52,
    },
  },
  "DJFX Looper": {
    0: {
      name: "Length",
      unit: "sec",
      min: 0.012,
      max: 0.23,
      default: 0.23,
    },
    1: {
      name: "Speed",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    2: {
      name: "Loop Sw",
      unit: "",
      min: 0,
      max: 1,
      default: 0,
    },
  },
  Scatter: {
    0: {
      name: "Type",
      unit: "",
      min: 1,
      max: 10,
      default: 1,
    },
    1: {
      name: "Depth",
      unit: "",
      min: 10,
      max: 100,
      default: 50,
    },
    2: {
      name: "Scatter",
      unit: "",
      min: 0,
      max: 1,
      default: 1,
    },
    3: {
      name: "Speed",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["Single", "Double"],
    },
  },
  Downer: {
    0: {
      name: "Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    1: {
      name: "Rate",
      unit: "enum",
      min: 0,
      max: 7,
      default: 1,
      enum: ["2/1", "1/1", "1/2", "1/4", "1/8", "1/16", "1/32"],
    },
    2: {
      name: "Filter",
      unit: "",
      min: 0,
      max: 100,
      default: 66,
    },
    3: {
      name: "Pitch",
      min: 0,
      max: 1,
      default: 0,
    },
    4: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 86,
    },
  },
  "Ha-Dou": {
    0: {
      name: "Mod Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    1: {
      name: "Time",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    2: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    3: {
      name: "Low Cut",
      unit: "Hz",
      min: 0,
      max: 800,
      default: 0,
    },
    4: {
      name: "High Cut",
      unit: "Hz",
      min: 630,
      max: 16000,
      default: 16000,
    },
    5: {
      name: "Pre Delay",
      unit: "ms",
      min: 0,
      max: 100,
      default: 100,
    },
  },
  "Ko-Da-Ma": {
    0: {
      name: "Time",
      unit: "enum",
      min: 0,
      max: 15,
      default: 5,
      enum: [
        "1/32",
        "1/16T",
        "1/32D",
        "1/16",
        "1/8T",
        "1/16D",
        "1/8",
        "1/4T",
        "1/8D",
        "1/4",
        "1/2T",
        "1/4D",
        "1/2",
        "1/1T",
        "1/2D",
        "1/1",
      ],
    },
    1: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 100,
      default: 69,
    },
    2: {
      name: "Send",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    3: {
      name: "L Damp F",
      unit: "Hz",
      min: 0,
      max: 400,
      default: 0,
    },
    4: {
      name: "H Damp F",
      unit: "Hz",
      min: 0,
      max: 12500,
      default: 16000,
    },
    5: {
      name: "Mode",
      unit: "enum",
      min: 0,
      max: 1,
      default: 1,
      enum: ["Single", "Pan"],
    },
  },
  "Zan-Zou": {
    0: {
      name: "Time",
      unit: "Hz",
      min: 0,
      max: 100,
      default: 53,
    },
    1: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 99,
      default: 89,
    },
    2: {
      name: "HF Damp",
      unit: "Hz",
      min: 200,
      max: 16000,
      default: 16000,
    },
    3: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 78,
    },
    4: {
      name: "Mode",
      unit: "enum",
      min: 0,
      max: 2,
      default: 0,
      enum: ["2TAP", "3TAP", "4TAP"],
    },
    5: {
      name: "Sync",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["OFF", "ON"],
    },
  },
  "To-Gu-Ro": {
    0: {
      name: "Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 12,
    },
    1: {
      name: "Rate",
      unit: "",
      min: 0,
      max: 100,
      default: 25,
    },
    2: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    3: {
      name: "Flt Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 70,
    },
    4: {
      name: "Amp Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    5: {
      name: "Sync",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["OFF", "ON"],
    },
  },
  SBF: {
    0: {
      name: "Interval",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    1: {
      name: "Width",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    2: {
      name: "Balance",
      unit: "%",
      min: 0,
      max: 100,
      default: 50,
    },
    3: {
      name: "Type",
      unit: "enum",
      min: 0,
      max: 5,
      default: 0,
      enum: ["SBF1", "SBF2", "SBF3", "SBF4", "SBF5", "SBF6"],
    },
    4: {
      name: "Gain",
      unit: "dB",
      min: -54,
      max: 10,
      default: 0,
      enum: ["OFF", "ON"],
    },
  },
  Stopper: {
    0: {
      name: "Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    1: {
      name: "Rate",
      unit: "enum",
      min: 0,
      max: 9,
      default: 2,
      enum: ["4/1", "2/1", "1/1", "1/2", "1/4", "1/8", "1/16", "1/32", "1/64"],
    },
    2: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    3: {
      name: "Flt Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    4: {
      name: "Amp Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
  },
  "Tape Echo": {
    0: {
      name: "Time",
      unit: "ms",
      min: 10,
      max: 800,
      default: 337,
    },
    1: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 99,
      default: 46,
    },
    2: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    3: {
      name: "Mode",
      unit: "enum",
      min: 0,
      max: 7,
      default: 3,
      enum: ["S", "M", "L", "S+M", "S+L", "M+L", "S+M+L"],
    },
    4: {
      name: "W/F Rate",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    5: {
      name: "W/F Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
  },
  TimeCtrlDly: {
    0: {
      name: "Time",
    },
    1: {
      name: "Feedback",
    },
    2: {
      name: "Level",
    },
    3: {
      name: "L Damp F",
    },
    4: {
      name: "H Damp F",
    },
    5: {
      name: "Sync",
    },
  },
  "Super Filter": {
    0: {
      name: "Cutoff",
    },
    1: {
      name: "Resonance",
    },
    2: {
      name: "Flt Type",
    },
    3: {
      name: "Depth",
    },
    4: {
      name: "Rate",
    },
    5: {
      name: "Sync",
    },
  },
  WrmSaturator: {
    0: {
      name: "Drive",
    },
    1: {
      name: "Eq Low",
    },
    2: {
      name: "Eq High",
    },
    3: {
      name: "Level",
    },
  },
  "303 VinylSim": {
    0: {
      name: "Comp",
    },
    1: {
      name: "Noise",
    },
    2: {
      name: "Wow Flut",
    },
    3: {
      name: "Level",
    },
  },
  "404 VinylSim": {
    0: {
      name: "Frequency",
    },
    1: {
      name: "Noise",
    },
    2: {
      name: "Wow Flut",
    },
  },
  "Cassette Sim": {
    0: {
      name: "Tone",
    },
    1: {
      name: "Hiss",
    },
    2: {
      name: "Age",
    },
    3: {
      name: "Drive",
    },
    4: {
      name: "Wow Flut",
    },
    5: {
      name: "Catch",
    },
  },
  "Lo-fi": {
    0: {
      name: "Pre Filt",
    },
    1: {
      name: "Lofi Type",
    },
    2: {
      name: "Tone",
    },
    3: {
      name: "Cutoff",
    },
    4: {
      name: "Balance",
    },
    5: {
      name: "Level",
    },
  },
  Reverb: {
    0: {
      name: "Type",
    },
    1: {
      name: "Time",
    },
    2: {
      name: "Level",
    },
    3: {
      name: "Low Cut",
    },
    4: {
      name: "High Cut",
    },
    5: {
      name: "Pre Delay",
    },
  },
  Chorus: {
    0: {
      name: "Depth",
    },
    1: {
      name: "Rate",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "Eq Low",
    },
    4: {
      name: "Eq High",
    },
    5: {
      name: "Level",
    },
  },
  "JUNO Chorus": {
    0: {
      name: "Mode",
    },
    1: {
      name: "Noise",
    },
    2: {
      name: "Balance",
    },
  },
  Flanger: {
    0: {
      name: "Depth",
    },
    1: {
      name: "Rate",
    },
    2: {
      name: "Manual",
    },
    3: {
      name: "Resonance",
    },
    4: {
      name: "Balance",
    },
    5: {
      name: "Sync",
    },
  },
  Phaser: {
    0: {
      name: "Depth",
    },
    1: {
      name: "Rate",
    },
    2: {
      name: "Manual",
    },
    3: {
      name: "Resonance",
    },
    4: {
      name: "Balance",
    },
    5: {
      name: "Sync",
    },
  },
  Wah: {
    0: {
      name: "Peak",
    },
    1: {
      name: "Rate",
    },
    2: {
      name: "Manual",
    },
    3: {
      name: "Depth",
    },
    4: {
      name: "Flt Type",
    },
    5: {
      name: "Sync",
    },
  },
  Slicer: {
    0: {
      name: "Pattern",
    },
    1: {
      name: "Speed",
    },
    2: {
      name: "Depth",
    },
    3: {
      name: "Shuffle",
    },
    4: {
      name: "Mode",
    },
    5: {
      name: "Sync",
    },
  },
  "Tremolo/Pan": {
    0: {
      name: "Depth",
    },
    1: {
      name: "Rate",
    },
    2: {
      name: "Type",
    },
    3: {
      name: "Wave",
    },
    4: {
      name: "Sync",
    },
  },
  "Chromatic PS": {
    0: {
      name: "Pitch 1",
    },
    1: {
      name: "Pitch 2",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "Pan 1",
    },
    4: {
      name: "Pan 2",
    },
  },
  "Hyper-Reso": {
    0: {
      name: "Note",
    },
    1: {
      name: "Spread",
    },
    2: {
      name: "Character",
    },
    3: {
      name: "Scale",
    },
    4: {
      name: "Feedback",
    },
    5: {
      name: "Env Mod",
    },
  },
  "Ring Mod": {
    0: {
      name: "Frequency",
    },
    1: {
      name: "Sens",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "Polarity",
    },
    4: {
      name: "Eq Low",
    },
    5: {
      name: "Eq High",
    },
  },
  Crusher: {
    0: {
      name: "Filter",
    },
    1: {
      name: "Rate",
    },
    2: {
      name: "Balance",
    },
  },
  Overdrive: {
    0: {
      name: "Drive",
    },
    1: {
      name: "Tone",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "Level",
    },
  },
  Distortion: {
    0: {
      name: "Drive",
    },
    1: {
      name: "Tone",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "Level",
    },
  },
  Equalizer: {
    0: {
      name: "Low Gain",
    },
    1: {
      name: "Mid Gain",
    },
    2: {
      name: "High Gain",
    },
    3: {
      name: "Low Freq",
    },
    4: {
      name: "Mid Freq",
    },
    5: {
      name: "High Freq",
    },
  },
  Compressor: {
    0: {
      name: "Sustain",
    },
    1: {
      name: "Attack",
    },
    2: {
      name: "Ratio",
    },
    3: {
      name: "Lev",
    },
  },
  "SX Reverb": {
    0: {
      name: "Time",
    },
    1: {
      name: "Tone",
    },
    2: {
      name: "Balance",
    },
  },
  "SX Delay": {
    0: {
      name: "Time",
    },
    1: {
      name: "Feedback",
    },
    2: {
      name: "Balance",
    },
  },
  "Cloud Delay": {
    0: {
      name: "Window",
    },
    1: {
      name: "Pitch",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "Feedback",
    },
    4: {
      name: "Cloudy",
    },
    5: {
      name: "Lofi",
    },
  },
  "Back Spin": {
    0: {
      name: "Length",
    },
    1: {
      name: "Speed",
    },
    2: {
      name: "Back Sw",
    },
  },
  "Auto Pitch": {
    0: {
      name: "Pitch",
    },
    1: {
      name: "Formant",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "At Pitch",
    },
    4: {
      name: "Key",
    },
    5: {
      name: "Robot",
    },
  },
  Vocoder: {
    0: {
      name: "Note",
    },
    1: {
      name: "Formant",
    },
    2: {
      name: "Tone",
    },
    3: {
      name: "Scale",
    },
    4: {
      name: "Chord",
    },
    5: {
      name: "Balance",
    },
  },
  Harmony: {
    0: {
      name: "Pitch",
    },
    1: {
      name: "Formant",
    },
    2: {
      name: "Balance",
    },
    3: {
      name: "At Pitch",
    },
    4: {
      name: "Key",
    },
    5: {
      name: "Harmony",
    },
  },
  "GT Amp Sim": {
    0: {
      name: "Amp Type",
    },
    1: {
      name: "Drive",
    },
    2: {
      name: "Level",
    },
    3: {
      name: "Bass",
    },
    4: {
      name: "Middle",
    },
    5: {
      name: "Treble",
    },
  },
};

outlets = 12; // 0-5 is for Ctrl labels, 6-11 is for labels in ext. window
var labels = ["C1", "C2", "C3", "C4", "C5", "C6"];
var fxTypes = ["", "", "", "", "", "", ""];
var directFxTypes = [
  "Filter+Drive",
  "Resonator",
  "Sync Delay",
  "Isolator",
  "DJFX Looper",
];

var module = 0; // 0 = off / 1-6 FX modules

function bang() {
  for (var i = 0; i <= 5; i++) {
    outlet(i, ["set", labels[i]]);
  }
  for (var j = 6; j <= 11; j++) {
    if (!startsWith(fxTypes[j - 6], "Direct")) {
      outlet(j, ["set", fxTypes[j - 6]]);
    } else {
      var directFxNumber = parseInt(fxTypes[j - 6].slice(-1)) - 1; // get last character (Direct FX number)
      outlet(j, ["set", directFxTypes[directFxNumber]]);
    }
  }
}

function update() {
  for (var i = 0; i < labels.length; i++) {
    if (!startsWith(fxTypes[module], "Direct")) {
      if (
        data[fxTypes[module]] == undefined ||
        data[fxTypes[module]][i] == undefined ||
        data[fxTypes[module]][i].name == undefined
      ) {
        labels[i] = "---";
      } else {
        labels[i] = data[fxTypes[module]][i].name;
      }
    } else {
      var directFxNumber = parseInt(fxTypes[module].slice(-1)) - 1; // get last character (Direct FX number)

      if (
        data[directFxTypes[directFxNumber]] == undefined ||
        data[directFxTypes[directFxNumber]][i] == undefined ||
        data[directFxTypes[directFxNumber]][i].name == undefined
      ) {
        labels[i] = "---";
      } else {
        labels[i] = data[directFxTypes[directFxNumber]][i].name;
      }
    }
  }
  bang();
}

function setFxModule(lastActivatedFx) {
  // post("last activated: ", lastActivatedFx);
  module = lastActivatedFx;
  update();
}

function setFxType(fxModule, fxName) {
  // post(fxModule, fxName);
  fxTypes[fxModule] = fxName;
  update();
}

function setDirectFx(directFxNum, fxType) {
  directFxTypes[directFxNum] = fxType;
  update();
}

// ES5 alternative for ES6 .startsWith()
function startsWith(str, word) {
  return str.lastIndexOf(word, 0) === 0;
}
