import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Provider } from "react-redux";
import ProductListScreen from "./screens/ProductListScreen";
import store from "./store";

const marginTopDevice = Platform.OS == "iOS" ? 50 : 5;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ProductListScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: marginTopDevice,
    padding: 5,
    backgroundColor: "#fff"
  }
});
