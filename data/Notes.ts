export interface NoteInfo {
  k: number;
  name: string;
  base: string;
  natural: string | null;
  flat: string;
  sharp: string;
  frequency: number;
};

export const notes: Array<NoteInfo> = [
  {
    "k": 1,
    "name": "A0",
    "base": "A",
    "natural": "a/0",
    "flat": "bbb/0",
    "sharp": "g##/0",
    "frequency": 27.5
  },
  {
    "k": 2,
    "name": "Bb0",
    "base": "B",
    "natural": null,
    "flat": "bb/0",
    "sharp": "a#/0",
    "frequency": 29.1352
  },
  {
    "k": 3,
    "name": "B0",
    "base": "B",
    "natural": "b/0",
    "flat": "cb/0",
    "sharp": "a##/0",
    "frequency": 30.8677
  },
  {
    "k": 4,
    "name": "C1",
    "base": "C",
    "natural": "c/1",
    "flat": "dbb/1",
    "sharp": "b#/0",
    "frequency": 32.7032
  },
  {
    "k": 5,
    "name": "Db1",
    "base": "D",
    "natural": null,
    "flat": "db/1",
    "sharp": "c#/1",
    "frequency": 34.6478
  },
  {
    "k": 6,
    "name": "D1",
    "base": "D",
    "natural": "d/1",
    "flat": "ebb/1",
    "sharp": "c##/1",
    "frequency": 36.7081
  },
  {
    "k": 7,
    "name": "Eb1",
    "base": "E",
    "natural": null,
    "flat": "eb/1",
    "sharp": "d#/1",
    "frequency": 38.8909
  },
  {
    "k": 8,
    "name": "E1",
    "base": "E",
    "natural": "e/1",
    "flat": "fb/1",
    "sharp": "d##/1",
    "frequency": 41.2034
  },
  {
    "k": 9,
    "name": "F1",
    "base": "F",
    "natural": "f/1",
    "flat": "gbb/1",
    "sharp": "e#/1",
    "frequency": 43.6535
  },
  {
    "k": 10,
    "name": "Gb1",
    "base": "G",
    "natural": null,
    "flat": "gb/1",
    "sharp": "f#/1",
    "frequency": 46.2493
  },
  {
    "k": 11,
    "name": "G1",
    "base": "G",
    "natural": "g/1",
    "flat": "abb/1",
    "sharp": "f##/1",
    "frequency": 48.9994
  },
  {
    "k": 12,
    "name": "Ab1",
    "base": "A",
    "natural": null,
    "flat": "ab/1",
    "sharp": "g#/1",
    "frequency": 51.9131
  },
  {
    "k": 13,
    "name": "A1",
    "base": "A",
    "natural": "a/1",
    "flat": "bbb/1",
    "sharp": "g##/1",
    "frequency": 55
  },
  {
    "k": 14,
    "name": "Bb1",
    "base": "B",
    "natural": null,
    "flat": "bb/1",
    "sharp": "a#/1",
    "frequency": 58.2705
  },
  {
    "k": 15,
    "name": "B1",
    "base": "B",
    "natural": "b/1",
    "flat": "cb/1",
    "sharp": "a##/1",
    "frequency": 61.7354
  },
  {
    "k": 16,
    "name": "C2",
    "base": "C",
    "natural": "c/2",
    "flat": "dbb/2",
    "sharp": "b#/1",
    "frequency": 65.4064
  },
  {
    "k": 17,
    "name": "Db2",
    "base": "D",
    "natural": null,
    "flat": "db/2",
    "sharp": "c#/2",
    "frequency": 69.2957
  },
  {
    "k": 18,
    "name": "D2",
    "base": "D",
    "natural": "d/2",
    "flat": "ebb/2",
    "sharp": "c##/2",
    "frequency": 73.4162
  },
  {
    "k": 19,
    "name": "Eb2",
    "base": "E",
    "natural": null,
    "flat": "eb/2",
    "sharp": "d#/2",
    "frequency": 77.7817
  },
  {
    "k": 20,
    "name": "E2",
    "base": "E",
    "natural": "e/2",
    "flat": "fb/2",
    "sharp": "d##/2",
    "frequency": 82.4069
  },
  {
    "k": 21,
    "name": "F2",
    "base": "F",
    "natural": "f/2",
    "flat": "gbb/2",
    "sharp": "e#/2",
    "frequency": 87.3071
  },
  {
    "k": 22,
    "name": "Gb2",
    "base": "G",
    "natural": null,
    "flat": "gb/2",
    "sharp": "f#/2",
    "frequency": 92.4986
  },
  {
    "k": 23,
    "name": "G2",
    "base": "G",
    "natural": "g/2",
    "flat": "abb/2",
    "sharp": "f##/2",
    "frequency": 97.9989
  },
  {
    "k": 24,
    "name": "Ab2",
    "base": "A",
    "natural": null,
    "flat": "ab/2",
    "sharp": "g#/2",
    "frequency": 103.826
  },
  {
    "k": 25,
    "name": "A2",
    "base": "A",
    "natural": "a/2",
    "flat": "bbb/2",
    "sharp": "g##/2",
    "frequency": 110
  },
  {
    "k": 26,
    "name": "Bb2",
    "base": "B",
    "natural": null,
    "flat": "bb/2",
    "sharp": "a#/2",
    "frequency": 116.541
  },
  {
    "k": 27,
    "name": "B2",
    "base": "B",
    "natural": "b/2",
    "flat": "cb/2",
    "sharp": "a##/2",
    "frequency": 123.471
  },
  {
    "k": 28,
    "name": "C3",
    "base": "C",
    "natural": "c/3",
    "flat": "dbb/3",
    "sharp": "b#/2",
    "frequency": 130.813
  },
  {
    "k": 29,
    "name": "Db3",
    "base": "D",
    "natural": null,
    "flat": "db/3",
    "sharp": "c#/3",
    "frequency": 138.591
  },
  {
    "k": 30,
    "name": "D3",
    "base": "D",
    "natural": "d/3",
    "flat": "ebb/3",
    "sharp": "c##/3",
    "frequency": 146.832
  },
  {
    "k": 31,
    "name": "Eb3",
    "base": "E",
    "natural": null,
    "flat": "eb/3",
    "sharp": "d#/3",
    "frequency": 155.563
  },
  {
    "k": 32,
    "name": "E3",
    "base": "E",
    "natural": "e/3",
    "flat": "fb/3",
    "sharp": "d##/3",
    "frequency": 164.814
  },
  {
    "k": 33,
    "name": "F3",
    "base": "F",
    "natural": "f/3",
    "flat": "gbb/3",
    "sharp": "e#/3",
    "frequency": 174.614
  },
  {
    "k": 34,
    "name": "Gb3",
    "base": "G",
    "natural": null,
    "flat": "gb/3",
    "sharp": "f#/3",
    "frequency": 184.997
  },
  {
    "k": 35,
    "name": "G3",
    "base": "G",
    "natural": "g/3",
    "flat": "abb/3",
    "sharp": "f##/3",
    "frequency": 195.998
  },
  {
    "k": 36,
    "name": "Ab3",
    "base": "A",
    "natural": null,
    "flat": "ab/3",
    "sharp": "g#/3",
    "frequency": 207.652
  },
  {
    "k": 37,
    "name": "A3",
    "base": "A",
    "natural": "a/3",
    "flat": "bbb/3",
    "sharp": "g##/3",
    "frequency": 220
  },
  {
    "k": 38,
    "name": "Bb3",
    "base": "B",
    "natural": null,
    "flat": "bb/3",
    "sharp": "a#/3",
    "frequency": 233.082
  },
  {
    "k": 39,
    "name": "B3",
    "base": "B",
    "natural": "b/3",
    "flat": "cb/3",
    "sharp": "a##/3",
    "frequency": 246.942
  },
  {
    "k": 40,
    "name": "C4",
    "base": "C",
    "natural": "c/4",
    "flat": "dbb/4",
    "sharp": "b#/3",
    "frequency": 261.626
  },
  {
    "k": 41,
    "name": "Db4",
    "base": "D",
    "natural": null,
    "flat": "db/4",
    "sharp": "c#/4",
    "frequency": 277.183
  },
  {
    "k": 42,
    "name": "D4",
    "base": "D",
    "natural": "d/4",
    "flat": "ebb/4",
    "sharp": "c##/4",
    "frequency": 293.665
  },
  {
    "k": 43,
    "name": "Eb4",
    "base": "E",
    "natural": null,
    "flat": "eb/4",
    "sharp": "d#/4",
    "frequency": 311.127
  },
  {
    "k": 44,
    "name": "E4",
    "base": "E",
    "natural": "e/4",
    "flat": "fb/4",
    "sharp": "d##/4",
    "frequency": 329.628
  },
  {
    "k": 45,
    "name": "F4",
    "base": "F",
    "natural": "f/4",
    "flat": "gbb/4",
    "sharp": "e#/4",
    "frequency": 349.228
  },
  {
    "k": 46,
    "name": "Gb4",
    "base": "G",
    "natural": null,
    "flat": "gb/4",
    "sharp": "f#/4",
    "frequency": 369.994
  },
  {
    "k": 47,
    "name": "G4",
    "base": "G",
    "natural": "g/4",
    "flat": "abb/4",
    "sharp": "f##/4",
    "frequency": 391.995
  },
  {
    "k": 48,
    "name": "Ab4",
    "base": "A",
    "natural": null,
    "flat": "ab/4",
    "sharp": "g#/4",
    "frequency": 415.305
  },
  {
    "k": 49,
    "name": "A4",
    "base": "A",
    "natural": "a/4",
    "flat": "bbb/4",
    "sharp": "g##/4",
    "frequency": 440
  },
  {
    "k": 50,
    "name": "Bb4",
    "base": "B",
    "natural": null,
    "flat": "bb/4",
    "sharp": "a#/4",
    "frequency": 466.164
  },
  {
    "k": 51,
    "name": "B4",
    "base": "B",
    "natural": "b/4",
    "flat": "cb/4",
    "sharp": "a##/4",
    "frequency": 493.883
  },
  {
    "k": 52,
    "name": "C5",
    "base": "C",
    "natural": "c/5",
    "flat": "dbb/5",
    "sharp": "b#/4",
    "frequency": 523.251
  },
  {
    "k": 53,
    "name": "Db5",
    "base": "D",
    "natural": null,
    "flat": "db/5",
    "sharp": "c#/5",
    "frequency": 554.365
  },
  {
    "k": 54,
    "name": "D5",
    "base": "D",
    "natural": "d/5",
    "flat": "ebb/5",
    "sharp": "c##/5",
    "frequency": 587.33
  },
  {
    "k": 55,
    "name": "Eb5",
    "base": "E",
    "natural": null,
    "flat": "eb/5",
    "sharp": "d#/5",
    "frequency": 622.254
  },
  {
    "k": 56,
    "name": "E5",
    "base": "E",
    "natural": "e/5",
    "flat": "fb/5",
    "sharp": "d##/5",
    "frequency": 659.255
  },
  {
    "k": 57,
    "name": "F5",
    "base": "F",
    "natural": "f/5",
    "flat": "gbb/5",
    "sharp": "e#/5",
    "frequency": 698.456
  },
  {
    "k": 58,
    "name": "Gb5",
    "base": "G",
    "natural": null,
    "flat": "gb/5",
    "sharp": "f#/5",
    "frequency": 739.989
  },
  {
    "k": 59,
    "name": "G5",
    "base": "G",
    "natural": "g/5",
    "flat": "abb/5",
    "sharp": "f##/5",
    "frequency": 783.991
  },
  {
    "k": 60,
    "name": "Ab5",
    "base": "A",
    "natural": null,
    "flat": "ab/5",
    "sharp": "g#/5",
    "frequency": 830.609
  },
  {
    "k": 61,
    "name": "A5",
    "base": "A",
    "natural": "a/5",
    "flat": "bbb/5",
    "sharp": "g##/5",
    "frequency": 880
  },
  {
    "k": 62,
    "name": "Bb5",
    "base": "B",
    "natural": null,
    "flat": "bb/5",
    "sharp": "a#/5",
    "frequency": 932.328
  },
  {
    "k": 63,
    "name": "B5",
    "base": "B",
    "natural": "b/5",
    "flat": "cb/5",
    "sharp": "a##/5",
    "frequency": 987.767
  },
  {
    "k": 64,
    "name": "C6",
    "base": "C",
    "natural": "c/6",
    "flat": "dbb/6",
    "sharp": "b#/5",
    "frequency": 1046.5
  },
  {
    "k": 65,
    "name": "Db6",
    "base": "D",
    "natural": null,
    "flat": "db/6",
    "sharp": "c#/6",
    "frequency": 1108.73
  },
  {
    "k": 66,
    "name": "D6",
    "base": "D",
    "natural": "d/6",
    "flat": "ebb/6",
    "sharp": "c##/6",
    "frequency": 1174.66
  },
  {
    "k": 67,
    "name": "Eb6",
    "base": "E",
    "natural": null,
    "flat": "eb/6",
    "sharp": "d#/6",
    "frequency": 1244.51
  },
  {
    "k": 68,
    "name": "E6",
    "base": "E",
    "natural": "e/6",
    "flat": "fb/6",
    "sharp": "d##/6",
    "frequency": 1318.51
  },
  {
    "k": 69,
    "name": "F6",
    "base": "F",
    "natural": "f/6",
    "flat": "gbb/6",
    "sharp": "e#/6",
    "frequency": 1396.91
  },
  {
    "k": 70,
    "name": "Gb6",
    "base": "G",
    "natural": null,
    "flat": "gb/6",
    "sharp": "f#/6",
    "frequency": 1479.98
  },
  {
    "k": 71,
    "name": "G6",
    "base": "G",
    "natural": "g/6",
    "flat": "abb/6",
    "sharp": "f##/6",
    "frequency": 1567.98
  },
  {
    "k": 72,
    "name": "Ab6",
    "base": "A",
    "natural": null,
    "flat": "ab/6",
    "sharp": "g#/6",
    "frequency": 1661.22
  },
  {
    "k": 73,
    "name": "A6",
    "base": "A",
    "natural": "a/6",
    "flat": "bbb/6",
    "sharp": "g##/6",
    "frequency": 1760
  },
  {
    "k": 74,
    "name": "Bb6",
    "base": "B",
    "natural": null,
    "flat": "bb/6",
    "sharp": "a#/6",
    "frequency": 1864.66
  },
  {
    "k": 75,
    "name": "B6",
    "base": "B",
    "natural": "b/6",
    "flat": "cb/6",
    "sharp": "a##/6",
    "frequency": 1975.53
  },
  {
    "k": 76,
    "name": "C7",
    "base": "C",
    "natural": "c/7",
    "flat": "dbb/7",
    "sharp": "b#/6",
    "frequency": 2093
  },
  {
    "k": 77,
    "name": "Db7",
    "base": "D",
    "natural": null,
    "flat": "db/7",
    "sharp": "c#/7",
    "frequency": 2217.46
  },
  {
    "k": 78,
    "name": "D7",
    "base": "D",
    "natural": "d/7",
    "flat": "ebb/7",
    "sharp": "c##/7",
    "frequency": 2349.32
  },
  {
    "k": 79,
    "name": "Eb7",
    "base": "E",
    "natural": null,
    "flat": "eb/7",
    "sharp": "d#/7",
    "frequency": 2489.02
  },
  {
    "k": 80,
    "name": "E7",
    "base": "E",
    "natural": "e/7",
    "flat": "fb/7",
    "sharp": "d##/7",
    "frequency": 2637.02
  },
  {
    "k": 81,
    "name": "F7",
    "base": "F",
    "natural": "f/7",
    "flat": "gbb/7",
    "sharp": "e#/7",
    "frequency": 2793.83
  },
  {
    "k": 82,
    "name": "Gb7",
    "base": "G",
    "natural": null,
    "flat": "gb/7",
    "sharp": "f#/7",
    "frequency": 2959.96
  },
  {
    "k": 83,
    "name": "G7",
    "base": "G",
    "natural": "g/7",
    "flat": "abb/7",
    "sharp": "f##/7",
    "frequency": 3135.96
  },
  {
    "k": 84,
    "name": "Ab7",
    "base": "A",
    "natural": null,
    "flat": "ab/7",
    "sharp": "g#/7",
    "frequency": 3322.44
  },
  {
    "k": 85,
    "name": "A7",
    "base": "A",
    "natural": "a/7",
    "flat": "bbb/7",
    "sharp": "g##/7",
    "frequency": 3520
  },
  {
    "k": 86,
    "name": "Bb7",
    "base": "B",
    "natural": null,
    "flat": "bb/7",
    "sharp": "a#/7",
    "frequency": 3729.31
  },
  {
    "k": 87,
    "name": "B7",
    "base": "B",
    "natural": "b/7",
    "flat": "cb/7",
    "sharp": "a##/7",
    "frequency": 3951.07
  },
  {
    "k": 88,
    "name": "C8",
    "base": "C",
    "natural": "c/8",
    "flat": "dbb/8",
    "sharp": "b#/7",
    "frequency": 4186.01
  },
];