import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Menu } from "../types/menus";
import { AntDesign } from "@expo/vector-icons";
import MenuItem from "./MenuItem";

const FoodItem = ({ menu }: Menu) => {
  const data = [menu];
  return (
    <View>
      {data?.map((item, index) => (
        <>
          <Pressable
            key={item.id}
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              {item?.name} ({item?.items.length})
            </Text>
            <AntDesign name="down" size={20} color="black" />
          </Pressable>

          {menu?.items.map((item, index) => (
            <MenuItem key={index} subMenu={item} />
          ))}
        </>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
