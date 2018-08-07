import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import If from "components/If";
import ItemCard from "components/ItemCard";
import * as ProductActions from "store/actions/ProductActions";

export class ProductListScreen extends Component {
  componentDidMount() {
    this.props.requestProductList();
  }

  createRows = (list, columns) => {
    let data = [...list];
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
    return data;
  };

  itemListParser = () => {
    const products = this.props.products.data;
    if (products === undefined || products === null) {
      return [];
    }
    return Object.keys(products)
      .map(key => {
        return {
          id: key,
          text: products[key].text,
          image_url: products[key].image_url
        };
      })
      .filter(item => item !== undefined);
  };

  renderItem = item => {
    if (item.empty) {
      return <View style={[styles.item, styles.itemEmpty]} />;
    } else {
      return (
        <View style={styles.item}>
          <ItemCard item={item} />
        </View>
      );
    }
  };

  render() {
    const productsList = this.itemListParser();
    const { loading } = this.props.products;
    const columns = 2;
    return (
      <SafeAreaView style={styles.container}>
        <If test={loading}>
          <ActivityIndicator
            style={styles.activityIndicator}
            animating={loading}
            size="large"
          />
        </If>
        <If test={!loading}>
          <If test={productsList.length < 1}>
            <Text style={styles.listIsEmpty}>Your product list is empty!</Text>
          </If>
          <If test={productsList.length > 1}>
            <FlatList
              numColumns={columns}
              data={this.createRows(productsList, columns)}
              keyExtractor={item => item.id}
              renderItem={({ item }) => this.renderItem(item)}
            />
          </If>
        </If>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  listIsEmpty: {
    flex: 1,
    textAlign: "center",
    color: "#5C5C5C",
    fontFamily: "Helvetica Neue",
    fontSize: 18
  },
  activityIndicator: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flex: 1,
    margin: 5,
    marginBottom: 20
  },
  itemEmpty: {
    backgroundColor: "transparent"
  }
});

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListScreen);
