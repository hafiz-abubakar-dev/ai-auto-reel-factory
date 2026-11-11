// n8n Custom Code Node: Data Preparation & Prompt Mapping
const vg = $('Video genrater prompt').first().json.output;   
const sg = $('Script Genrater').first().json.output;         

const voice = {
  1: (sg.HOOK + ' ' + sg.PROBLEM).trim(),
  2: sg.SOLUTION,
  3: sg.WIN,
  4: sg.CTA,
};

return [
  { json: { prompt: vg.prompt1, voice_over: voice[1], scene: 1 } },
  { json: { prompt: vg.prompt2, voice_over: voice[2], scene: 2 } },
  { json: { prompt: vg.prompt3, voice_over: voice[3], scene: 3 } },
  { json: { prompt: vg.prompt4, voice_over: voice[4], scene: 4 } },
];
