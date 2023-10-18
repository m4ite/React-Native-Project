import { Text, View, TouchableOpacity, StyleSheet, TextInput, Switch } from "react-native";

import { useContext, useState, useEffect } from 'react';
import { UtilsContext } from "../context";


export default function Cadastro(props) {

    const { data, setData } = useContext(UtilsContext);

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confim, setConfirm] = useState("")
    const [notificacao, setNotificacao] = useState(false)

    function Cadastrar() {
        if(senha != confim)
        {
            alert("A senhas devem ser iguais!")
            return
        }

        if(!senha || !email || !nome || !idade || !sexo)
        {
            alert("Todos os campos devem ser preenchidos")
            return
        }

        setData([...data,{nome,idade,sexo,email,senha,notificacao}])
        props.navigation.navigate("Login")
    }

    useEffect(() => {
        console.log(data)
    },[data])

    return (
        <View style={styles.body}>

            <View style={styles.line}>
                <Text style={styles.label}>Nome: </Text>
                <TextInput style={styles.input} onChangeText={e => setNome(e)}></TextInput>
            </View>

            <View style={styles.line}>
                <View style={styles.doubleInput}>
                    <View>
                        <Text style={styles.label}>Idade: </Text>
                        <TextInput style={styles.input} onChangeText={e => setIdade(e)}></TextInput>
                    </View>

                    <View style={{ marginLeft: 50 }}>
                        <Text style={styles.label}>Sexo: </Text>
                        <TextInput style={styles.input} onChangeText={e => setSexo(e)}></TextInput>
                    </View>
                </View>
            </View>

            <View style={styles.line}>
                <Text style={styles.label}>Email: </Text>
                <TextInput style={styles.input} onChangeText={e => setEmail(e)}></TextInput>
            </View>


            <View style={styles.line}>
                <Text style={styles.label}>Senha: </Text>
                <TextInput style={styles.input} onChangeText={e => setSenha(e)}></TextInput>
            </View>

            <View style={styles.line}>
                <Text style={styles.label}>Confirmar senha: </Text>
                <TextInput style={styles.input} onChangeText={e => setConfirm(e)}></TextInput>
            </View>

            <View style={styles.line}>
                <Text style={styles.label}>Deseja receber notificações?</Text>
                <Switch trackColor={{ false: "#767577", true: "#34B233" }} value={notificacao}
                    onValueChange={() => setNotificacao(!notificacao)} />
            </View>

            <View style={styles.line}>
                <TouchableOpacity onPress={() => Cadastrar()} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Cancelar</Text>
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
            paddingHorizontal: 30,
            paddingVertical: 10
        },

        doubleInput: {
            flexDirection: "row"
        },

        button: {
            backgroundColor: "white",
            padding: 10,
            marginVertical: 8,
            borderRadius: 8,
        },

        secondaryButton: {

            padding: 10,
            marginVertical: 8,
            borderRadius: 8,
        },

        secondaryButtonText:
        {
            color: "white",
            textAlign: "center",
            fontWeight: "bold"

        },

        buttonText: {
            textAlign: "center",
            fontWeight: "bold"
        },

        input: {
            backgroundColor: "white",
            padding: 10,
            height: 40,
            borderRadius: 8,
            marginVertical: 12
        },

        label: {
            color: "white"
        }

    }
)
