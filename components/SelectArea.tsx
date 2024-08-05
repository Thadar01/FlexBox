import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import FlexDirection from "./FlexDirection";
import JustifyContent from "./JustifyContent";
import AlignItem from "./AlignItem";

const SelectArea = ({ handleDirection,handleJustifyContent,handleAlignItem }: any) => {
  return(
   <View style={{backgroundColor:"pink",height:200,marginBottom:10, flexDirection:"row"}}>
      <FlexDirection handleDirection={handleDirection}/>
      <JustifyContent handleJustifyContent={handleJustifyContent}/>
      <AlignItem handleAlignItem={handleAlignItem}/>
   </View>
  );
};

export default SelectArea;

const styles = StyleSheet.create({
  pressableStyle: {
    backgroundColor: "lightblue",
    width: 100,
    padding: 2,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 2,
  },
});
