import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          Yemek Sipariş Uygulaması
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              marginTop: 12,
              color: "red",
              fontWeight: "bold",
            }}
          >
            Hesabınıza giriş yapın
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#e0e0e0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Mail adresinizi girin"
              style={{ color: "gray", marginVertical: 10, width: 300 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#e0e0e0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Şifrenizi adresinizi girin"
              style={{ color: "gray", marginVertical: 10, width: 300 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text>Oturumumu açık tut</Text>
          <Text>Şifrenizi mi unuttunuz?</Text>
        </View>

        <Pressable
          style={{
            width: 200,
            backgroundColor: "#fd5c63",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Giriş yap
          </Text>
        </Pressable>

        <Pressable
          style={{
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",

              fontSize: 16,
              color: "gray",
            }}
          >
            Hesabın yok mu? Kayıt ol
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});