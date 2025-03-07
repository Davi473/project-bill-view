import { StyleSheet } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <Routes style={styles.margin}/>
  );
}

const styles = StyleSheet.create({
  margin: {
    margin: 20
  }
});