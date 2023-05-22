import notes from "../data/notes.json";
import { Sample } from "./Audio";

export class Note {
	name: string;
	number: number;
	info: NoteInfo;
	audio: Record<number, HTMLAudioElement>;

	constructor(note: NoteInfo) {
		this.name = note.name;
		this.number = note.k;
		this.info = { ...note };
		this.audio = {};
	}

	play(duration?: number, callbackBefore?: () => void, callbackAfter?: () => void): void {
		if (!duration || duration !== 500 && duration !== 1000 && duration !== 2000) {
			duration = 1000;
		}

		if (!this.audio.hasOwnProperty(duration)) {
			console.log(`There's no ${duration}ms sample for ${this.name}.`);
			return;
		}

		this.audio[duration].play();

		callbackBefore && callbackBefore();

		if (callbackAfter) {
			setTimeout(function () {
				callbackAfter();
			}, duration);
		}
	}
}

export class Notes {
	notes: Record<string, Note>;
	list: Note[];
	samplesLoaded: Record<string, boolean>;

	constructor() {
		this.notes = {};
		this.list = [];
		this.samplesLoaded = {};

		notes.forEach(d => {
			this.notes[d.name] = new Note(d);
			this.list.push(this.notes[d.name]);
		});
	}

	loadAudio(samples: Sample[]): void {
		if (!Array.isArray(samples)) {
			samples = [samples];
		}

		samples.forEach(sample => {

			this.samplesLoaded[sample.duration] = true;

			Object.keys(sample.notes).forEach(key => {
				let b64 = sample.notes[key];
				if (b64.indexOf("data:audio/mpeg;base64,") === -1) {
					b64 = "data:audio/mpeg;base64," + b64;
				}

				this.notes[key].audio[sample.duration] = new Audio(b64);
			});

			console.log("Loaded duration", sample.duration)
		})
	}
}
