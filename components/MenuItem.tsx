import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SubMenu } from "../types/menus";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/CartReducer";

const MenuItem = ({ subMenu }: SubMenu) => {
  const [addItems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
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

          {selected ? (
            <Pressable
              style={{
                position: "absolute",
                top: 95,
                left: 20,
                flexDirection: "row",
                paddingHorizontal: 10,
                alignItems: "center",
                backgroundColor: "#fd5c63",
                borderRadius: 5,
              }}
            >
              <Pressable
                onPress={() => {
                  if (addItems === 1) {
                    dispatch(removeFromCart(subMenu));
                    setAddItems(0);
                    setSelected(false);
                    return;
                  } else {
                    setAddItems((c) => c - 1);
                    dispatch(decrementQuantity(subMenu));
                  }
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "white", paddingHorizontal: 6 }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{ fontSize: 25, color: "white", paddingHorizontal: 6 }}
                >
                  {addItems}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItems((c) => c + 1);
                  dispatch(incrementQuantity(subMenu));
                }}
              >
                <Text
                  style={{ fontSize: 17, color: "white", paddingHorizontal: 6 }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (addItems === 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(subMenu));
              }}
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
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#fd5c63" }}
              >
                EKLE
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
