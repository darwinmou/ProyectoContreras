const productos = [{
    id: "1",
    category: "juegos",
    title: "DiabloIV",
    description:"Diablo IV es la cuarta entrega de la aclamada serie de juegos de rol de acción desarrollada por Blizzard Entertainment. En este juego, los jugadores se sumergen en un oscuro y peligroso mundo de fantasía, lleno de demonios, criaturas infernales y poderosos jefes finales.",
    cost:"25$",
    image: require("../images/diabloIV.jfif")
}, {
    id: "2",
    category: "juegos",
    title: "Call Of Duty",
    description:"Call of Duty es una franquicia de videojuegos de disparos en primera persona que se ha convertido en uno de los juegos más populares y exitosos de todos los tiempos. Desarrollado por diferentes estudios, el juego ofrece una experiencia de combate realista y emocionante en una variedad de escenarios históricos y ficticios.",
    cost:"30$",
    image: require("../images/COD.jfif")
},{
    id: "3",
    category: "perifericos",
    title: "Mouse",
    description:"El mouse es un dispositivo de alta precisión diseñado para brindarte una experiencia de juego excepcional. Con un diseño ergonómico y controles personalizables, este mouse se adapta perfectamente a tu mano, brindándote comodidad y control durante largas sesiones de juego.",
    cost:"35$",
    image: require("../images/mouse.jfif")
},{
    id: "4",
    category: "perifericos",
    title: "Audifonos",
    description:"Los audífonos son la opción perfecta para aquellos que buscan una experiencia de audio inigualable. Diseñados con la más alta calidad y tecnología, estos audífonos te sumergirán en un sonido envolvente y claro, permitiéndote disfrutar de tu música, películas y juegos favoritos al máximo.",
    cost:"40$",
    image: require("../images/audifonos.jfif")
}]

const getProducts =  (category) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (!category) {
                resolve(productos)
            }
            const productsByCategory = productos.filter((product) => product.category === category)
            productsByCategory ? resolve(productsByCategory) : reject('404: NOT FOUND')
        },2000)
     })
}

const getProductById =  (id) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const productById = productos.filter((product) => product.id === id)
            productById.length ? resolve(productById[0]) : reject('404: NOT FOUND')
        },1000)
     })
}

export { getProducts,  getProductById}

