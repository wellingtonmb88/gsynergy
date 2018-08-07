import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export default class itemCard extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  state = {
    imageLoaded: false
  };

  render() {
    const { item } = this.props;
    const { imageLoaded } = this.state;
    const imageStyle = imageLoaded ? styles.image : styles.imageMin;

    return (
      <View style={styles.container}>
        <ShimmerPlaceHolder
          style={styles.shimmerImageComponent}
          autoRun={true}
          visible={imageLoaded}
          backgroundColorBehindBorder={"white"}
        />
        <Image
          style={imageStyle}
          source={{ uri: item.image_url }}
          onLoad={() => {
            this.setState({ imageLoaded: true });
          }}
        />
        <ShimmerPlaceHolder
          style={styles.shimmerTextComponent}
          autoRun={true}
          visible={imageLoaded}
        >
          <Text style={styles.text}>{item.text}</Text>
        </ShimmerPlaceHolder>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200
  },
  shimmerImageComponent: {
    height: 180,
    borderRadius: 14
  },
  image: {
    height: 180,
    overflow: "hidden",
    borderRadius: 14
  },
  imageMin: {
    width: 1,
    height: 1
  },
  shimmerTextComponent: {
    marginTop: 12,
    marginLeft: 9
  },
  text: {
    textAlign: "left",
    color: "#5C5C5C",
    marginTop: 12,
    marginLeft: 9,
    fontFamily: "Helvetica Neue",
    fontSize: 18
  }
});
