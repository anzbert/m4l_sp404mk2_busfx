var labels = {
  Off: {
    id: 0,
  },
  "Filter+Drive": {
    id: 1,
    ctrl1: {
      name: "Cutoff",
      unit: "Hz",
      min: 0,
      max: 16000,
      default: 919,
    },
    ctrl2: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 1,
    },
    ctrl3: {
      name: "Drive",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl4: {
      name: "Flt Type",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["LPF", "HPF"],
    },
    ctrl5: {
      name: "Low Freq",
      unit: "Hz",
      min: 0,
      max: 16000,
      default: 573,
    },
    ctrl6: {
      name: "Low Gain",
      unit: "dB",
      min: -24,
      max: 24,
      default: 0,
    },
  },
  Resonator: {
    id: 2,
    ctrl1: {
      name: "Root",
      unit: "note",
      min: 0,
      max: 127,
      default: 40,
    },
    ctrl2: {
      name: "Bright",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    ctrl3: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 100,
      default: 38,
    },
    ctrl4: {
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
    ctrl5: {
      name: "Panning",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl6: {
      name: "Env Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 48,
    },
  },
  "Sync Delay": {
    id: 3,
    ctrl1: {
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
    ctrl2: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 100,
      default: 49,
    },
    ctrl3: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    ctrl4: {
      name: "L Damp F",
      unit: "Hz",
      min: 0,
      max: 800,
      default: 0,
    },
    ctrl5: {
      name: "H Damp F",
      unit: "Hz",
      min: 0,
      max: 16000,
      default: 16000,
    },
  },
  Isolator: {
    id: 4,
    ctrl1: {
      name: "Low",
      unit: "dB",
      min: -52,
      max: 12,
      default: -52,
    },
    ctrl2: {
      name: "Mid",
      unit: "dB",
      min: -52,
      max: 12,
      default: 9,
    },
    ctrl3: {
      name: "High",
      unit: "dB",
      min: -52,
      max: 12,
      default: -52,
    },
  },
  "DJFX Looper": {
    id: 5,
    ctrl1: {
      name: "Length",
      unit: "sec",
      min: 0.012,
      max: 0.23,
      default: 0.23,
    },
    ctrl2: {
      name: "Speed",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    ctrl3: {
      name: "Loop Switch",
      unit: "",
      min: 0,
      max: 1,
      default: 0,
    },
  },
  Scatter: {
    id: 6,
    ctrl1: {
      name: "Type",
      unit: "",
      min: 1,
      max: 10,
      default: 1,
    },
    ctrl2: {
      name: "Depth",
      unit: "",
      min: 10,
      max: 100,
      default: 50,
    },
    ctrl3: {
      name: "Scatter",
      unit: "",
      min: 0,
      max: 1,
      default: 1,
    },
    ctrl4: {
      name: "Speed",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["Single", "Double"],
    },
  },
  Downer: {
    id: 7,
    ctrl1: {
      name: "Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    ctrl2: {
      name: "Rate",
      unit: "enum",
      min: 0,
      max: 7,
      default: 1,
      enum: ["2/1", "1/1", "1/2", "1/4", "1/8", "1/16", "1/32"],
    },
    ctrl3: {
      name: "Filter",
      unit: "",
      min: 0,
      max: 100,
      default: 66,
    },
    ctrl4: {
      name: "Pitch",
      min: 0,
      max: 1,
      default: 0,
    },
    ctrl5: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 86,
    },
  },
  "Ha-Dou": {
    id: 8,
    ctrl1: {
      name: "Mod Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    ctrl2: {
      name: "Time",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl3: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    ctrl4: {
      name: "Low Cut",
      unit: "Hz",
      min: 0,
      max: 800,
      default: 0,
    },
    ctrl5: {
      name: "High Cut",
      unit: "Hz",
      min: 630,
      max: 16000,
      default: 16000,
    },
    ctrl6: {
      name: "Pre Delay",
      unit: "ms",
      min: 0,
      max: 100,
      default: 100,
    },
  },
  "Ko-Da-Ma": {
    id: 9,
    ctrl1: {
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
    ctrl2: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 100,
      default: 69,
    },
    ctrl3: {
      name: "Send",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl4: {
      name: "L Damp F",
      unit: "Hz",
      min: 0,
      max: 400,
      default: 0,
    },
    ctrl5: {
      name: "H Damp F",
      unit: "Hz",
      min: 0,
      max: 12500,
      default: 16000,
    },
    ctrl6: {
      name: "Mode",
      unit: "enum",
      min: 0,
      max: 1,
      default: 1,
      enum: ["Single", "Pan"],
    },
  },
  "Zan-Zou": {
    id: 10,
    ctrl1: {
      name: "Time",
      unit: "Hz",
      min: 0,
      max: 100,
      default: 53,
    },
    ctrl2: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 99,
      default: 89,
    },
    ctrl3: {
      name: "HF Damp",
      unit: "Hz",
      min: 200,
      max: 16000,
      default: 16000,
    },
    ctrl4: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 78,
    },
    ctrl5: {
      name: "Mode",
      unit: "enum",
      min: 0,
      max: 2,
      default: 0,
      enum: ["2TAP", "3TAP", "4TAP"],
    },
    ctrl6: {
      name: "Sync",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["OFF", "ON"],
    },
  },
  "To-Gu-Ro": {
    id: 11,
    ctrl1: {
      name: "Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 12,
    },
    ctrl2: {
      name: "Rate",
      unit: "",
      min: 0,
      max: 100,
      default: 25,
    },
    ctrl3: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    ctrl4: {
      name: "Flt Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 70,
    },
    ctrl5: {
      name: "Amp Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl6: {
      name: "Sync",
      unit: "enum",
      min: 0,
      max: 1,
      default: 0,
      enum: ["OFF", "ON"],
    },
  },
  SBF: {
    id: 12,
    ctrl1: {
      name: "Interval",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl2: {
      name: "Width",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl3: {
      name: "Balance",
      unit: "%",
      min: 0,
      max: 100,
      default: 50,
    },
    ctrl4: {
      name: "Type",
      unit: "enum",
      min: 0,
      max: 5,
      default: 0,
      enum: ["SBF1", "SBF2", "SBF3", "SBF4", "SBF5", "SBF6"],
    },
    ctrl5: {
      name: "Gain",
      unit: "dB",
      min: -54,
      max: 10,
      default: 0,
      enum: ["OFF", "ON"],
    },
  },
  Stopper: {
    id: 13,
    ctrl1: {
      name: "Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 100,
    },
    ctrl2: {
      name: "Rate",
      unit: "enum",
      min: 0,
      max: 9,
      default: 2,
      enum: ["4/1", "2/1", "1/1", "1/2", "1/4", "1/8", "1/16", "1/32", "1/64"],
    },
    ctrl3: {
      name: "Resonance",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl4: {
      name: "Flt Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 0,
    },
    ctrl5: {
      name: "Amp Mod",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
  },
  "Tape Echo": {
    id: 14,
    ctrl1: {
      name: "Time",
      unit: "ms",
      min: 10,
      max: 800,
      default: 337,
    },
    ctrl2: {
      name: "Feedback",
      unit: "%",
      min: 0,
      max: 99,
      default: 46,
    },
    ctrl3: {
      name: "Level",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    ctrl4: {
      name: "Mode",
      unit: "enum",
      min: 0,
      max: 7,
      default: 3,
      enum: ["S", "M", "L", "S+M", "S+L", "M+L", "S+M+L"],
    },
    ctrl5: {
      name: "W/F Rate",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
    ctrl6: {
      name: "W/F Depth",
      unit: "",
      min: 0,
      max: 100,
      default: 50,
    },
  },
  TimeCtrlDly: {
    id: 15,
    ctrl1: {
      name: "Time",
    },
    ctrl2: {
      name: "Feedback",
    },
    ctrl3: {
      name: "Level",
    },
    ctrl4: {
      name: "L Damp F",
    },
    ctrl5: {
      name: "H Damp F",
    },
    ctrl6: {
      name: "Sync",
    },
  },
  "Super Filter": {
    id: 16,
    ctrl1: {
      name: "Cutoff",
    },
    ctrl2: {
      name: "Resonance",
    },
    ctrl3: {
      name: "Flt Type",
    },
    ctrl4: {
      name: "Depth",
    },
    ctrl5: {
      name: "Rate",
    },
    ctrl6: {
      name: "Sync",
    },
  },
  WrmSaturator: {
    id: 17,
    ctrl1: {
      name: "Drive",
    },
    ctrl2: {
      name: "Eq Low",
    },
    ctrl3: {
      name: "Eq High",
    },
    ctrl4: {
      name: "Level",
    },
  },
  "303 VinylSim": {
    id: 18,
    ctrl1: {
      name: "Comp",
    },
    ctrl2: {
      name: "Noise",
    },
    ctrl3: {
      name: "Wow Flut",
    },
    ctrl4: {
      name: "Level",
    },
  },
  "404 VinylSim": {
    id: 19,
    ctrl1: {
      name: "Frequency",
    },
    ctrl2: {
      name: "Noise",
    },
    ctrl3: {
      name: "Wow Flut",
    },
  },
  "Cassette Sim": {
    id: 20,
    ctrl1: {
      name: "Tone",
    },
    ctrl2: {
      name: "Hiss",
    },
    ctrl3: {
      name: "Age",
    },
    ctrl4: {
      name: "Drive",
    },
    ctrl5: {
      name: "Wow Flut",
    },
    ctrl6: {
      name: "Catch",
    },
  },
  "Lo-fi": {
    id: 21,
    ctrl1: {
      name: "Pre Filt",
    },
    ctrl2: {
      name: "Lofi Type",
    },
    ctrl3: {
      name: "Tone",
    },
    ctrl4: {
      name: "Cutoff",
    },
    ctrl5: {
      name: "Balance",
    },
    ctrl6: {
      name: "Level",
    },
  },
  Reverb: {
    id: 22,
    ctrl1: {
      name: "Type",
    },
    ctrl2: {
      name: "Time",
    },
    ctrl3: {
      name: "Level",
    },
    ctrl4: {
      name: "Low Cut",
    },
    ctrl5: {
      name: "High Cut",
    },
    ctrl6: {
      name: "Pre Delay",
    },
  },
  Chorus: {
    id: 23,
    ctrl1: {
      name: "Depth",
    },
    ctrl2: {
      name: "Rate",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "Eq Low",
    },
    ctrl5: {
      name: "Eq High",
    },
    ctrl6: {
      name: "Level",
    },
  },
  "JUNO Chorus": {
    id: 24,
    ctrl1: {
      name: "Mode",
    },
    ctrl2: {
      name: "Noise",
    },
    ctrl3: {
      name: "Balance",
    },
  },
  Flanger: {
    id: 25,
    ctrl1: {
      name: "Depth",
    },
    ctrl2: {
      name: "Rate",
    },
    ctrl3: {
      name: "Manual",
    },
    ctrl4: {
      name: "Resonance",
    },
    ctrl5: {
      name: "Balance",
    },
    ctrl6: {
      name: "Sync",
    },
  },
  Phaser: {
    id: 26,
    ctrl1: {
      name: "Depth",
    },
    ctrl2: {
      name: "Rate",
    },
    ctrl3: {
      name: "Manual",
    },
    ctrl4: {
      name: "Resonance",
    },
    ctrl5: {
      name: "Balance",
    },
    ctrl6: {
      name: "Sync",
    },
  },
  Wah: {
    id: 27,
    ctrl1: {
      name: "Peak",
    },
    ctrl2: {
      name: "Rate",
    },
    ctrl3: {
      name: "Manual",
    },
    ctrl4: {
      name: "Depth",
    },
    ctrl5: {
      name: "Flt Type",
    },
    ctrl6: {
      name: "Sync",
    },
  },
  Slicer: {
    id: 28,
    ctrl1: {
      name: "Pattern",
    },
    ctrl2: {
      name: "Speed",
    },
    ctrl3: {
      name: "Depth",
    },
    ctrl4: {
      name: "Shuffle",
    },
    ctrl5: {
      name: "Mode",
    },
    ctrl6: {
      name: "Sync",
    },
  },
  "Tremolo/Pan": {
    id: 29,
    ctrl1: {
      name: "Depth",
    },
    ctrl2: {
      name: "Rate",
    },
    ctrl3: {
      name: "Type",
    },
    ctrl4: {
      name: "Wave",
    },
    ctrl5: {
      name: "Sync",
    },
  },
  "Chromatic PS": {
    id: 30,
    ctrl1: {
      name: "Pitch 1",
    },
    ctrl2: {
      name: "Pitch 2",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "Pan 1",
    },
    ctrl5: {
      name: "Pan 2",
    },
  },
  "Hyper-Reso": {
    id: 31,
    ctrl1: {
      name: "Note",
    },
    ctrl2: {
      name: "Spread",
    },
    ctrl3: {
      name: "Character",
    },
    ctrl4: {
      name: "Scale",
    },
    ctrl5: {
      name: "Feedback",
    },
    ctrl6: {
      name: "Env Mod",
    },
  },
  "Ring Mod": {
    id: 32,
    ctrl1: {
      name: "Frequency",
    },
    ctrl2: {
      name: "Sens",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "Polarity",
    },
    ctrl5: {
      name: "Eq Low",
    },
    ctrl6: {
      name: "Eq High",
    },
  },
  Crusher: {
    id: 33,
    ctrl1: {
      name: "Filter",
    },
    ctrl2: {
      name: "Rate",
    },
    ctrl3: {
      name: "Balance",
    },
  },
  Overdrive: {
    id: 34,
    ctrl1: {
      name: "Drive",
    },
    ctrl2: {
      name: "Tone",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "Level",
    },
  },
  Distortion: {
    id: 35,
    ctrl1: {
      name: "Drive",
    },
    ctrl2: {
      name: "Tone",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "Level",
    },
  },
  Equalizer: {
    id: 36,
    ctrl1: {
      name: "Low Gain",
    },
    ctrl2: {
      name: "Mid Gain",
    },
    ctrl3: {
      name: "High Gain",
    },
    ctrl4: {
      name: "Low Freq",
    },
    ctrl5: {
      name: "Mid Freq",
    },
    ctrl6: {
      name: "High Freq",
    },
  },
  Compressor: {
    id: 37,
    ctrl1: {
      name: "Sustain",
    },
    ctrl2: {
      name: "Attack",
    },
    ctrl3: {
      name: "Ratio",
    },
    ctrl4: {
      name: "Lev",
    },
  },
  "SX Reverb": {
    id: 38,
    ctrl1: {
      name: "Time",
    },
    ctrl2: {
      name: "Tone",
    },
    ctrl3: {
      name: "Balance",
    },
  },
  "SX Chorus": {
    id: 39,
    ctrl1: {
      name: "Time",
    },
    ctrl2: {
      name: "Feedback",
    },
    ctrl3: {
      name: "Balance",
    },
  },
  "Cloud Delay": {
    id: 40,
    ctrl1: {
      name: "Window",
    },
    ctrl2: {
      name: "Pitch",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "Feedback",
    },
    ctrl5: {
      name: "Cloudy",
    },
    ctrl6: {
      name: "Lofi",
    },
  },
  "Back Spin": {
    id: 41,
    ctrl1: {
      name: "Length",
    },
    ctrl2: {
      name: "Speed",
    },
    ctrl3: {
      name: "Back Sw",
    },
  },
  "Auto Pitch": {
    id: 42,
    ctrl1: {
      name: "Pitch",
    },
    ctrl2: {
      name: "Formant",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "At Pitch",
    },
    ctrl5: {
      name: "Key",
    },
    ctrl6: {
      name: "Robot",
    },
  },
  Vocoder: {
    id: 43,
    ctrl1: {
      name: "Note",
    },
    ctrl2: {
      name: "Formant",
    },
    ctrl3: {
      name: "Tone",
    },
    ctrl4: {
      name: "Scale",
    },
    ctrl5: {
      name: "Chord",
    },
    ctrl6: {
      name: "Balance",
    },
  },
  Harmony: {
    id: 44,
    ctrl1: {
      name: "Pitch",
    },
    ctrl2: {
      name: "Formant",
    },
    ctrl3: {
      name: "Balance",
    },
    ctrl4: {
      name: "At Pitch",
    },
    ctrl5: {
      name: "Key",
    },
    ctrl6: {
      name: "Harmony",
    },
  },
  "GT Amp Sim": {
    id: 45,
    ctrl1: {
      name: "Amp Type",
    },
    ctrl2: {
      name: "Drive",
    },
    ctrl3: {
      name: "Level",
    },
    ctrl4: {
      name: "Bass",
    },
    ctrl5: {
      name: "Middle",
    },
    ctrl6: {
      name: "Treble",
    },
  },
};

function bang() {}
