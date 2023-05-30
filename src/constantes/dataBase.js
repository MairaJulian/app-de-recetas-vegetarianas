import arroz from '../assets/imagenes/arrozOK.jpg'
import fideos from '../assets/imagenes/fideosOK.jpg'
import gluten from '../assets/imagenes/glutenOK.jpg'

const RECETAS = [
    {
        idCategoria: 1,
        name: "COMIDAS VEGETARIANAS",
        image: arroz,
        listaDeComidas: [
            {
                idReceta: "1",
                image: arroz,
                name: "TARTA DE CHOCLO",
                ingredientes: [
                    {
                        ingrediente: "cebollas de verdeo",
                        cantidad: "4",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "cebollas salteadas",
                        cantidad: "4",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "puerros",
                        cantidad: "4",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "aceite de oliva",
                        cantidad: "3 cdas",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "choclo amarillo",
                        cantidad: "3 latas",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "Sal y pimienta",
                        cantidad: "c/n",
                        idIngrediente: "6"
                    },
                    {
                        ingrediente: "queso crema",
                        cantidad: "290 gr",
                        idIngrediente: "7"
                    },
                    {
                        ingrediente: "huevos",
                        cantidad: "4",
                        idIngrediente: "8"
                    },
                    {
                        ingrediente: "masa para tarta",
                        cantidad: "1 disco",
                        idIngrediente: "9"
                    },
                ],
                preparacion: [
                    {
                        number: "1",
                        step: "Cortar las cebollas, puerro y verdeo rehogarlas en el aceite de oliva durante 2 minutos."
                    },
                    {
                        number: "2",
                        step: "Incorporar las latas de choclo previamente escurridas, 1 lata procesar salpimentar, retirar del fuego y reservar."
                    },
                    {
                        number: "3",
                        step: "Aparte mezclar el queso crema con los huevos, incorporar a la mezcla del choclo y unir."
                    },
                    {
                        number: "4",
                        step: "Verter la preparación sobre un molde para tarta rociado con rocío vegetal"
                    },
                    {
                        number: "5",
                        step: "Llevar al horno precalentado a temperatura media (180 grados), durante 40 minutos aproximadamente."
                    },
                ]
            },
            {
                idReceta: "2",
                image: fideos,
                name: "MILANESA DE BERENJENA",
                ingredientes: [
                    {
                        ingrediente: "berenjenas",
                        cantidad: "3",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "Vinagre de alcohol",
                        cantidad: "c/n",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "Hierbas",
                        cantidad: "c/n",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "Huevo",
                        cantidad: "3",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "Perejil",
                        cantidad: "c/n",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "Ajo",
                        cantidad: "1 diente",
                        idIngrediente: "6"
                    },
                    {
                        ingrediente: "Mostaza",
                        cantidad: "c/n",
                        idIngrediente: "7"
                    },
                    {
                        ingrediente: "Pan rallado",
                        cantidad: "cantidad necesaria",
                        idIngrediente: "8"
                    },
                    {
                        ingrediente: "Salsa de tomate",
                        cantidad: "200 gr",
                        idIngrediente: "9"
                    },
                    {
                        ingrediente: "Queso fresco",
                        cantidad: "250 gr",
                        idIngrediente: "10"
                    },
                ],
                preparacion: [
                    {
                        number: "1",
                        step: "Cortar las berenjenas a lo largo de medio centímetro de grosor aproximadamente."
                    },
                    {
                        number: "2",
                        step: "Colocarlas en un bol con un poco de sal, vinagre y hierbas."
                    },
                    {
                        number: "3",
                        step: "Pasados unos 30 minutos, retirarlas y pasar por huevo, perejil, ajo y mostaza."
                    },
                    {
                        number: "4",
                        step: "Luego pasarlas por la mezcla de pan rallado y semillas."
                    },
                    {
                        number: "5",
                        step: "Cocinar al horno y cuando las den vuelta colocarle la salsa de tomate y el queso."
                    },
                ]
            },
            {
                idReceta: "3",
                image: gluten,
                name: "PASTEL DE CALABAZA",
                ingredientes: [
                    {
                        ingrediente: "berenjena en cubitos chiquitos",
                        cantidad: "1",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "cebolla picada",
                        cantidad: "2",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "morrón rojo picado",
                        cantidad: "1",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "zanahoria picada",
                        cantidad: "1",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "Ajo",
                        cantidad: "1 diente",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "Pimentón",
                        cantidad: "c/n",
                        idIngrediente: "6"
                    },
                    {
                        ingrediente: "Ají molido",
                        cantidad: "c/n",
                        idIngrediente: "7"
                    },
                    {
                        ingrediente: "Sal y Pimienta",
                        cantidad: "c/n",
                        idIngrediente: "8"
                    },
                    {
                        ingrediente: "calabaza en puré",
                        cantidad: "1",
                        idIngrediente: "9"
                    },
                    {
                        ingrediente: "yema",
                        cantidad: "1",
                        idIngrediente: "10"
                    },
                    {
                        ingrediente: "claras batidas a nieve",
                        cantidad: "2",
                        idIngrediente: "11"
                    },
                ],
                preparacion: [
                    {
                        number: "1",
                        step: "En una sartén grande rehogar los vegetales menos las berenjenas con un poco de aceite."
                    },
                    {
                        number: "2",
                        step: "Cuando eso esté doradito condimentar y cocinar por unos minutos más, agregar los cubitos de berenjenas y apenas cocinarlas, retirar y reservar."
                    },
                    {
                        number: "3",
                        step: "Cortar una calabaza a la mitad y cocinar en el horno hasta que se haga puré."
                    },
                    {
                        number: "4",
                        step: "Cuando esté, dejar enfriar y mezclar la yema de huevo."
                    },
                    {
                        number: "5",
                        step: "Por otro lado batir las claras a nieve y en forma envolvente mezclar con el puré."
                    },
                    {
                        number: "6",
                        step: "En una fuente colocar el relleno, fetas de queso cremoso y arriba el puré, espolvorear con queso rallado y llevar al horno para terminar de cocinar y gratinar."
                    },
                ]
            },

        ]
    },
    {
        idCategoria: 2,
        name: "COMIDAS VEGANAS",
        image: fideos,
        listaDeComidas: []
    }, 
    {
        idCategoria: 3,
        name: "COMIDAS CON CARNE",
        image: gluten,
        listaDeComidas: []
    }
]

export default RECETAS