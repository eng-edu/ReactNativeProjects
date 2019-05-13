import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = props => {
  const { peoples } = props;
  const items = peoples.map(people => {
    return <PeopleListItem key={people.name.first} people={people} />;
  });

  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff"
  }
});

export default PeopleList;
