import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function Adicionar(props) {
    const [retorno, setRetorno] = useState(null);
    useEffect(() =>
    {
        const dados = async () =>
        {
            try {
                const response = await fetch('http://192.168.1.13:3000/months', {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',  
                    },
                });
                const data = await response.json(); 
                setRetorno(data);
            } catch (e) {
                console.error('Erro ao fazer GET:', e);
            }
        }
        dados(); 
    }, []);
  
    return (
        <ScrollView style={styles.container}
          showsVerticalScrollIndicator={false}
        >
        {
            retorno ?
                <View> 
                    <Text>Tela Adicionar</Text>
                </View>
            : 
                <View>
                    <Text>Carregando...</Text>
                </View>
        }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 0,
    },
});
