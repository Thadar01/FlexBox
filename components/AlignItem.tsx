import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const AlignItem = ({handleAlignItem}:any) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Baseline", value: "baseline" },
      { label: "Center", value: "center" },
      { label: "Flex-end", value: "flex-end" },
      { label: "Flex-start", value: "flex-start" },
      { label: "Strech", value: "strech" },
    ]);
  
    React.useEffect(() => {
      if (value !== null) {
        handleAlignItem(value);
      }
    }, [value]);
  
    console.log("value", value);
  
 
  
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
          placeholder={"Align Item"}
        />
  
        
      </View>)
}

export default AlignItem