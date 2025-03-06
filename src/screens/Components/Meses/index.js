import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons"; 

const mesesDoAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"];

export default function Meses(props) {
  return (
      <View style={styles.ultimosCartoes}>
        <Text>Meses De Gastos</Text>
        <FlatList 
          data={props.meses}
          renderItem={({item}) => {
            return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("MesView", {mes: item.month, ano: item.year});
                }}
            >
              <View style={styles.containerCartao}>
                <View style={styles.cartao}>
                  <View style={styles.cartaoBody}>
                    <View style={styles.cartaoBody}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>
                                {`${mesesDoAno[(item.month - 1)]}/${item.year}`}
                            </Text>
                            <Text style={styles.cardIcon}>
                              <Icon name="calendar-today" size={24} color="black" /> 
                            </Text>
                        </View>
                        <View style={styles.alinhasValores}>
                            <Text style={styles.cardText}>
                                Entrada: R$<Text>{item.incomeAmount.toFixed(2).replace(".",",")}  </Text>
                            </Text>
                            <Text style={styles.cardText}>
                                Saida: R$<Text>{item.expenseAmount.toFixed(2).replace(".",",")}  </Text>
                            </Text>
                        </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            )
          }}
          keyExtractor={(index) => index}
          nestedScrollEnabled={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
    ultimosCartoes: {
        marginTop: 30,
    },
    containerCartao: {
        marginTop: 10,
        padding: 10,
    },
    cartao: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 15
    },
    cartaoBody: {
        marginBottom: 15
    },
    cartaoHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardIcon: {
        fontSize: 20,
        color: '#555',
    },
    cardText: {
        fontSize: 16,
        marginVertical: 5,
    },
    alinhasValores: {
        alignItems: "flex-start"
    }
});
