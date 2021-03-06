import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

const handleAlert = () => {
  console.log("clicou!");
};

const Widget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Widget</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleAlert}>
          <Text style={styles.buttonText}>
            Testando botão
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Widget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
  title: {
    color: "#333",
    fontSize: 15,
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
    flexDirection: "column",
    backgroundColor: "#c2c2c2",
    borderRadius: 8,
    padding: 5,
  },
  button: {
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    })
  },
  buttonText: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  }
});
