import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    //justifyContent: "", // doesnt matter
    alignItems: "center",
    marginTop: 80,
    marginHorizontal: 24,
    borderRadius: 9,
    padding: 16,
    backgroundColor: "#72063c",
    shadowColor: "black", // iOS specific shadow property
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});
