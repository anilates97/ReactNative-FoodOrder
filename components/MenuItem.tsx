import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SubMenu } from "../types/menus";
import { FontAwesome } from "@expo/vector-icons";

const MenuItem = ({ subMenu }: SubMenu) => {
  return (
    <View>
      <Pressable
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", width: 220 }}>
            {subMenu?.name}
          </Text>
          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            {subMenu?.price} ₺
          </Text>
          <Text style={{ marginTop: 5, borderRadius: 4 }}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                key={i}
                style={{ paddingHorizontal: 3 }}
                name={i < Math.floor(subMenu.rating) ? "star" : "star-o"}
                size={15}
                color="#ffd700"
              />
            ))}
          </Text>

          <Text
            style={{ width: 250, marginTop: 8, color: "gray", fontSize: 16 }}
          >
            {subMenu?.description.length > 60
              ? subMenu?.description.substring(0, 37) + "..."
              : subMenu.description}
          </Text>
        </View>

        <Pressable style={{ marginRight: 10 }}>
          <Image
            source={{ uri: subMenu?.image }}
            style={{ width: 120, height: 120, borderRadius: 8 }}
          />

          <Pressable
            style={{
              position: "absolute",
              top: 95,
              left: 20,
              borderColor: "#e32636",
              borderWidth: 1,
              flexDirection: "row",
              paddingHorizontal: 25,
              paddingVertical: 5,
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#fd5c63" }}>
              EKLE
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
