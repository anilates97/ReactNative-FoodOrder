import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Hotels } from "../types/hotels";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Hotel({ hotel }: Hotels) {
  return (
    <Pressable
      style={{
        marginHorizontal: 6,
        marginVertical: 12,
        borderRadius: 20,
        backgroundColor: "white",
      }}
    >
      <Image
        source={{ uri: hotel.featured_image }}
        style={{
          width: "100%",
          aspectRatio: 6 / 4,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <Text
            style={{
              paddingHorizontal: 10,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {hotel?.name}
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              marginTop: 3,
              fontSize: 15,
              fontWeight: "600",
              color: "gray",
            }}
          >
            Türk Mutfağı • Fast Food • Kişi Başı 160₺
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              marginTop: 3,
              fontSize: 14,
              fontWeight: "600",
              color: "#505050",
            }}
          >
            {hotel?.time}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#006a4e",
            borderRadius: 4,
            paddingHorizontal: 4,
            paddingVertical: 5,
            marginRight: 10,
            gap: 5,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {hotel?.aggregate_rating}
          </Text>
          <Ionicons name="star" size={15} color="white" />
        </View>
      </View>

      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#c8c8c8",
          marginHorizontal: 10,
          marginVertical: 4,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          marginHorizontal: 6,
          marginVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="brightness-percent"
          size={24}
          color="#1f75fe"
        />
        <Text style={{ marginLeft: 2, color: "#1f75fe" }}>
          %20'ye varan indirim
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
