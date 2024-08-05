import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MainDisplay from "./MainDisplay";

const Blocks = ({ flexDirection, justifyContent, alignItem }: any) => {
  return (
    <View
      style={{
        width: "100%",
        height: 300,
        borderWidth: 3,
        borderColor: "green",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItem,
      }}
    >
      <View style={{ width: 100, height: 80, backgroundColor: "lightblue", justifyContent:"center",alignItems:"center" }}>
        <Text>1</Text>
      </View>
      <View style={{ width: 100, height: 80, backgroundColor: "red",justifyContent:"center",alignItems:"center" }}>
        <Text style={{fontSize:30}}>2</Text>
      </View>
      <View style={{ width: 100, height: 80, backgroundColor: "pink",justifyContent:"center",alignItems:"center" }}>
        <Text style={{fontSize:60}}>3</Text>
      </View>
    </View>
  );
};

export default Blocks;
