import { Text, View, TouchableOpacity, StyleSheet, TextInput, Switch } from "react-native";

export default function Cadastro(props) {
    return (
        <View style={styles.body}>

            <View style={styles.line}>
                <Text>Nome: </Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <View style={styles.line}>
                <View style={styles.doubleInput}>
                    <View>
                        <Text>Idade: </Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={{marginLeft:50}}> 
                        <Text>Sexo: </Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                </View>
            </View>

            <View style={styles.line}>
                <Text>Email: </Text>
                <TextInput style={styles.input}></TextInput>
            </View>


            <View style={styles.line}>
                <Text>Senha: </Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <View style={styles.line}>
                <Text>Confirmar senha: </Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <View style={styles.line}>
                <Text>Deseja receber notificações?</Text>
                <Switch trackColor={{ false: "#767577", true: "#810bff" }}/>
            </View>

            <View style={styles.line}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.secondaryButton}>
                    <Text style={styles.buttonText}>Cancelar</Text>
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

        doubleInput:{
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

        buttonText: {
            textAlign: "center",
            fontWeight: "bold"
        },

        input:{
            backgroundColor: "white",
            padding: 10,
            height: 40,
            borderRadius: 8,
            marginVertical: 12
        },

    }
)
