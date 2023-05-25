import notes500 from "../../data/audio/Audio_500";
import notes1000 from "../../data/audio/Audio_1000";
import notes2000 from "../../data/audio/Audio_2000";

/*
a sample takes the form of:
	{
		duration: `MS`,
		notes: { A0: `base64...`, ... }
	}
*/

export interface Sample {
	duration: number;
	notes: Record<string, string>;
}

export const Piano: Record<number, Sample> = {
	500: { duration: 500, notes: notes500 },
	1000: { duration: 1000, notes: notes1000 },
	2000: { duration: 2000, notes: notes2000 },
}
