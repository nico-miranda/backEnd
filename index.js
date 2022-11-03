const  Conteiner =require("./clase.js")
const productos= new Conteiner("./productos.json")

async function ejecutar(){
    const objeto4={
        pelicula:"La matanza de Texas",
        precio:1100,
        duracion:"92 min"
    }
    const objeto3={
        pelicula:"Terrifier 2",
        precio:1200,
        duracion:"2 h 28 min"
}
    const objeto2={
        pelicula:"Wolf Creek",
        precio:900,
        duracion:"99 min"
}

    const objeto1={
        pelicula:"San Valentín sangriento",
        precio:800,
        duracion:"90 min"
}


await productos.getAll().then(id=>console.log(id))
}
ejecutar()