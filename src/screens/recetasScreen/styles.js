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
        backgroundColor: colors.fondo,
    },
    boton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.cuaternario,
        borderBottomEndRadius: 5,
        // backgroundColor: "#F6D860",
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
        // shadowOffset: 10,
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    texto: {
        fontSize: 18,
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
    }
})

export default styles