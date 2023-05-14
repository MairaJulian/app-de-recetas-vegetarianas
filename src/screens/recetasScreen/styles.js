import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "green"
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    boton: {
        borderBottomWidth: 1,
        borderBottomColor: "yellow",
        borderBottomEndRadius: 5,
        backgroundColor: "yellow",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
        // borderRadius: 10,
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
        fontSize: 22,
        marginRight: 10,
    },
    foto: {
        width: 60,
        height: 60,
        flexDirection: "row",
        borderRadius: 20
    }
})

export default styles