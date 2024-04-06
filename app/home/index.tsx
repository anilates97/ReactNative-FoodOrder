import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Octicons, AntDesign } from "@expo/vector-icons";
import Slider from "../../components/Slider";

const index = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "konumunuz bulunuyor..."
  );

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Lokasyon servisi etkinleştirilmedi!",
        "Lütfen devam etmek için lokasyon servisinizi etkinleştiriniz",
        [{ text: "Tamam" }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "İzin verilmedi!",
        "Lokasyon servisini kullanmak için izin verin",
        [{ text: "Tamam" }],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item?.formattedAddress}`;

        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          padding: 10,
        }}
      >
        <Octicons name="location" size={24} color="#e52850" />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>
            {displayCurrentAddress}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            adresine teslim
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#6cb4ee",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>A</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#c0c0c0",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 11,
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <TextInput placeholder="Yemek ara" />
        <AntDesign name="search1" size={24} color="#e52b50" />
      </View>

      <Slider />
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
