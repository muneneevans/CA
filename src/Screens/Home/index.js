import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ListView,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import GridView from "react-native-super-grid";
export default class Home extends Component {
  render() {
    let {
      container,
      header,
      titleContainer,
      textContainer,
      title,
      secondaryTitle,
      icon,
      iconContainer,
      bannerContainer,
      content,
      bannerImage,
      bannerText,
      contentHeaderContainer,
      contentHeader,
      card,
      cardText,
      gridView
    } = styles;

    const items = [
      {
        title: "Principles",
        description:
          "To ensure participants understand Conservation Agriculture in the LUSIP-GEF Project and appreciated opportunities and contrainsts that may come with the technology",
        code: "#1abc9c",
        image:
          "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        articles: [
          { title: "article1", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article2", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article3", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article4", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article5", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article5", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article6", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article7", content: "asdfasdfadsfadsf asdfasdfasdf" },
          { title: "article8", content: "asdfasdfadsfadsf asdfasdfasdf" }
        ]
      },
      {
        title: "Conservation",
        code: "#1abc9c",
        description: "Lorem ipsum sit amet dolor consecateour",
        image:
          "https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        articles: []
      },
      {
        title: "Practices",
        code: "#1abc9c",
        description: "Lorem ipsum sit amet dolor consecateour",
        image:
          "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        articles: []
      },
      {
        title: "Practices",
        code: "#1abc9c",
        description: "Lorem ipsum sit amet dolor consecateour",
        image:
          "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        articles: []
      },
      {
        title: "Practices",
        code: "#1abc9c",
        description: "Lorem ipsum sit amet dolor consecateour",
        image:
          "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        articles: []
      }
    ];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    let dataSource = ds.cloneWithRows([
      "row 1",
      "row 2",
      "evans",
      "kanyithia",
      "muunene"
    ]);

    return (
      <ScrollView style={container}>
        <View style={header}>
          <View style={titleContainer}>
            <View style={textContainer}>
              <Text style={title}>CONSERVATION AGRICULTURE</Text>
              <TouchableOpacity>
                <View style={iconContainer}>
                  <Icon name="alert-circle" style={icon} size={30} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={bannerContainer}>
            <TouchableOpacity
              onPress={() => {
                console.log("click");
              }}
              style={{ flex: 1 }}
            >
              <ImageBackground
                style={bannerImage}
                source={{
                  uri:
                    "https://images.pexels.com/photos/753869/pexels-photo-753869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                }}
              >
                <Text style={bannerText}>PRINCIPLES</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={content}>
          <View style={contentHeaderContainer}>
            <Text style={contentHeader}>Topics</Text>
          </View>
          <GridView
            itemDimension={150}
            items={items}
            style={gridView}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("TopicPage", { topic: item });
                }}
                style={card}
              >
                <ImageBackground
                  style={[card, { backgroundColor: item.code }]}
                  // style={card}
                  source={{
                    uri: item.image
                  }}
                >
                  <Text style={cardText}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red"
  },
  header: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    padding: 5
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  title: {
    flex: 3,
    fontFamily: "JosefinSans_Bold",
    fontSize: 24,

    color: "#3d3d3d"
  },
  iconContainer: {
    paddingTop: 5
  },
  icon: {
    color: "#3d3d3d"
  },
  bannerContainer: {
    flex: 2,
    backgroundColor: "#ce2727",
    elevation: 2,
    borderRadius: 10
  },
  bannerImage: {
    flex: 1,
    // aspectRatio: 1.1,
    flexDirection: "row",
    alignItems: "flex-end",

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
    minHeight: 150,
    elevation: 3
  },
  bannerText: {
    flex: 1,
    fontFamily: "JosefinSans_Regular",
    fontSize: 24,
    color: "#ffffff"
  },
  content: {
    flex: 3,
    backgroundColor: "#ffffff",
    paddingTop: 15
  },
  contentHeaderContainer: {
    padding: 5
  },
  contentHeader: {
    fontSize: 20,
    fontFamily: "JosefinSans_Regular",
    color: "#3d3d3d"
  },
  card: {
    flex: 1,
    // aspectRatio: 1.1,
    flexDirection: "row",
    alignItems: "flex-end",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
    minHeight: 150,
    elevation: 4
  },
  cardText: {
    fontFamily: "JosefinSans_Regular",
    fontSize: 24,
    color: "#ffffff"
  },

  gridView: {
    flex: 1
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#fff"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  }
});
