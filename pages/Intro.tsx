import { useEffect, useState } from "react";
import { Text, ScrollView, SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Intro({ navigation }: any) {

    function TelaLista() {
        navigation.navigate("Listagem")
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Avalie Aqui Seu Produto</Text>

            <View style={styles.containerBox}>
                <Text style={styles.textIntro}>
                    Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores
                </Text>
            </View>

            <TouchableOpacity style={styles.enterButton} onPress={TelaLista}>
                <Text style={styles.enterButtonText}>Entrar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBox: {
        margin: 20,
        padding: 20,
        borderRadius: 15, // Bordas arredondadas
        backgroundColor: '#fff', // Fundo branco
        shadowColor: '#000', // Cor da sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.5, // Raio da sombra
        elevation: 5, // Elevação para Android
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
    },
    textIntro: {
        margin: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    enterButton: {
        backgroundColor: '#303030', // Cor do botão
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        width: 200, // Ajuste o valor conforme necessário para a largura
        alignSelf: 'center', // Centraliza o botão
    },
    enterButtonText: {
        color: '#fff', // Texto branco no botão
        fontWeight: 'bold',
        fontSize: 16,
    }
});