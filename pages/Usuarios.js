import { View, FlatList, Text, StyleSheet, Image } from "react-native";

import { useContext } from 'react';
import { UtilsContext } from "../context";

export default function Usuarios(props) {
    const { data, setData } = useContext(UtilsContext);
    console.log(data)


    if (data.length == 0) {
        console.log("oi")
        return (
            <>
                <View style={styles.body}>
                    <Text style={styles.p}>Nenhum usuário cadastrado</Text>
                </View>
            </>
        )
    }

    else {
        return (
            <>
                <View style={styles.body}>
                    <FlatList data={data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <View style={styles.box}>
                                <Text><Text style={styles.label}>Nome: </Text>{item.nome}</Text>
                                <Text><Text style={styles.label}>Idade: </Text>{item.idade}</Text>
                                <Text><Text style={styles.label}>Sexo: </Text>{item.sexo}</Text>

                                <Text>
                                    <Text style={styles.label}>Notificações:</Text>
                                    {item.notificacao ?
                                    <Image source={require("../assets/able.png")} style={styles.image}/>:
                                    <Image source={require("../assets/disabled.png")} style={styles.image}/>}
                                </Text>

                            </View>)} />
                </View>
            </>
        )
    }
}


const styles = StyleSheet.create(

    {
        body: {
            backgroundColor: "#023e8a",
            height: "100%"
        },

        box: {
            padding: 15,
            borderWidth: 4,
            marginHorizontal: 30,
            marginTop: 30,
            borderRadius: 8,
            backgroundColor: "white",
            borderColor: "#042b5c"
        },

        label: {
            fontWeight: "bold"
        },
        p: {
            color: 'white',
            fontSize: 18,
            textAlign: "center",
            padding: 15
        },
        image: {
            width: 15,
            height: 15,
            marginHorizontal: 5
        }
    }

)
