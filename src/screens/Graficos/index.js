import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"; 

const screenWidth = Dimensions.get('window').width;

export default function Grafico(props) {

    useEffect(() => {

    }, []);

    // Dados para o gráfico com 2 linhas
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], // Eixo X
        datasets: [
        {
            data: [20, 45, 28, 80, 99, 43], // Linha 1
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Cor da Linha 1
            strokeWidth: 2, // Espessura da linha 1
        },
        {
            data: [10, 50, 30, 70, 90, 60], // Linha 2
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Cor da Linha 2
            strokeWidth: 2, // Espessura da linha 2
        },
        ],
    };

    const calculateChartWidth = () => {
        const baseWidth = screenWidth - 40; // Largura total disponível (margens)
        const labelWidth = 50; // Largura média de cada label
        const chartWidth = data.labels.length * labelWidth; // Largura total necessária para acomodar todas as labels
    
        return chartWidth < baseWidth ? baseWidth : chartWidth; // Garantir que o gráfico não seja maior que a tela
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        {"dsfs"/* {`${mesesDoAno[(item.month - 1)]}/${item.year}`} */}
                    </Text>
                    <View style={{width: calculateChartWidth()}}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Gráfico de Linhas (2 Linhas)</Text>
                        <LineChart
                            data={data}
                            width={calculateChartWidth()}
                            height={220}
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 2, // Número de casas decimais
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Cor das etiquetas
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Cor do texto das labels
                                style: {
                                borderRadius: 16,
                                },
                            }}
                            bezier // Para um gráfico mais suave
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
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
});