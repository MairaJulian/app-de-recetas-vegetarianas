import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: colors.fondo,
    },
    categoriasContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    boton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.cuaternario,
        borderBottomEndRadius: 5,
        backgroundColor: colors.cuaternario,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        margin: 5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20, 
        borderBottomRightRadius: 0,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 5,
    },
    texto: {
        fontSize: 22,
        marginRight: 10,
    },
    foto: {
        width: 60,
        height: 60,
        flexDirection: "row",
        borderRadius: 20
    },
    lista: {
        padding: 20,
    },
    letrasContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 20,

    },
    // letra: {
    //     fontFamily: "Bold",
        
    // },
    // letraBoton: {
    //     // borderColor: colors.terciario,
    //     borderColor:  "white",
    //     borderWidth: 1,
    //     // backgroundColor: colors.terciario,
    //     backgroundColor: "white",
    //     padding: 2,
    //     margin: 3,
    //     borderRadius: 3,
    //     shadowColor: "black",
    //     shadowOpacity: 0.3,
    //     shadowRadius: 2,
    //     shadowOffset: {width: 1, height: 1}
    // }
})

export default styles