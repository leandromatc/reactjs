import productos from "./productos"

export const leerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(productos)
        }, 2000)
    })
}