import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function Adicionar(props) {
    const [data, setData] = useState();

    // const [retorno, setRetorno] = useState(null);
    // useEffect(() =>
    // {
    //     const dados = async () =>
    //     {
    //         try {
    //             const response = await fetch('http://192.168.1.13:3000/months', {
    //                 method: 'GET', 
    //                 headers: {
    //                     'Content-Type': 'application/json',  
    //                 },
    //             });
    //             const data = await response.json(); 
    //             setRetorno(data);
    //         } catch (e) {
    //             console.error('Erro ao fazer GET:', e);
    //         }
    //     }
    //     dados(); 
    // }, []);
  
    return (
        <ScrollView style={styles.container}
          showsVerticalScrollIndicator={false}
        >
            <View> 
                <View>
                    <View style={styles.card}>
                        <View style={styles.cardTitle}>
                            <Text style={styles.textTitle}>Adicinar</Text>
                        </View>
                        <View>
                            <Text style={styles.formLabel}>Descrição</Text>
                            <TextInput
                                style={styles.input}
                                // onChangeText={setWeight}
                                // value={weight}
                                placeholder="Descrição"
                                keyboardType="ascii-capable"
                            />
                            <Text style={styles.formLabel}>Data</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setData(text)}
                                value={data}
                                placeholder="DD/MM/AAAA"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 0,
    },
    card: {
        width: '90%',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 5,
        alignItems: 'center',
        flexGrow: 1,
        width: "auto",
    },
    cardTitle: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center', 
    },
    textTitle: {
        color: "#000000",
        fontSize: 24,
        paddingLeft: 20,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 12,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    carregando: {
        justifyContent: 'center', 
        alignItems: 'center',
    }
});
