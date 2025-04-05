



const cont = document.getElementById("container")

const colorComponets = [

   "#32de84",
   "#66FF00",
   "#018749",
   "#03C03C",
   "#1CAC78"
]

const sqnumbers = 200;

for(let i = 0; i < sqnumbers; i++) {

    const actv = document.createElement("div");

    actv.addEventListener("click", () => {
        showcolor(actv)
    })
    


    actv.classList.add("activity");

    cont.appendChild(actv);

}

const showcolor = (tiles) => {

    const getColor = colorComponets


}