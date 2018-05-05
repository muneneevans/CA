import React, { Component } from "react";
import { Image } from "react-native";

import { TextView, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#e2e2e2"
  },
  item: {
    
  },
  itemHeader: {
    color: "black",
    // fontWeight: "bold",
    fontFamily: "JosefinSans_Light",
    fontSize: 22,
    textAlign: "left"
  },
  itemDescription: {
    fontSize: 10
  },
  sideContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  }
});
const ArticleItem = ({ article }) => {
  const { title } = article;
  let { container, item, itemHeader, itemDescription, sideContent } = styles;

  //overwrite the default styles

  return (
    <View style={container}>
      <View style={[item]}>
        <Text style={itemHeader}> {title}</Text>
        {/* <Text style={itemDescription}> {title}</Text> */}
      </View>
      <View style={sideContent}>
        <Text> {"read"}</Text>
      </View>
    </View>
  );
};

export default ArticleItem;
