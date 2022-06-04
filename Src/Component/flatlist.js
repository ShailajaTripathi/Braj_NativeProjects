// flatlist :horizontal,vertical scroll view

import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "Indus",
    },
    {
      index: "2",
      name: "Net",
    },
    {
      index: "3",
      name: "Technology",
    },
    {
      index: "4",
      name: "Indus",
    },
    {
      index: "5",
      name: "Net",
    },
    {
      index: "6",
      name: "Technology",
    },
    {
      index: "7",
      name: "Chennai",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      // horizontal
      vertical
      //   inverted
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={styles.textStyle}> {item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "#ffbf00",
    margin: 20,
    width:"20%",
    // height:"10%",
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListDemo;


