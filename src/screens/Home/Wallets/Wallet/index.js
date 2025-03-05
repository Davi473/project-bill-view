import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function Wallet({ route }) {
    const [retorno, setRetorno] = useState(null);
    const profitLossColor = 12 >= 0 ? styles.profit : styles.loss;

    useEffect(() =>
    {
        const dados = async () =>
        {
            try {
                const response = await fetch(`http://192.168.1.13:3000/api/wallet/${route.params.id}/transactions`, {
                    method: 'GET', 
                    headers: {
                    'Content-Type': 'application/json',  
                    },
                });
                const data = await response.json(); 
                setRetorno(data.transactions);
                console.warn(data.transactions)
            } catch (error) {
                console.error('Erro ao fazer PUT:', error);
            }
        }
        dados(); 
    }, [globalVar]);

    return (
    <ScrollView>
        <View>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={styles.cardHeaderTitle}>
                            <Text>Wallet {route.params.name}  </Text>
                        </View>
                    </View>
                </View>
            </View>
            {retorno && retorno.length > 0 ? (
                retorno.map(transaction => (
                    <View style={styles.container} key={transaction.id}>
                        <View style={styles.card}>
                            <Text style={styles.title}>{transaction.name} </Text>
                            <Text style={styles.info}>Valor Médio: <Text style={styles.highlight}>R$ {transaction.averageValue}   </Text></Text>
                            <Text style={styles.info}>Quantidade: <Text style={styles.highlight}>{transaction.quantity.toFixed(2).replace(".",",")}    </Text></Text>
                            <Text style={styles.info}>Total Investido: <Text style={styles.highlight}>R$ {(transaction.averageValue * transaction.quantity).toFixed(2)}</Text></Text>
                            <Text style={styles.info}>Valor Atual: <Text style={styles.highlight}>R$ {}</Text></Text>
                            <Text style={[styles.info, profitLossColor]}>Lucro/Prejuízo: R$ {123}</Text>
                        </View>
                    </View>
                ))
            ) : 
                retorno && retorno.length === 0 ? (
                    retorno.map(transaction => (
                        <View>
                            <Text>Sem Dados</Text>
                        </View>
                    ))
                ) : (
                    <View>
                        <Text>Carregando...</Text>
                    </View>
                )
            }
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
        maxWidth: 350,
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    info: {
        fontSize: 14,
        color: '#555',
        marginVertical: 4,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#000',
    },
    profit: {
        color: 'green',
        fontWeight: 'bold',
    },
    loss: {
        color: 'red',
        fontWeight: 'bold',
    },
});