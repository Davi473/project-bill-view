import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;

const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
console.warn(meses[2]);
export default function Grafico() {
    const [retorno, setRetorno] = useState();

    useEffect(() =>{
        const dados = async () => {
            try {
                const response = await fetch(`http://192.168.1.13:3000/months`, {
                    method: 'GET', 
                    headers: {'Content-Type': 'application/json'},
                });
                const responseJson = await response.json(); 
                if (!responseJson) retorno;
                const data = {
                    labels: [],
                    datasets: [
                        {
                            data: [], 
                            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
                            strokeWidth: 2, 
                        },
                        {
                            data: [], 
                            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, 
                            strokeWidth: 2, 
                        },
                    ]
                };
                console.warn(responseJson);
                responseJson.forEach(mes => {
                    data.labels.push[meses[(mes.month - 1)]];
                    data.datasets[0].data.push(parseFloat(mes.incomeAmount.toFixed(2)));
                    data.datasets[1].data.push(parseFloat(mes.expenseAmount.toFixed(2)));
                });
                console.warn(data);
                setRetorno(data);
            } catch (error) {
                console.error('Erro ao fazer GET:', error);
            }
        }
        dados(); 
    }, []); 

    const calculateChartWidth = () => {
        const baseWidth = screenWidth - 40; 
        const labelWidth = 20; 
        const chartWidth = retorno.labels.length * labelWidth; 
        return chartWidth < baseWidth ? baseWidth : chartWidth;
    };

    return (
        <ScrollView style={styles.container}>
        {
            retorno ?
            <View>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        Grafico Do Ano
                        {
                            JSON.stringify(retorno.labels)
                        }
                    </Text>
                    <View style={styles.chartContainer}>
                        <LineChart
                            data={retorno}
                            width={calculateChartWidth() - 100}  
                            height={200} 
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 2, 
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                    </View>
                </View>
            </View>
            :
            <View style={styles.carregando}>
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
        height: 350
    },
    title: {
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    chartContainer: {
        width: "90%",
        height: "100%",  
        justifyContent: 'center',
        alignItems: 'center',
    },
    carregando: {
        justifyContent: 'center', 
        alignItems: 'center',
    }
});
