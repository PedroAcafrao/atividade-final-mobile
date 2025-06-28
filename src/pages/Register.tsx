import React from "react"
import { Alert, Button, StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native"
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native"

import { userRepo } from '../services/users.repo'
import { Users } from "../models/users"

export default function PlacePage() {

    const route = useRoute()
    const params = route.params as Users
    const navigation = useNavigation<NavigationProp<any>>()

    const [id, setId] = React.useState(params?.id ? params.id : '')
    const [name, setName] = React.useState(params?.name ? params.name : '')
    const [userName, setUserName] = React.useState(params?.userName ? params.userName : '')
    const [pass, setPass] = React.useState(params?.pass ? params.pass : '')
    const [passConfirm, setPassConfirm] = React.useState(params?.passConfirm ? params.passConfirm : '')


    // React.useEffect(() => {
    //      if (params?.name) navigation.setOptions({ title: 'Edição Usuário' })
    //  }, [])

    function remove() {
        const user = {
            id: params.id

        }

        userRepo.remove(user).then(() => {
            navigation.goBack()
        })
    }

    async function save() {
        if (!name && name.trim() === '') {
            Alert.alert('O Nome é obrigatório!')
        }
        if (!userName && userName.trim() === '') {
            Alert.alert('O usuário é obrigatório!')
        }
        if (!pass && pass.trim() === '') {
            Alert.alert('A senha é obrigatório!')
            return
        }
        if (!passConfirm && passConfirm.trim() === '') {
            Alert.alert('A confirmação de senha é obrigatório!')
            return
        }
        if (pass != passConfirm) {
            Alert.alert('A senha e confirmação de senha estão diferentes!')
            return
        }


        const user = {
            name, userName,
            pass,
            passConfirm, id
        }

        userRepo.save(user).then(() => {
            Alert.alert(
                'Sucesso!',
                'Usuário cadastrado com sucesso!',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.goBack(), // Só volta quando o usuário tocar em OK
                    },
                ],
                { cancelable: false }
            );
        });

    }

    return (
        <View style={styles.container}>
            { /*<Text>Latitude: {params.latitude}</Text> 
            <Text>Longitude: {params.longitude}</Text> */}

            <Text style={styles.label}>Informe os dados do novo usuário:</Text>

            <TextInput
                value={name}
                style={styles.inputName}
                placeholder="Nome" onChangeText={setName}
            />

            <TextInput
                value={userName}
                style={styles.inputName}
                placeholder="Usuário" onChangeText={setUserName}
            />

            <TextInput
                value={pass}
                style={styles.inputName}
                placeholder="Senha" onChangeText={setPass}
                secureTextEntry={true}
            />
            <TextInput
                value={passConfirm}
                style={styles.inputName}
                placeholder="Confirmar senha" onChangeText={setPassConfirm}
                secureTextEntry={true}
            />

            {params?.name && (
                <View style={styles.button}>
                    <Button title="Remover" onPress={remove} color='red' />
                </View>
            )}

            {/* <View style={styles.button}>
                <Button title="Salvar" onPress={save} />
            </View> */}

            <TouchableOpacity style={styles.button} onPress={save}>
                <View style={styles.buttonContent}>
                    <Image
                        source={require('../../assets/save-icon.png')} // ajuste o caminho da imagem
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Salvar</Text>
                </View>
            </TouchableOpacity>


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
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
})