import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { capitalizeFistLatter } from '../util'

const PeopleListItem = props => {
  const { people, navigationToPeopleDetail } = props;
  const { title, first, last } = people.name;
  return (
    <TouchableOpacity onPress={()=>{
      navigationToPeopleDetail();
    }}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{uri: people.picture.thumbnail}}/>
        <Text style={styles.lineText}>
          {`${
              capitalizeFistLatter(title)
          } ${
              capitalizeFistLatter(first)
          } ${
              capitalizeFistLatter(last)}`}
        </Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#BBB",
    alignItems: "center",
    flexDirection: "row"
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 10,
    flex: 7
  },
  avatar:{
    aspectRatio: 1,
    flex: 1,
    marginLeft: 10,
    borderRadius: 50,

  }
});

export default PeopleListItem;
