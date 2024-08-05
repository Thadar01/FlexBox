import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import SelectArea from "./SelectArea";
import Blocks from "./Blocks";

const MainDisplay = () => {
  const [flexDirection, setDirection] = useState("");
  const [justifyContent, setJustifyContent] = useState("");
  const [alignItem, setAlignItem] = useState("");

  const handleDirection = (direction: string) => {
    setDirection(direction);
  };
  const handleJustifyContent = (contentPosition: string) => {
    setJustifyContent(contentPosition);
  };
  const handleAlignItem = (itemPosition: string) => {
    setAlignItem(itemPosition);
  };
  return (
    <SafeAreaView>
      <Text>MainDisplay</Text>
      <SelectArea
        handleDirection={handleDirection}
        handleJustifyContent={handleJustifyContent}
        handleAlignItem={handleAlignItem}
      />
      <Blocks
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItem={alignItem}
      />
    
    </SafeAreaView>
  );
};

export default MainDisplay;
