import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"; 

export default function Wallets(props) {
  return (
      <View style={styles.ultimosCartoes}>
        <Text>Meses</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          data={props.wallets}
          renderItem={({item}) => {
            return (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("Wallet", {id: item.id, name: item.name});
                }}
            >
              <View style={styles.containerCartao}>
                <View style={styles.cartao}>
                  <View style={styles.cartaoBody}>
                    <View style={styles.cartaoBody}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>
                                {item.name}
                            </Text>
                            <Text style={styles.cardIcon}>
                              <Icon name="calendar-today" size={24} color="black" /> 
                            </Text>
                        </View>
                        <View style={styles.alinhasValores}>
                            <Text style={styles.cardText}>
                                Meta: {item.coin} <Text>{item.valueTarget.toFixed(2).replace(".",",")}  </Text>
                            </Text>
                        </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
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
