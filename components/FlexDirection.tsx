import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const FlexDirection = ({handleDirection}:any) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Row", value: "row" },
      { label: "Column", value: "column" },
      { label: "Row-Reverse", value: "row-reverse" },
      { label: "Column-Reverse", value: "column-reverse" },
    ]);
  
    React.useEffect(() => {
      if (value !== null) {
        handleDirection(value);
      }
    }, [value]);
  
    console.log("value", value);
  
    const customSeparator = () => {
      return <View style={{ backgroundColor: "grey", height: 0.1 }} />;
    };
  
    return (
      <View
        style={{
          width: "30%",
        
          display: "flex",
          margin: 3,
          flexDirection:"row"
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
          placeholder={"Choose direction."}
        />
  
        
      </View>)
}

export default FlexDirection