import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

const mesesDoAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"];

export default function Mes({ route }) {
    const [retorno, setRetorno] = useState(null);

    useEffect(() =>
    {
        const dados = async () =>
        {
            try {
                console.warn(route.params)
                const response = await fetch(`http://192.168.1.13:3000/transaction/year/${route.params.ano}/month/${route.params.mes}`, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',  
                    },
                });
                const data = await response.json(); 
                console.log(data);
                setRetorno(data);
            } catch (error) {
                console.error('Erro ao fazer GET:', error);
            }
        }
        dados(); 
    }, []);

    return (
    <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <View style={styles.cardHeaderTitle}>
                            <Text>Gastos de {`${mesesDoAno[(route.params.mes - 1)]}/${route.params.ano}`}  </Text>
                        </View>
                    </View>
                </View>
            </View>
            {retorno && retorno.length > 0 ? (
                retorno.map(transaction => (
                    <View style={styles.container} key={transaction.id}>
                        <View style={styles.card}>
                            <Text style={styles.title}>{transaction.description} </Text>
                            <Text style={styles.info}>Valor: <Text style={[styles.highlight, (transaction.type === "income" ? styles.profit : styles.loss)]}>R$ {transaction.amount}</Text></Text>
                            <Text style={styles.info}>Data: <Text style={styles.highlight}>{new Date(transaction.date).toLocaleDateString()}</Text></Text>
                        </View>
                    </View>
                ))
            ) : 
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