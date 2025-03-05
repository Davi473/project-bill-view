import { StyleSheet, Text, View } from 'react-native';

export default function Saudacao(props) {
    const saudacao = () => {
        const hora = new Date().getHours();
        if (hora > 5 && hora < 12) return "Bom Dia";
        if (hora > 13 && hora < 19) return "Boa Tarde";
        return "Boa Noite";
    }

    return (
        <View>
            <Text style={styles.momentoDoDia}>{saudacao()},     </Text>
            <Text style={styles.nickName}>{props.nickName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nickName: {fontSize: 28},
    momentoDoDia: {fontSize: 15}
})