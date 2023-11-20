import { Text, TouchableOpacity, View, TextInput, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Login(props) {
    const { value } = useSelector((store) => store.list);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    console.log(value)
    function Login() {
        value.forEach(u => {
            if (u.email == email && u.senha == senha)
                props.navigation.navigate("Usuarios")
        });
    }

    return (
        <View style={styles.body}>

            <Image source={require("../assets/user-244.png")} style={styles.image} />

            <View style={styles.line}>
                <Text style={styles.label}>Email: </Text>
                <TextInput style={styles.input} onChangeText={e => setEmail(e)} />
            </View>

            <View style={styles.line}>
                <Text style={styles.label}>Senha: </Text>
                <TextInput style={styles.input} onChangeText={e => setSenha(e)} />
            </View>

            <View style={styles.line}>
                <TouchableOpacity onPress={() => Login()} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("Cadastro")} style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




const styles = StyleSheet.create(
    {
        body:
        {
            backgroundColor: "#023e8a",
            height: "100%"
        },

        line: {
            padding: 30
        },

        input: {
            backgroundColor: "#021e8a",
            padding: 10,
            height: 50,
            borderRadius: 8,
            marginVertical: 12,
            color: "white"
        },

        label: {
            color: 'white',
            fontSize: 18
        },

        button: {
            backgroundColor: "white",
            padding: 10,
            margin: 8,
            borderRadius: 8,
        },

        secondaryButton: {
            padding: 10,
            marginVertical: 8,
            borderRadius: 8,
        },

        buttonText: {
            textAlign: "center",
            fontWeight: 500,
            color: "black",
            fontSize: 20
        },

        secondaryButtonText: {
            textAlign: "center",
            fontWeight: 500,
            color: "white",
            fontSize: 20
        },

        image: {
            height: "200px",
            width: "200px",
            alignSelf: "center",
            marginTop: 35
        }
    }
)
