import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

export default function Slider() {
  const images = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <View style={{ marginLeft: 15 }}>
      <Carousel
        loop
        width={Dimensions.get("window").width}
        height={250}
        autoPlay={true}
        pagingEnabled={true}
        style={{
          borderRadius: 6,
          marginTop: 10,
          width: "94%",
        }}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{ width: Dimensions.get("window").width, height: 250 }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
