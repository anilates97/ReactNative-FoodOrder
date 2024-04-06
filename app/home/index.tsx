import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Octicons, AntDesign, Ionicons } from "@expo/vector-icons";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";

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

  const recommended = [
    {
      id: 0,
      name: "The Green Park",
      image:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f33d5e96-f960-486f-94ac-cbabe3074ead/Derivates/0454bd7c-c1e3-4010-9a74-39aa130417ba.jpg",
      time: "10 - 25",
      type: "İtalya",
    },
    {
      id: 1,
      name: "Mercure Istanbul Taksim",
      image:
        "https://cdn.yemek.com/mncrop/620/388/uploads/2023/03/sihil-mahsi-yemekcom.jpg",
      time: "10 - 35",
      type: "Türkiye",
    },
    {
      id: 2,
      name: "Radisson Blu Hotel Pera",
      image:
        "https://cdn.yemek.com/mncrop/620/388/uploads/2015/07/islak-kek-ytk-site.jpg",
      time: "15 - 40",
      type: "Türkiye",
    },

    {
      id: 3,
      name: "Radisson Blu Hotel Pera",
      image:
        "https://cdn.yemek.com/mncrop/620/388/uploads/2014/06/ezogelin-corbasi-yemekcom.jpg",
      time: "15 - 60",
      type: "Türkiye",
    },
    {
      id: 4,
      name: "Radisson Blu Hotel Pera",
      image:
        "https://cdn.yemek.com/mncrop/620/388/uploads/2023/11/islak-kurabiye-yemekcom.jpg",
      time: "15 - 40",
      type: "Türkiye",
    },
  ];

  const items = [
    {
      id: "0",
      name: "Teklifler",
      description: "%50'ye varan indirim",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Efsaneler",
      description: "Türkiye genelinde",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gurme",
      description: "Genel seçimler",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Sağlıklı",
      description: "Seçilmiş yemekler",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
  ];

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

      <Categories />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommended.map((item, index) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              margin: 10,
              borderRadius: 8,
            }}
          >
            <View>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 7,
                }}
              />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  flex: 1,
                  marginTop: 3,
                  color: "gray",
                  fontWeight: "500",
                }}
              >
                {item?.type}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Ionicons name="time" size={24} color="green" />
                <Text>{item?.time} dakika</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        KEŞFET
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => (
          <View
            key={index}
            style={{
              width: 90,
              borderColor: "#e0e0e0",
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 1,
              borderRadius: 5,
              marginLeft: 10,
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 70 }}
            />

            <Text style={{ fontSize: 13, fontWeight: "500", marginTop: 6 }}>
              {item?.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "gray",
                marginTop: 3,
                textAlign: "center",
              }}
            >
              {item?.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
