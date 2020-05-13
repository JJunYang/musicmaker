var piano =document.getElementById("piano");


const list=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

piano.addEventListener("mousedown",e=>{
    Synth.play("piano",e.target.id,4,2)
})

