const keys_list = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
const values_list = [
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4",
  "C5",
  "D5",
  "E5",
  "F5",
  "G5",
  "A5",
  "B5",
  "C6",
  "D6",
  "E6",
  "F6",
  "G6",
  "A6",
  "B6",
  "C7",
  "D7",
  "E7",
  "F7",
  "G7",
];

for (let i = 0; i < 26; i++) {
  const grp = document.getElementById("keys");
  const btn = document.createElement("button");
  btn.className = "btn btn-light";
  btn.innerHTML = keys_list[i];
  btn.value = values_list[i];
  grp.appendChild(btn);

  if (i == 9 || i == 18) {
    var br = document.createElement("br");
    grp.appendChild(br);
  }
}

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();
const keyboard = document.getElementById("keyboard");

keyboard.addEventListener("mousedown", async (e) => {
  // if (Tone.context.state !== "running") {
  //   Tone.context.resume();
  // }
  synth.triggerAttack(e.target.value);
});
keyboard.addEventListener("mouseup", (e) => {
  synth.triggerRelease();
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  const key_press = String.fromCharCode(e.which);
  const trigger = values_list[keys_list.indexOf(key_press)];
  return synth.triggerAttack(trigger);
});

document.addEventListener("keyup", (e) => {
  synth.triggerRelease();
});
