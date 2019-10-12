let volume = document.getElementById("volume-range");
let value = document.getElementById("volume-value");
let box = document.getElementById("box");

let circle = document.getElementById("circle");

volume.addEventListener("input", function() {
    console.dir(circle.children)
})

// volume.addEventListener("input", function() {
    
//     const v = this.value*100;
//     console.log(box.style.left = v + "px")

//     console.dir(box)
//     value.innerHTML = v;
// })

console.dir(volume.addEventListener)