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
import Hotel from "../../components/Hotel";

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

  const hotels = [
    {
      id: "0",
      featured_image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309470591.jpg?k=059f91be22a48adf3ff5e985dd709521e396b4142b1ba6dafc088a5e598ad6ba&o=&hp=1",
      name: "İstanbul Social",
      cuisines: "Türk Mutfağı • Fast Food • Kişi Başı 160₺",
      time: "35 - 40 dk • 1 Km",
      average_cost_for_two: 1600,
      aggregate_rating: 4.3,
      address: "Hakkı Yeten Cd. No: 38, Şişli, İstanbul",
      small_address: "Şişli, İstanbul",
      offer: "80₺ İndirim",
      no_of_delivery: 1500,
      latitude: 41.0628,
      longitude: 28.9877,
    },
    {
      id: "1",
      featured_image: "https://media.timeout.com/images/103502447/image.jpg",
      name: "Qubitos - Teras Kafe",
      cuisines: "Thai, Avrupa, Meksika",
      average_cost_for_two: 1500,
      aggregate_rating: 4.5,
      address: "Emirgan Mahallesi, İstanbul",
      small_address: "İstanbul",
      offer: "80₺ İndirim",
      no_of_delivery: 2500,
      latitude: 41.106,
      longitude: 29.0546,
      time: "44 dk",
    },
    {
      id: "2",
      featured_image:
        "https://static.spotapps.co/web/hudson-cafe--com/custom/location1.jpg",
      name: "Hudson Cafe",
      cuisines: "Kafe, İtalyan, Continental",
      average_cost_for_two: 850,
      aggregate_rating: 4.3,
      address:
        "Müeyyedzade Mahallesi, Turnacıbaşı Cd. No: 52, Beyoğlu, İstanbul",
      small_address: "Beyoğlu, İstanbul",
      offer: "60₺ İndirim",
      no_of_delivery: 1800,
      latitude: 41.0365,
      longitude: 28.9851,
      time: "20 dk",
    },
    {
      id: "3",
      featured_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/11/ef/7b/e2/outside-terrace-seating.jpg",
      name: "Summer House Cafe",
      cuisines: "İtalyan, Continental",
      average_cost_for_two: 1850,
      aggregate_rating: 4.1,
      address:
        "Küçükbakkalköy Mahallesi, Dudullu - Bostancı Yolu No: 68, Ataşehir, İstanbul",
      small_address: "Ataşehir, İstanbul",
      offer: "50₺ İndirim",
      no_of_delivery: 1700,
      latitude: 40.9831,
      longitude: 29.1168,
      time: "38 dk",
    },
    {
      id: "4",
      featured_image:
        "https://istanbulgrill.net/wp-content/uploads/2021/08/istanbul-grill-cheadle-wallpaper.jpg",
      name: "İstanbul Grill",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 1200,
      aggregate_rating: 4.1,
      address:
        "Fatih Sultan Mehmet Mahallesi, Karadeniz Cd. No: 5, Beylikdüzü, İstanbul",
      small_address: "Beylikdüzü, İstanbul",
      offer: "70₺ İndirim",
      no_of_delivery: 2000,
      latitude: 41.0066,
      longitude: 28.642,
      time: "25 dk",
    },
    {
      id: "5",
      featured_image:
        "https://www.kucukoteller.com.tr/storage/images/2022/05/21/7c5f89bbfa4348c4cb215c1e905c26db0726f185.webp",
      name: "İstanbul Delight",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 1000,
      aggregate_rating: 4.2,
      address:
        "Gazi Osman Paşa Mahallesi, Kocasinan Cd. No: 10, Fatih, İstanbul",
      small_address: "Fatih, İstanbul",
      offer: "50₺ İndirim",
      no_of_delivery: 1600,
      latitude: 41.0197,
      longitude: 28.968,
      time: "30 dk",
    },
    {
      id: "6",
      featured_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/a4/42/3b/genel-gorunum.jpg",
      name: "İstanbul Bistro",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 900,
      aggregate_rating: 4.4,
      address: "Yıldız Mahallesi, Çırağan Cd. No: 12, Beşiktaş, İstanbul",
      small_address: "Beşiktaş, İstanbul",
      offer: "60₺ İndirim",
      no_of_delivery: 2200,
      latitude: 41.0412,
      longitude: 29.0116,
      time: "35 dk",
    },
    {
      id: "7",
      featured_image:
        "https://cdn.tatilsepeti.com/Files/Images/Tesis/05969/450x300/tsr05969637249678124791419.jpg",
      name: "İstanbul Taste",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 1100,
      aggregate_rating: 4.6,
      address: "Hamidiye Mahallesi, Osman Gazi Cd. No: 15, Çekmeköy, İstanbul",
      small_address: "Çekmeköy, İstanbul",
      offer: "75₺ İndirim",
      no_of_delivery: 1800,
      latitude: 41.0422,
      longitude: 29.1975,
      time: "40 dk",
    },
    {
      id: "8",
      featured_image:
        "https://www.gezengenc.com/wp-content/uploads/2016/04/Eresin_Crown_-_Mosaic_Terrace_Blue_Mosque_side_-_day-850-x-637.jpg",
      name: "İstanbul Cuisine",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 950,
      aggregate_rating: 4.3,
      address: "Yeşil Mahallesi, Adnan Kahveci Blv. No: 22, Ümraniye, İstanbul",
      small_address: "Ümraniye, İstanbul",
      offer: "55₺ İndirim",
      no_of_delivery: 2000,
      latitude: 41.0178,
      longitude: 29.1307,
      time: "32 dk",
    },
    {
      id: "9",
      featured_image:
        "https://pix10.agoda.net/hotelImages/4879593/0/45208c719664fde306ec33e577195b06.jpg?ca=23&ce=0&s=702x392",
      name: "İstanbul Treat",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 800,
      aggregate_rating: 4.1,
      address: "Mahmutbey Mahallesi, Gümüşhane Cd. No: 32, Bağcılar, İstanbul",
      small_address: "Bağcılar, İstanbul",
      offer: "60₺ İndirim",
      no_of_delivery: 2300,
      latitude: 41.0461,
      longitude: 28.8393,
      time: "28 dk",
    },
    {
      id: "10",
      featured_image:
        "https://resizer.otstatic.com/v2/photos/wide-xlarge/4/29263247.jpg",
      name: "İstanbul Dine",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 850,
      aggregate_rating: 4.5,
      address: "Çırpıcı Mahallesi, Gürsel Cd. No: 25, Maltepe, İstanbul",
      small_address: "Maltepe, İstanbul",
      offer: "65₺ İndirim",
      no_of_delivery: 1900,
      latitude: 40.9156,
      longitude: 29.1903,
      time: "42 dk",
    },
    {
      id: "11",
      featured_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0c/bc/bf/57/saray-caferestorant-galata.jpg",
      name: "Saray Restaurant",
      cuisines: "Osmanlı Mutfağı",
      average_cost_for_two: 1800,
      aggregate_rating: 4.4,
      address: "Piyalepaşa Blv. No: 67, Eyüp, İstanbul",
      small_address: "Eyüp, İstanbul",
      offer: "80₺ İndirim",
      no_of_delivery: 2200,
      latitude: 41.0457,
      longitude: 28.9331,
      time: "35 dk",
    },
    {
      id: "12",
      featured_image:
        "https://images.trvl-media.com/lodging/84000000/83110000/83103900/83103870/fdf2c62b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      name: "Grand İstanbul",
      cuisines: "Türk ve Uluslararası Mutfağı",
      average_cost_for_two: 2000,
      aggregate_rating: 4.6,
      address: "Şair Nedim Cd. No: 18, Harbiye, İstanbul",
      small_address: "Harbiye, İstanbul",
      offer: "90₺ İndirim",
      no_of_delivery: 2500,
      latitude: 41.0404,
      longitude: 28.9902,
      time: "38 dk",
    },
    {
      id: "13",
      featured_image:
        "https://cdng.jollytur.com/files/cms/media/hotel/72ca8d6f-3600-42b6-b181-7a2057836cc1-600.jpg",
      name: "İstanbul Manzarası",
      cuisines: "Türk ve Uluslararası Mutfağı",
      average_cost_for_two: 2200,
      aggregate_rating: 4.8,
      address: "Molla Gürani Mahallesi, Halitpaşa Cd. No: 28, Fatih, İstanbul",
      small_address: "Fatih, İstanbul",
      offer: "100₺ İndirim",
      no_of_delivery: 2800,
      latitude: 41.0171,
      longitude: 28.9598,
      time: "40 dk",
    },
    {
      id: "14",
      featured_image:
        "https://istanbul.com/upload/istanbul-about-city-food-drink-restaurant-bars-rooftop-restaurants-teras-terrace-3.webp",
      name: "İstanbul Çatı Katı",
      cuisines: "Türk ve Uluslararası Mutfağı",
      average_cost_for_two: 2500,
      aggregate_rating: 4.9,
      address: "Büyükdere Cd. No: 173, Şişli, İstanbul",
      small_address: "Şişli, İstanbul",
      offer: "110₺ İndirim",
      no_of_delivery: 3000,
      latitude: 41.0732,
      longitude: 28.9912,
      time: "45 dk",
    },
    {
      id: "15",
      featured_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1d/7b/3e/fa/peaceful-atmosphere-formed.jpg",
      name: "İstanbul Garden",
      cuisines: "Türk ve Akdeniz Mutfağı",
      average_cost_for_two: 1500,
      aggregate_rating: 4.2,
      address:
        "Bahçelievler Mahallesi, Nilüfer Cd. No: 45, Bahçelievler, İstanbul",
      small_address: "Bahçelievler, İstanbul",
      offer: "75₺ İndirim",
      no_of_delivery: 2000,
      latitude: 41.0013,
      longitude: 28.8721,
      time: "32 dk",
    },
    {
      id: "16",
      featured_image:
        "https://media-cdn.tripadvisor.com/media/photo-p/17/f6/24/19/seaside.jpg",
      name: "Marmara Restaurant",
      cuisines: "Türk ve Deniz Ürünleri",
      average_cost_for_two: 2000,
      aggregate_rating: 4.6,
      address: "Atatürk Mahallesi, İstanbul Cd. No: 78, Pendik, İstanbul",
      small_address: "Pendik, İstanbul",
      offer: "90₺ İndirim",
      no_of_delivery: 2400,
      latitude: 40.8725,
      longitude: 29.2343,
      time: "38 dk",
    },
    {
      id: "17",
      featured_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/12/0b/b0/a2/interieur-de-notre-restaurant.jpg",
      name: "Lezzetler İstanbul'da",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 1200,
      aggregate_rating: 4.3,
      address:
        "Büyükçekmece Mahallesi, Mehmet Akif Cd. No: 15, Büyükçekmece, İstanbul",
      small_address: "Büyükçekmece, İstanbul",
      offer: "70₺ İndirim",
      no_of_delivery: 1800,
      latitude: 41.0094,
      longitude: 28.5847,
      time: "42 dk",
    },
    {
      id: "18",
      featured_image:
        "https://www.gastronomidergisi.com/images/haber/img_02405913.jpg",
      name: "İstanbul Mutfağı",
      cuisines: "Türk Mutfağı",
      average_cost_for_two: 1700,
      aggregate_rating: 4.5,
      address: "Kartal Mahallesi, Kartal Cd. No: 32, Kartal, İstanbul",
      small_address: "Kartal, İstanbul",
      offer: "80₺ İndirim",
      no_of_delivery: 2200,
      latitude: 40.8981,
      longitude: 29.1944,
      time: "40 dk",
    },
    {
      id: "19",
      featured_image:
        "https://pix10.agoda.net/hotelImages/4879593/0/45208c719664fde306ec33e577195b06.jpg?ca=23&ce=0&s=702x392",
      name: "İstanbul Zevkleri",
      cuisines: "Türk ve Asya Mutfağı",
      average_cost_for_two: 1800,
      aggregate_rating: 4.4,
      address: "Üsküdar Mahallesi, İstanbul Cd. No: 56, Üsküdar, İstanbul",
      small_address: "Üsküdar, İstanbul",
      offer: "85₺ İndirim",
      no_of_delivery: 2600,
      latitude: 41.0262,
      longitude: 29.0147,
      time: "45 dk",
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

      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        Tüm Restaurantlar
      </Text>

      <View style={{ marginHorizontal: 8 }}>
        {hotels?.map((item, index) => (
          <Hotel key={item.id} hotel={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
