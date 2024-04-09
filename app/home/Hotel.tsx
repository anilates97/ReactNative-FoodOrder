import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import FoodItem from "../../components/FoodItem";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

type SearchParams = {
  id: string;
  name: string;
  aggregate_rating: string;
  address: string;
  cuisines: string;
  small_address: string;
};

export default function Hotel() {
  const hotel = useLocalSearchParams<SearchParams>();

  const navigation = useNavigation<any>();

  const menu = [
    {
      id: "20",
      name: "Tavsiye Edilenler",
      items: [
        {
          id: "102",
          name: "Tavuklu Acılı Tavuk (Kemiksiz)",
          price: 285,
          description:
            "E: 604.42 KCal (163.36 KCal), C: 29.67 Gram (8.02 Gram), P: 50.63 Gram (13.68 Gram), F: 30.94 Gram (8.36 Gram)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://cdn.yemek.com/mncrop/940/625/uploads/2024/01/tatli-aci-soslu-tavuk-roza.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "401",
          name: "Mercimek Çorbası",
          price: 15,
          description: "Geleneksel Türk mutfağının vazgeçilmez çorbası.",
          rating: 4.6,
          ratings: 78,
          image:
            "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/mercimek-corbasi-yemekcom.jpg",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "501",
          name: "Adana Kebap",
          price: 35,
          description:
            "Türk mutfağının eşsiz lezzetlerinden biri olan Adana kebap.",
          rating: 4.8,
          ratings: 120,
          image:
            "https://cdn.yemek.com/mnresize/940/940/uploads/2016/05/adana-kebap-one-cikan.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "602",
          name: "Künefe",
          price: 20,
          description:
            "Tel tel açılan kadayıfın içine peynir konularak yapılan bir tatlı.",
          rating: 4.7,
          ratings: 110,
          image:
            "https://i.lezzet.com.tr/images-xxlarge-recipe/kaymakli_kunefe-1fda980f-6b06-464f-8cbc-101155f01e3d.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "11",
      name: "Pilavlar",
      items: [
        {
          id: "201",
          name: "Tavuklu Kavrulmuş Pilav",
          price: 260,
          description:
            "E: 1142.26 KCal (163.18 KCal), C: 125.05 Gram (17.86 Gram), P: 40.11 Gram (5.73 Gram), F: 51.37 Gram (7.34 Gram)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/12/pilav-ustu-tavuk-tarifi.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "106",
      name: "Kahvaltılıklar",
      items: [
        {
          id: "301",
          name: "Menemen",
          price: 20,
          description:
            "Domates, biber ve yumurta ile yapılan lezzetli bir kahvaltı yemeği.",
          rating: 4.7,
          ratings: 112,
          image:
            "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/10/soganli-menemen-yemekcom.jpg",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "107",
      name: "Çorbalar",
      items: [
        {
          id: "402",
          name: "Tavuklu Şehriye Çorbası",
          price: 18,
          description: "Tavuk suyu ile yapılan lezzetli bir çorba.",
          rating: 4.3,
          ratings: 64,
          image:
            "https://i.nefisyemektarifleri.com/2021/03/09/tavuklu-arpa-sehriye-corbasi-tarifi-4.jpg",
          veg: false,
          bestSeller: false,
          quantity: 1,
        },
      ],
    },
    {
      id: "108",
      name: "Izgara Çeşitleri",
      items: [
        {
          id: "502",
          name: "Tavuk Şiş",
          price: 30,
          description:
            "Marine edilmiş tavuk etlerinden yapılan nefis bir ızgara çeşidi.",
          rating: 4.6,
          ratings: 95,
          image:
            "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/firinda-tavuk-sis-asama-one-cikan.jpg",
          veg: false,
          bestSeller: false,
          quantity: 1,
        },
      ],
    },
    {
      id: "109",
      name: "Tatlılar",
      items: [
        {
          id: "601",
          name: "Baklava",
          price: 25,
          description: "Hamur işi tatlıların vazgeçilmezi, şerbetli baklava.",
          rating: 4.9,
          ratings: 150,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "602",
          name: "Künefe",
          price: 20,
          description:
            "Tel tel açılan kadayıfın içine peynir konularak yapılan bir tatlı.",
          rating: 4.7,
          ratings: 110,
          image:
            "https://i.lezzet.com.tr/images-xxlarge-recipe/kaymakli_kunefe-1fda980f-6b06-464f-8cbc-101155f01e3d.jpg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
  ];

  const scrollViewRef = useRef<any>(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;

  const scrollToCategory = (index: number) => {
    const yOffSet = index * ITEM_HEIGHT;
    Animated.timing(scrollAnim, {
      toValue: yOffSet,
      duration: 500,
      useNativeDriver: true,
    }).start();

    scrollViewRef.current.scrollTo({ y: yOffSet, animated: true });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const cart = useSelector((state: any) => state.cart.cart);

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }} ref={scrollViewRef}>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
            style={{ padding: 5 }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
              gap: 10,
            }}
          >
            <SimpleLineIcons name="camera" size={24} color="black" />
            <Ionicons name="bookmark-outline" size={24} color="black" />
            <Ionicons name="share-outline" size={24} color="black" />
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {hotel?.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "gray",
              fontWeight: "500",
              fontSize: 15,
            }}
          >
            {" "}
            Türk Mutfağı • Fast Food • Kişi Başı 160₺
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",

                alignItems: "center",
                backgroundColor: "#006a4e",
                borderRadius: 4,
                paddingHorizontal: 4,
                paddingVertical: 5,
                gap: 5,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                {hotel?.aggregate_rating}
              </Text>
              <Ionicons name="star" size={15} color="white" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 5 }}>
              3.7K Görüntülenme
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#d0f0c0",
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 12,
            }}
          >
            <Text>30 - 40 dakika 📍 6 km | İstanbul</Text>
          </View>
        </View>

        {menu?.map((item, index) => (
          <FoodItem key={index} menu={item} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: "row", backgroundColor: "white" }}>
        {menu?.map((item, index) => (
          <Pressable
            onPress={() => scrollToCategory(index)}
            style={{
              paddingHorizontal: 7,
              borderRadius: 4,
              paddingVertical: 5,
              marginVertical: 10,
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#181818",
              borderWidth: 1,
            }}
          >
            <Text>{item?.name}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 25,
          bottom: cart?.length > 0 ? 95 : 35,
          backgroundColor: "#393535",
        }}
      >
        <Ionicons
          name="fast-food-outline"
          size={24}
          color="white"
          style={{ textAlign: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontSize: 11,
            marginTop: 3,
          }}
        >
          MENÜ
        </Text>
      </Pressable>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            height: 320,
            width: 250,
            backgroundColor: "#393535",
            position: "absolute",
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}
        >
          {menu?.map((item, index) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#d0d0d0", fontWeight: "600", fontSize: 18 }}
              >
                {item?.name}
              </Text>
              <Text
                style={{ color: "#d0d0d0", fontWeight: "600", fontSize: 18 }}
              >
                {item?.items.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: "contain" }}
              source={require("../../assets/pngegg.png")}
            />
          </View>
        </View>
      </Modal>

      {cart?.length > 0 && (
        <Pressable
          style={{
            backgroundColor: "#fd5c63",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {cart.length} yemek eklendi
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              marginTop: 5,
              fontWeight: "bold",
            }}
          >
            35 ₺ indirim kazanmak için 240 ₺ değerinde ürün ekleyin.
          </Text>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
