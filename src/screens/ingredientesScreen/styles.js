import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
    instrucciones: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: colors.fondo,
    },
    imagen: {
        width: 250,
        height: 250,
        borderRadius: 20,
        // borderColor: colors.secundario,
        // borderWidth: 3,
    },
    tituloReceta: {
        fontSize: 22,
        fontFamily: "Bold",
    },
    ingredientesContainer: {
        // flex: 1,
        backgroundColor: colors.secundario,
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        fontFamily: "Regular"
    },
    titulo: {
        fontFamily: "Bold",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 18,
        // color: "white",
    },
    listaIngredientes: {
        flexDirection: "row",
        fontSize: 18,
    },
    ingredientsText: {
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: '100%',
        fontSize: 18,
        textAlign: "left",
        margin: 5
    },
    preparacionContainer: {
        // flex: 1,
        padding: 20,
        backgroundColor: colors.terciario,
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        borderColor: "black",
        fontFamily: "Regular",
        marginHorizontal: 20,
    },
    listaInstrucciones: {
        // flexDirection: "row",
        
    },
    instructionContainer: {
        // flexDirection: "column",
        
    },
    instructionText: {
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: '100%',
        fontSize: 18,
        textAlign: "left",
        margin: 7
    }
})

export default styles