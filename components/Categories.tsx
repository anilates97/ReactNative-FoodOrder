import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Categories() {
  const items = [
    {
      id: "1",
      name: "En Hızlı Teslimat",
    },
    {
      id: "2",
      name: "Puanı 4.0 üstü",
    },
    {
      id: "3",
      name: "Teklifler",
    },
    {
      id: "4",
      name: "Mutfaklar",
    },
    {
      id: "5",
      name: "Maksimum Güvenlik",
    },
    {
      id: "6",
      name: "Profesyonel",
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 5 }}>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 5,
                backgroundColor: "#db7093",
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 5,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {item?.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
