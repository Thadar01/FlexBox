import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const JustifyContent = ({handleJustifyContent}:any) => {
  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Center", value: "center" },
      { label: "Flex-end", value: "flex-end" },
      { label: "Flex-start", value: "flex-start" },
      { label: "Space-arround", value: "space-around" },
      { label: "Space-between", value: "space-between" },
      { label: "Space-evenly", value: "space-evenly" },
    ]);
  
    React.useEffect(() => {
      if (value !== null) {
        handleJustifyContent(value);
      }
    }, [value]);
  
    console.log("value", value);
  
   
  
    return (
      <View
        style={{
          width: "30%",
        
          display: "flex",
          marginBottom: 10,
          flexDirection:"row",
          margin:3
        }}
      >
        <DropDownPicker
          style={{ backgroundColor: "lightblue", width: "100%" }}
          dropDownContainerStyle={{ width: "100%", height: 130 }}
          selectedItemContainerStyle={{ backgroundColor: "white", height: 20 }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={"Justify Content"}
        />
  
        
      </View>)

  
}

export default JustifyContent