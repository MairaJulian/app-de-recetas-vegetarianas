import vegana from '../assets/imagenes/vegana.jpg'
import vegetariana from '../assets/imagenes/vegetariana.jpg'
import carne from '../assets/imagenes/carne.jpg'
import tartaDeChoclo from '../assets/imagenes/tartaDeChoclo.jpg'
import milanesaDeBerenjena from '../assets/imagenes/milanesaDeBerenjena.jpg'
import pastelDeCalabaza from '../assets/imagenes/pastelDeCalabaza.jpg'
import risottoVegano from '../assets/imagenes/risottoVegano.jpg'
import lentejasConVerduras from '../assets/imagenes/lentejasConVerduras.jpg'
import albondigasVeganas from '../assets/imagenes/albondigasVeganas.jpg'
import bistecALaMexicana from '../assets/imagenes/bistecALaMexicana.jpg'

const RECETAS = [
    {
        idCategoria: 1,
        name: "COMIDAS VEGETARIANAS",
        image: vegetariana,
        listaDeComidas: [
            {
                idReceta: "1",
                image: tartaDeChoclo,
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
                image: milanesaDeBerenjena,
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
                image: pastelDeCalabaza,
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
        image: vegana,
        listaDeComidas: [
            {
                idReceta: "1",
                image: risottoVegano,
                name: "RISOTTO VEGANO",
                ingredientes: [
                    {
                        ingrediente: "aceite de oliva virgen extra",
                        cantidad: "",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "arroz arborio",
                        cantidad: "",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "vino blanco",
                        cantidad: "",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "caldo de verduras o agua",
                        cantidad: "",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "mantequilla vegana",
                        cantidad: "",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "Queso parmesano vegano rallado",
                        cantidad: "",
                        idIngrediente: "6"
                    }
                ],
                preparacion: [
                    {
                        number: "1",
                        step: "Calienta el aceite en una sartén y añade los champiñones, el ajo y la sal. Remueve y cocina a fuego medio-alto hasta que se doren. Reserva."
                    },
                    {
                        number: "2",
                        step: "Calienta el aceite en una sartén a fuego medio-alto y añade el ajo, la cebolla y el apio. Remueve y cocina a fuego medio-alto hasta que se doren."
                    },
                    {
                        number: "3",
                        step: "Añade el arroz y cocina durante un par de minutos."
                    },
                    {
                        number: "4",
                        step: "Añade el vino y cocina hasta que el líquido se consuma."
                    },
                    {
                        number: "5",
                        step: "Echa 120 ml de caldo de verdura (½ taza) y remueve de vez de cuando. Cuando se absorba, añade más caldo y ve repitiendo este paso hasta que el arroz esté al dente. Esto te llevará unos 18-20 minutos."
                    },
                    {
                        number: "6",
                        step: "Apártalo del fuego y echa 120 ml más de caldo (½ taza), los champiñones cocinados, la sal, la pimienta, la mantequilla vegana y el queso vegano. Remueve hasta que estén todos los ingredientes integrados."
                    },
                    {
                        number: "7",
                        step: "Déjalo reposar cubierto durante 5 minutos."
                    },
                    {
                        number: "8",
                        step: "Sirve inmediatamente."
                    },
                ]
            },
            {
                idReceta: "2",
                image: lentejasConVerduras,
                name: "LENTEJAS CON VERDURAS",
                ingredientes: [
                    {
                        ingrediente: "lentejas (previamente remojadas)",
                        cantidad: "2 tazas",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "cebolla grande picada",
                        cantidad: "1",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "dientes de ajo picados",
                        cantidad: "2",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "pimiento rojo picado",
                        cantidad: "1",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "pimiento verde picado",
                        cantidad: "1",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "zanahorias peladas y cortadas en cubos pequeños",
                        cantidad: "2",
                        idIngrediente: "6"
                    },
                    {
                        ingrediente: "papa grande pelada y cortada en cubos",
                        cantidad: "1",
                        idIngrediente: "7"
                    },
                    {
                        ingrediente: "tomates sin cáscara, cortados en cubos",
                        cantidad: "2",
                        idIngrediente: "8"
                    },
                    {
                        ingrediente: "pimentón dulce",
                        cantidad: "1 cucharadita",
                        idIngrediente: "9"
                    },
                    {
                        ingrediente: "laurel, sal y pimienta, aceite de oliva y perejil",
                        cantidad: "c/n",
                        idIngrediente: "10"
                    },
                    {
                        ingrediente: "caldo",
                        cantidad: "8 tazas",
                        idIngrediente: "11"
                    },
                ],
                preparacion: [
                    {
                        number: "1",
                        step: "En una cacerola, calentar un poco de aceite de oliva y agregar la cebolla y el ajo picados. Saltear unos minutos hasta que estén levemente dorados."
                    },
                    {
                        number: "2",
                        step: "Agrega los pimientos cortados y cocinar en el aceite por unos minutos más."
                    },
                    {
                        number: "3",
                        step: "Incorporar las zanahorias y la papa cortadas y remover con el resto de las verduras, cocinar por unos minutos. Luego agregar los tomates picados y remover."
                    },
                    {
                        number: "4",
                        step: "Una vez que las verduras estén tiernas agregar las lentejas, el agua o caldo, el pimentón dulce y la hoja de laurel. Salpimentar y mezclar todo suavemente."
                    },
                    {
                        number: "5",
                        step: "Llevar a ebullición y luego reducir el fuego al mínimo. Tapar la cacerola y cocinar las lentejas durante aproximadamente 45/50 minutos, o hasta que las verduras estén cocidas y tiernas."
                    },
                    {
                        number: "6",
                        step: "Es importante revolver de vez en cuando y prestar atención al líquido durante la cocción, para asegurarse de que las lentejas estén siempre cubiertas y no se peguen en el fondo."
                    },
                    {
                        number: "7",
                        step: "Una vez que las lentejas estén cocidas, rectificar de sal y pimienta si es necesario. Dejar reposar unos minutos antes de servir. "
                    },
                    {
                        number: "8",
                        step: "Servir caliente y con unas hojas de perejil por encima."
                    },
                ]
            },
            {
                idReceta: "3",
                image: albondigasVeganas,
                name: "ALBÓNDIGAS VEGANAS",
                ingredientes: [
                    {
                        ingrediente: "lentejas rojas",
                        cantidad: "1 vasito",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "trigo burgol",
                        cantidad: "½ vasito",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "aceite de oliva",
                        cantidad: "3 cucharadas",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "pasta de tomate",
                        cantidad: "2 cucharadas",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "pasta de pimiento rojo",
                        cantidad: "1 cucharada",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "cebolla de verdeo",
                        cantidad: "1",
                        idIngrediente: "6"
                    },
                    {
                        ingrediente: "cebolla común",
                        cantidad: "1",
                        idIngrediente: "7"
                    },
                    {
                        ingrediente: "perejil",
                        cantidad: "c/n",
                        idIngrediente: "8"
                    },
                    {
                        ingrediente: "comino",
                        cantidad: "c/n",
                        idIngrediente: "9"
                    },
                    {
                        ingrediente: "pimentón",
                        cantidad: "c/n",
                        idIngrediente: "10"
                    },
                    {
                        ingrediente: "sal y pimienta",
                        cantidad: "c/n",
                        idIngrediente: "11"
                    },
                ],
                preparacion: [
                    {
                        number: "1",
                        step: "Cocinar las lentejas turcas en la misma cantidad de agua (1 taza de agua por 1 taza de lentejas) hasta que estén hechas casi puré."
                    },
                    {
                        number: "2",
                        step: "Mientras, picar las verduras. Reservar a un costado la cebolla de verdeo y el perejil."
                    },
                    {
                        number: "3",
                        step: "Rehogar la cebolla común bien picada hasta que esté transparente. Agregar la pasta de tomates y la pasta de morrón."
                    },
                    {
                        number: "4",
                        step: "Una vez que el tomate cambia de color y se torna un poco más oscuro: condimentar y revolver. Reservar."
                    },
                    {
                        number: "5",
                        step: "Una vez que las lentejas estén listas, en caliente sumar el trigo burgol y revolver bien. Tapar y dejar hidratar por media hora."
                    },
                    {
                        number: "6",
                        step: "Una vez transcurrido ese tiempo sumar la mezcla que se cocinó previamente, el perejil y la cebolla de verdeo. Salpimentar y fuera anillos: mezclar con las manos."
                    },
                    {
                        number: "7",
                        step: "Darle formas de albóndigas y listo! Se come en crudo."
                    },
                    {
                        number: "8",
                        step: "Se sirve encima de hojas de lechuga y se puede acompañar con una salsita de yogurt."
                    },
                ]
            },
        ]
    }, 
    {
        idCategoria: 3,
        name: "COMIDAS CON CARNE",
        image: carne,
        listaDeComidas: [
            {
                idReceta: "1",
                image: bistecALaMexicana,
                name: "BISTEC A LA MEXICANA",
                ingredientes: [
                    {
                        ingrediente: "filetes de ternera",
                        cantidad: "4",
                        idIngrediente: "1"
                    },
                    {
                        ingrediente: "cebolla grande",
                        cantidad: "1",
                        idIngrediente: "2"
                    },
                    {
                        ingrediente: "tomates",
                        cantidad: "2",
                        idIngrediente: "3"
                    },
                    {
                        ingrediente: "chiles serranos (opcional)",
                        cantidad: "2",
                        idIngrediente: "4"
                    },
                    {
                        ingrediente: "pimiento rojo",
                        cantidad: "½",
                        idIngrediente: "5"
                    },
                    {
                        ingrediente: "pimiento verde",
                        cantidad: "½",
                        idIngrediente: "6"
                    },
                    {
                        ingrediente: "dientes de ajo",
                        cantidad: "2",
                        idIngrediente: "7"
                    },
                    {
                        ingrediente: "aceite vegetal",
                        cantidad: "c/n",
                        idIngrediente: "8"
                    },
                    {
                        ingrediente: "sal y pimienta",
                        cantidad: "c/n",
                        idIngrediente: "9"
                    },
                    {
                        ingrediente: "comino",
                        cantidad: "c/n",
                        idIngrediente: "10"
                    },
                    {
                        ingrediente: "cilantro fresco (para decorar)",
                        cantidad: "c/n",
                        idIngrediente: "11"
                    },
                ],
                preparacion: [ 
                    {
                        number: "1",
                        step: "En una sartén grande, calentar un poco de aceite vegetal a fuego medio-alto. Incorporar los filetes de res y cocinar por ambos lados hasta que estén dorados. Retirarlos de la sartén y reservar."
                    },
                    {
                        number: "2",
                        step: "En la misma sartén, agrega la cebolla picada, los tomates cortados en cubos, los pimientos y los chiles serranos (Se les pueden quitar las semillas para reducir el picante). Saltear hasta que la cebolla esté transparente y los tomates y pimientos suaves."
                    },
                    {
                        number: "3",
                        step: "Agregar los dientes de ajo picados y sazonar con sal, pimienta y comino. Cocinar por unos minutos más para que los sabores se integren."
                    },
                    {
                        number: "4",
                        step: "Volver a poner los filetes de res en la sartén y sumergirlos en la salsa para que se impregnen de los sabores. Cocinar a fuego medio-bajo durante unos minutos hasta que la carne esté cocida."
                    },
                    {
                        number: "5",
                        step: "Servir el bistec a la mexicana caliente, espolvoreado con cilantro fresco picado por encima."
                    },
                ]
            },
        ]
    }
]

export default RECETAS