



const cont = document.getElementById("container")

const colorComponets = [ //green color codes

   "#32de84",
   "#66FF00",
   "#018749",
   "#03C03C",
   "#1CAC78"
]

const sqnumbers = 200;

for(let i = 0; i < sqnumbers; i++) {

    const actv = document.createElement("div");

    actv.addEventListener("mouseover", () => {
        showcolor(actv)
    })
    
    actv.addEventListener("mouseout", () => {

        animColor(actv)

    })


    actv.classList.add("activity");

    cont.appendChild(actv);

}

const showcolor = (tiles) => {

    const getColor = tileColor()

    tiles.style.backgroundColor = tileColor();
    tiles.style.boxshadow `0 0 5px ${getColor}, 0 0 10px ${getColor}`;

}

    tileColor = () => {
        return colorComponets[Math.floor(Math.random() * colorComponets.length)]


    }

    const animColor = () => {

        

    }