import { useEffect, useState } from "react"
import { Text, Alert, ScrollView, FlatList, SafeAreaView, View, TouchableOpacity, StyleSheet, Image, Platform, TextInput, Button } from "react-native"
import axios from 'axios'

type Produto = {
    id: number
    name: string
    price: number
    brand: string
    description: string
    image: string
}

export default function Lista({navigation}:any) {

    function TelaAvalia(productId:number) {
        navigation.navigate("Avaliação", { productId });
    }

    const [products, setProducts] = useState<Produto[]>([])

    useEffect(() => {
        axios.get('http://192.168.0.9:3000/products')
            .then((response) => {
                setProducts(response.data)
            })
            .catch(() => {
                Alert.alert("Alguma coisa deu errado...");
            })
    }, [])

    return (

        <SafeAreaView style={styles.container}>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.containerBox}>
                        <View style={styles.row}>
                            <Image
                                source={{ uri: item.image }} // A URL da imagem
                                style={styles.image} // Estilo da imagem
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>Produto {item.id}</Text>
                                <Text style={styles.information}>Nome: {item.name}</Text>
                                <Text style={styles.information}>Marca: {item.brand}</Text>
                                <Text style={styles.information}>Descrição: {item.description}</Text>
                                <Text style={styles.price}>Preço: {item.price}</Text>
                                <TouchableOpacity style={styles.enterButton} onPress={() => TelaAvalia(item.id)}>
                                    <Text style={styles.enterButtonText}>Avaliar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBox: {
        margin: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    row: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
},
    textContainer: {
        marginLeft: 10, // Espaço entre a imagem e o texto
        flex: 1, // Para que o texto ocupe o restante do espaço
        textAlign: 'left'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 22,
        textAlign: 'left', // Alterado para alinhar à esquerda
    },
    information: {
        textAlign: 'left',
        fontSize: 14,
        color: '#6d6d6d',
        marginBottom: 10,
        
    },
    price: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 14,
        color: '#6d6d6d',
    },
    enterButton: {
        backgroundColor: '#303030', // Cor do botão
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        width: 100, // Ajuste o valor conforme necessário para a largura
    },
    enterButtonText: {
        color: '#fff', // Texto branco no botão
        fontWeight: 'bold',
        fontSize: 16
    }
});