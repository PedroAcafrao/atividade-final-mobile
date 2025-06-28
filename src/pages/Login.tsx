import React from "react"
import { Alert, Button, StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native"
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native"

import { userRepo } from '../services/users.repo'
import { Users } from "../models/users"

export default function LoginPage() {

    const route = useRoute()
    const params = route.params as Users
    const navigation = useNavigation<NavigationProp<any>>()

    // const [id, setId ] = React.useState(params.id ? params.id : 0)
    const [userName, setUserName] = React.useState(params?.userName ? params.userName : '')
    const [pass, setPass] = React.useState(params?.pass ? params.pass : '')

    // React.useEffect(() => {
    //     if (params.name) navigation.setOptions({ title: 'Edição Usuário' })
    // },[])

    async function login() {
        const user = { userName, pass }
        const logado: Users | undefined = await userRepo.getLogin(user);

        if (logado) {
            if (logado.pass == pass) {
                navigation.navigate("Lista")
            } else {
                Alert.alert("Usuário ou senha inválido!")
            }
        } else {
            Alert.alert("Usuário ou senha inválido!")
        }
    }

    function cadastro() {

        console.log('Cadastro')
        navigation.navigate('Registro')

    }

    return (
        <View style={styles.container}>
            {/* <Text>Latitude: {params.latitude}</Text>
            <Text>Longitude: {params.longitude}</Text> */}

            <Text style={styles.label}>Informe os dados de login:</Text>

            <TextInput
                value={userName}
                style={styles.inputName}
                placeholder="Usuário" onChangeText={setUserName}
            />

            <TextInput
                value={pass}
                style={styles.inputName}
                placeholder="Senha" onChangeText={setPass}
            />

            {/*<View style={styles.button}>
                <Button title="Login" onPress={login} />
            </View> */}

            <TouchableOpacity style={styles.button} onPress={login}>
                <View style={styles.buttonContent}>
                    <Image
                        source={require('../../assets/login-icon.png')} // ajuste o caminho da imagem
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.button1}>
                <TouchableOpacity onPress={cadastro}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>
            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: "center",
        marginHorizontal: 20,
    },
    inputName: {
        borderWidth: 1,
        borderRadius: 3,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    inputDescription: {
        height: 140,
        borderWidth: 1,
        borderRadius: 3,
        marginVertical: 10,
        marginHorizontal: 20,
        textAlign: "justify",
        textAlignVertical: "top",
    },
     button1: {
         marginTop: 10,
         marginHorizontal: 50,
     }, 

    button: {
         marginTop: 20,
         marginHorizontal: 50,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonImage: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})